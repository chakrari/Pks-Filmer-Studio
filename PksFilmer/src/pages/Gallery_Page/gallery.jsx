import React from "react";
import { Link } from "react-router-dom";
import galleyMainPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryPhoto.jpg";
import MasonaryGrid from "../../components/Gallery_Compo/MasonaryGrid";
import QuickLinks from "../../components/Hero_Section/QuickLinks";

const gallery = () => {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image Container */}
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            backgroundImage: `url(${galleyMainPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "h-100vh", // Adjust as needed
            zIndex: -1,
            filter: "blur(1px)",
          }}
        ></div>
        {/* Text Container */}
        <div className="relative z-20 px-8 py-18 lg:px-20 text-white md:mt-[30vh] mt-[12vh]">
          <div className="text-left mx-auto">
            <h2
              className="text-4xl font-bold mt-16 "
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
            >
              PORTFOLIO
            </h2>
            <p
              className="text-lg mt-6 md:w-[40vw] text-justify"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              At PKS Filmer, we believe photography is about telling stories and
              preserving emotions that last a lifetime. From joyful celebrations
              to heartfelt moments, we capture each detail with creativity and
              authenticity, turning your memories into timeless legacies.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24 mx-4 md:mx-14 text-center md:text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-5xl">
          Our Latest Captures
        </h2>
        <p className="text-lg leading-relaxed mt-10 ">
          We’re here to capture every cherished memory. From weddings to
          pre-weddings, we preserve your story, from your vows to candid moments
          of joy. Kid photography captures pure innocence, while event
          photography ensures every occasion shines. For product portfolios, we
          highlight the best details, making your brand stand out. Each frame is
          crafted with passion and professionalism, so your moments stay
          timeless, reflecting the beauty and joy of every occasion.
        </p>
      </div>
      <div className="mt-12">
        <MasonaryGrid />
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

export default gallery;
