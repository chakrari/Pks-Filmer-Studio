import React from "react";
import cinematicPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Cinematic_Video/cinematic.jpg";

const CinematicVideo = () => {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image Container */}
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            backgroundImage: `url(${cinematicPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "h-100vh", // Adjust as needed
            zIndex: -1,
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
              Cinematic Video Gallery | PKS
            </h2>
            <p
              className="text-lg"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              <span className="text-yellow-400 text-8xl">“</span>
              Don’t we all hope for fairy tales becoming true somewhere? Doesn’t
              the filmy magic seem intriguing to most of us? We can exactly
              create the same magic with our lens-o-wands. And the memories of
              the magic is going to be there forever!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinematicVideo;
