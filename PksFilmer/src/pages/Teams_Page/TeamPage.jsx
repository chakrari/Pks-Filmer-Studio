import React from "react";
import TeamPagePhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/TeamPage.webp";
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
