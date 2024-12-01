import React from "react";
import {Link } from "react-router-dom";
import galleyMainPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryPhoto.jpg";
import MasonaryGrid from "../../components/Gallery_Compo/MasonaryGrid";
import QuickLinks from "../../components/Hero_Section/QuickLinks"

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
        <div
          className="relative z-20 p-18 lg:px-20 text-white"
          style={{ marginTop: "19vh" }} // Adjust positioning if needed
        >
          <div className="text-down_left ml-5">
            <h2
              className="text-4xl font-bold mt-16 "
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
            >
              PORTFOLIO
            </h2>
            <p
              className="text-lg"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              <span className="text-yellow-400 text-8xl">“</span>
              At PKS Filmer, we believe photography is about telling stories and
              preserving emotions that last a lifetime. From joyful celebrations
              to heartfelt moments, we capture each detail with creativity and
              authenticity, turning your memories into timeless legacies.
            </p>
          </div>
        </div>
      </div>
      <div className="text-left m-24">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
          Our Latest Captures
        </h2>
        <p className="text-lg leading-relaxed">
          <span className="text-yellow-400 text-8xl">"</span>We’re here to
          capture every cherished memory. From weddings to pre-weddings, we
          preserve your story, from your vows to candid moments of joy. Kid
          photography captures pure innocence, while event photography ensures
          every occasion shines. For product portfolios, we highlight the best
          details, making your brand stand out. Each frame is crafted with
          passion and professionalism, so your moments stay timeless, reflecting
          the beauty and joy of every occasion.
        </p>
      </div>
      <div className="-mt-12">
        <MasonaryGrid />
      </div>
      <div className="bg-[#4ca9b4] h-[60vh]  font-abril mb-5 flex flex-col items-center justify-center">
        <h2 className="text-5xl">
          Bringing your vision to life through every shot.
        </h2>
        <p className="font-roboto mt-8 text-2xl">
          Through creative ideas, innovation & sheer determination
        </p>
        <Link to="/contact">
          <button className="mt-8 font-display text-lg font-semibold bg-transparent text-white py-2 px-6 border-2 border-white hover:bg-yellow-500">
            CONTACT US
          </button>
        </Link>
      </div>
      <QuickLinks />
    </div>
  );
};

export default gallery;
