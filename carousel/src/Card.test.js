import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

describe("Tests for Card", function () {

  it("matches snapshot", function () {
    const testCard = TEST_IMAGES[0];

    const { container } = render(
      <Card
        caption={testCard.caption}
        src={testCard.src}
        currNum={0}
        tota
        lNum={TEST_IMAGES.length}
      />);

    expect(container).toMatchSnapshot();

  });
  it("renders Card without crashing", function () {
    const testCard = TEST_IMAGES[0];

    render(
      <Card
        caption={testCard.caption}
        src={testCard.src}
        currNum={0}
        totalNum={TEST_IMAGES.length}
      />);

  });


});