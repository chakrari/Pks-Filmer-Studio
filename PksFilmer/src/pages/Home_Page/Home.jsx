import React from "react";
import Carousel from "../../components/Carousel_compo/Carousel";
import Socialapps from "../../components/Hero_Section/Socialapps";
import Hero from "../../components/Hero_Section/Hero";

import carousel1 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel1.jpg";
import carousel2 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel2.jpg";
import carousel3 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel3.jpg";
import carousel4 from "../../assets/Pks_Photos/PKs_Clean_Photos/Carousel/carousel4.jpg";

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
