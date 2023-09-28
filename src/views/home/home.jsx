import React from "react";
import carOne from "../../assets/images/car01.png";
import carTwo from "../../assets/images/car02.png";
import carThree from "../../assets/images/car03.png";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const slides = [
    {
      image: carOne,
      header: "Luxury cars starting from 30$ a day",
      smallHeader: "Plan your trip now",
    },
    {
      image: carTwo,
      header: "Get 15% off on your 1st rental",
      smallHeader: "Treat yourself",
    },
    {
      image: carThree,
      header: "Luxury cars starting from 30$ a day",
      smallHeader: "Plan your trip now",
    },
  ];

  return (
    <section className="home" id="home">
      <Carousel touch={true} className="home-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item>
            <h3>{slide.header}</h3>
            <p>{slide.smallHeader}</p>
            <img src={slide.image} alt={`car-${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="bottom-arrow"></div>
    </section>
  );
};

export default Home;
