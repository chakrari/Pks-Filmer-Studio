import React from "react";
import PritamPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Pritam.jpeg";

const TeamDetails = () => {
  return (
    <div>
      {/* Pritam */}
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
            <h1 className="text-4xl font-bold font-impact text-center">
              Pritam Kumar Shaw
            </h1>
            <p className="text-lg mt-3 mb-3 font-light text-center">
              FOUNDER & CINEMATOGRAPHER
            </p>
            <p className="text-lg leading-relaxed text-justify">
              The visionary behind the lens, turning dreams into cinematic
              reality, capturing every love story with flair, and ensuring each
              moment is a masterpiece waiting to be unveiled.
            </p>
          </div>
        </div>
      </div>

      {/* Rahul */}
    </div>
  );
};

export default TeamDetails;
