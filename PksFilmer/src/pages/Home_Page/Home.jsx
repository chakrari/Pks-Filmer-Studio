import React from "react";
import Carousel from "../../components/Carousel_compo/Carousel";
import Hero from "../../components/Hero_Section/Hero";

import carousel1 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel1.avif";
import carousel2 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel2.avif";
import carousel3 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel3.avif";
import carousel4 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel4.avif";

const slides = [carousel1, carousel2, carousel3, carousel4];

const Home = () => {
  return (
    <>
      <Carousel slides={slides} />
      <Hero />
    </>
  );
};

export default Home;
