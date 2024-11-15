import React, { useState } from "react";
import HomeCard from "../../layouts/HomeCard";
import home1 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home1.jpg"
import home2 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home2.jpg"
import home3 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home3.jpg"
import home4 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home4.jpg"
import home5 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home5.jpg"
import home6 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home6.jpg"
import home7 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home7.jpg"
import home8 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home8.jpg"

function handleClick () {}{
  console.log("Button clicked")
}

const Hero = () => {
  return (
    <div>
      <div className="text-left m-24">
        <h2 className="text-4xl font-bold mb-4 ">Welcome to Pks Filmer</h2>
        <p className="text-lg leading-relaxed max-w-18xl mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>We create those
          special moments that light up your life. Our artistry creates timeless
          memories for you to cherish always. Our team has worked together since
          2017 but our individual journeys go back much further. Through our
          lenses we aim to share the pure joy of your special day.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <HomeCard img={home1} />
        <HomeCard img={home2} />
        <HomeCard img={home3} />
        <HomeCard img={home4} />
        <HomeCard img={home5} />
        <HomeCard img={home6} />
        <HomeCard img={home7} />
        <HomeCard img={home8} />
      </div>
      <div className="text-left m-24 ">
        <h2 className="text-4xl font-bold mb-4 ">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed max-w-18xl mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>We create those
          special moments that light up your life. Our artistryOur expert team
          transforms your precious moments into timeless memories. With top-tier
          skills and cutting-edge equipment, we don’t just take photos – we
          craft visual stories that last a lifetime. From digital masterpieces
          to stunning prints, we capture the essence of your special day. Our
          photographers blend artistry with technology to bring out the best in
          every shot. We’re not just preserving memories; we’re making dreams
          tangible. Let our lenses work their magic at your next big event. Why
          settle for the ordinary when you can have extraordinary? Your moments,
          our passion, let’s create something truly unforgettable.
        </p>
        <div className="mt-4">
          <button className="text-lg font-semibold bg-transparent text-white py-2 px-6 rounded-full border-2 border-white hover:bg-yellow-500" onClick={handleClick}>Book Us</button>
        </div>
      </div>
      <div className="text-left m-24 ">
        <h2 className="text-4xl font-bold mb-4 ">Our Services</h2>
        <p className="text-lg leading-relaxed max-w-18xl mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>Beyond the
          traditional genres, we have refined our expertise in the following
          distinctive photography styles...
        </p>
      </div>
    </div>
  );
};

export default Hero;
