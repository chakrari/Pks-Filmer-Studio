import React from "react";
import TeamPagePhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/TeamPage.webp";
import PritamPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Pritam.jpeg";
import { Link } from "react-router-dom";
import QuickLinks from "../../components/Hero_Section/QuickLinks";


const TeamPage = () => {
  return (
    <div className="">
      <div className="relative flex flex-col min-h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${TeamPagePhoto})` }}
        ></div>
      </div>

      {/* Sakshi code  */}

    
      <div className="flex justify-center items-center min-h-screen text-white px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl items-center">
        <div className="flex justify-center">
          <div className="relative w-52 h-52 flex items-center justify-center rotate-45 border border-white bg-gray-800">
            <div
              className="absolute w-64 h-44 bg-cover bg-center"
              style={{ backgroundImage: `url(${PritamPhoto})` }}
            ></div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold font-impact">Pritam Kumar Shaw</h1>
          <p className="text-lg mt-3 mb-3 font-light">FOUNDER & CINEMATOGRAPHER</p>
          <p className="text-lg leading-relaxed">
            The visionary behind the lens, turning dreams into cinematic reality, capturing every love story with flair, and ensuring each moment is a masterpiece waiting to be unveiled.
          </p>
        </div>
      </div>
    </div>

      <div className="bg-[#4ca9b4] md:h-[80vh] h-[50vh] md:mt-24 mt-14 font-abril flex flex-col items-center justify-center md:items-center md:justify-center text-center">
        <h2 className="text-3xl md:text-5xl">
          {" "}
          Bringing your vision to life through every shot.
        </h2>
        <p className="font-roboto mt-8 text-xl mx-11 text-gray-300 tracking-widest">
          THROUGH CREATIVE IDEAS, INNOVATION & SHEER DETERMINATION
        </p>
        <Link to="/contact">
          <button className="mt-8 font-display text-lg font-semibold bg-transparent text-white py-2 px-6 border-2 border-white hover:bg-yellow-500 ">
            CONTACT US
          </button>
        </Link>
      </div>
      <div>
        <QuickLinks />
      </div>
    </div>
  );
};

export default TeamPage;
