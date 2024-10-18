import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div className="bg-black w-100 mr-3">Item 1</div>
      <div className="bg-black w-100 mr-3">Item 2</div>
      <div className="bg-black w-100 mr-3">Item 3</div>
      <div className="bg-black w-100 mr-3">Item 4</div>
      <div className="bg-black w-100 mr-3">Item 4</div>
    </Carousel>
  );
};

export default CarouselPage;
