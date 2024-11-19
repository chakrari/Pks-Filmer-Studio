import React from "react";
import cinematicPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Cinematic_Video/cinematic.jpg";
import Container from "react-bootstrap/Container";
import TestimonialSlider from "../../components/Testimonial/TestimonialSlider";

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
      <div className="grid grid-cols-2">
        <Container className="mt-40">
          <h2
            className="text-2xl font-bold flex items-center justify-center "
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
          >
            Lens & Light: Capturing Life in Focus
          </h2>
          <div className="flex items-center justify-center mt-7 ">
            <div className="relative h-80 ml-14 w-full ">
              <iframe
                className="absolute w-full h-[95%] border-none"
                src="https://www.youtube.com/embed/mIcQUsWoxc8"
                title="Youtube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
        <div>
          <h2
            className="text-4xl font-bold mt-14 flex items-center justify-center "
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
          >
            Testimonials
          </h2>
          <h3
            className="text-lg font-bold mt-2 flex items-center justify-center "
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
          >
            CLIENTS LOVE US
          </h3>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default CinematicVideo;
