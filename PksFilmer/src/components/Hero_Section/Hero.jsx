import React, { useState } from "react";
import AboutCard from "../../layouts/AboutCard";
import abouts_1 from "../../assets/photo_for_website/abouts_1.png";
import abouts_2 from "../../assets/photo_for_website/abouts_2.png";
import abouts_3 from "../../assets/photo_for_website/abouts_3.png";
import abouts_4 from "../../assets/photo_for_website/abouts_4.png";
import abouts_5 from "../../assets/photo_for_website/abouts_5.png";
import abouts_6 from "../../assets/photo_for_website/abouts_6.png";
import abouts_7 from "../../assets/photo_for_website/abouts_7.png";
import abouts_8 from "../../assets/photo_for_website/abouts_8.png";

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
        <AboutCard img={abouts_1} />
        <AboutCard img={abouts_2} />
        <AboutCard img={abouts_3} />
        <AboutCard img={abouts_4} />
        <AboutCard img={abouts_5} />
        <AboutCard img={abouts_6} />
        <AboutCard img={abouts_7} />
        <AboutCard img={abouts_8} />
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
