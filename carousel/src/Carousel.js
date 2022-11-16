import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  console.log('Current Card', currCardIdx, setCurrCardIdx);
  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1 -> loops at end.
  function goForward() {
    setCurrCardIdx(currCardIdx === total - 1 ? 0 : currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1 -> loops at end.
  function goBackward() {
    setCurrCardIdx(currCardIdx === 0 ? total - 1 : currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">

        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
          style={{ "visibility": currCardIdx === 0 ? "hidden" : "visible" }}
        />

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          style={{ "visibility": currCardIdx === 2 ? "hidden" : "visible" }}

        />
      </div>
    </div>
  );
}

export default Carousel;
