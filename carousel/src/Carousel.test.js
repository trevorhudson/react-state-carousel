import { render, fireEvent, debug } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

//snapshot tests -> for individual actions
describe("Carousel tests", function () {

  it("renders the Carousel without crashing", function () {

    render(< Carousel photos={TEST_IMAGES} title={"Test carouselTitle"} />);
  });

  it("matches the snapshot", function () {
    const { container } = render(
      < Carousel photos={TEST_IMAGES} title={"Test carouselTitle"} />);

    expect(container).toMatchSnapshot();
  });

  it("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  });

  it("matches snapshot after clicking right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
    expect(container).toMatchSnapshot();
  });

  it("works when you click on the left arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);


    // expect the first image to show, but not the second, or third
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).not.toBeInTheDocument();


    // move backwards in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    // expect the last image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
  });

  it("matches snapshot after clicking left arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    expect(container).toMatchSnapshot();
  });

  // change name -> first image
  it("left arrow hidden on first image", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    expect(leftArrow).toBeVisible();

    expect(
      container.querySelector('.bi-arrow-left-circle')
    ).toBeInTheDocument();

    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    expect(leftArrow).not.toBeVisible();

    expect(
      container.querySelector('.bi-arrow-left-circle')
    ).toBeInTheDocument();

  });

  it("right arrow hidden on last image ", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    expect(
      container.querySelector('.bi-arrow-right-circle')
    ).toBeInTheDocument();

    expect(rightArrow).toBeVisible();

    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    expect(rightArrow).not.toBeVisible();

    expect(
      container.querySelector('.bi-arrow-right-circle')
    ).not.toBeInTheDocument();

  });

})




