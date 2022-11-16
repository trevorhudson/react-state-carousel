import react from "react";
import './Coin.css';

function Coin({ img }) {
  console.log(img);
  return (
    <div className="Coin">
      <img src={img} alt="Coin Face"></img>
    </div>
  );
}

export default Coin;
