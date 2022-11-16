import react, { useState } from "react";
import Coin from "./Coin";
import pickRandom from "./random";

const faces = [
  {
    faceName: "heads",
    imgUrl: "https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_SY1000_.jpg",
  },
  {
    faceName: "tails",
    imgUrl:
      "https://www.kindpng.com/picc/m/131-1318377_quarter-coin-penny-clip-art-tails-on-a.png",
  },
];

function CoinFlip() {
  const [face, setFace] = useState(0);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const numFlips = headCount + tailCount;
  console.log(face);

  function handleClick(evt) {
    const coinSide = pickRandom(faces);
    setFace(coinSide);
    if (coinSide.faceName === "heads") {
      setHeadCount(headCount + 1);
    } else {
      setTailCount(tailCount + 1);
    }
  }

  return (
    <div>
      <Coin img={face.imgUrl}/>
      <button className="CoinFlip" onClick={handleClick}>
        <b>FLIP ME</b>
      </button>
      <p>
        Out of {numFlips} flips, there have been {headCount} heads and {tailCount} tails.
      </p>
    </div>
  );
}

export default CoinFlip;
