import React from "react";
import servicePhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/serviceImage.jpg";

const Services = () => {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image Container */}
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            backgroundImage: `url(${servicePhoto})`,
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
              Services | Pks Filmer
            </h2>
            <p
              className="text-lg"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              <span className="text-yellow-400 text-8xl">“</span>
              From the magical moments of your pre-wedding and wedding
              celebrations to cherished milestones like baby showers and rice
              ceremonies, we specialize in capturing every beautiful occasion.
              Whether you're looking to showcase your unique style in a stunning
              portfolio or preserve unforgettable memories, we're here to bring
              your vision to life. Get in touch with us today to learn how we
              can make your moments truly unforgettable!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
