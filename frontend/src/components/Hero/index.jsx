import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import slides from "../../constants/slider.js";
import Slide from "./Slider";

const Hero = () => {
  const [heroSlide, setHeroSlide] = useState([]);
  useEffect(() => {
    setHeroSlide(slides);
  }, []);

  return (
    <Carousel infiniteLoop interval={2000} autoPlay={true} centerMode={false}>
      {heroSlide.map((slider, index) => {
        return <Slide slider={slider} key={index} />;
      })}
    </Carousel>
  );
};

export default Hero;
