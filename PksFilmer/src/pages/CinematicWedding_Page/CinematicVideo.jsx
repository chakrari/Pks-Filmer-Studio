import React from "react";
import cinematicPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Cinematic_Video/cinematic.jpg";
import { Link } from "react-router-dom";
import QuickLinks from "../../components/Hero_Section/QuickLinks"

// Array of video sections
const videoSections = [
  {
    videoUrl: "https://www.youtube.com/embed/mIcQUsWoxc8",
    title: "Cinematic Video 1",
  },
  {
    videoUrl: "https://www.youtube.com/embed/pQbhEOSKVYI",
    title: "Cinematic Video 2",
  },
  {
    videoUrl: "https://www.youtube.com/embed/jqu7K9mhq4o",
    title: "Cinematic Video3",
  },
  {
    videoUrl: "https://www.youtube.com/embed/sMZYMg7liN8",
    title: "Cinematic Video 4",
  },
  {
    videoUrl: "https://www.youtube.com/embed/_GhdILsNoe0",
    title: "Cinematic Video 5",
  },
  {
    videoUrl: "https://www.youtube.com/embed/o7Qe55a3oM0",
    title: "Cinematic Video 6",
  },
];

const CinematicVideo = () => {
  return (
    <div>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image Container */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${cinematicPhoto})` }}
        ></div>

        {/* Text Container */}
        <div
          className="relative z-20 px-8 py-18 lg:px-20 text-white"
          style={{ marginTop: "19vh" }} // Adjust positioning if needed
        >
          <div className="text-left ml-5">
            <h2
              className="text-4xl font-bold mt-16"
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
            >
              Cinematic Video Gallery | PKS
            </h2>
            <p
              className="text-lg mt-6"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              <span className="text-yellow-400 text-8xl">“</span>
              Don’t we all hope for fairy tales becoming true somewhere? Doesn’t
              the filmy magic seem intriguing to most of us? We can exactly
              create the same magic with our lens-o-wands. And the memories of
              the magic are going to be there forever!
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 px-8">
        <h3 className="text-2xl font-semibold">
          CINEMATIC WEDDING VIDEOS BY PKS FILMER
        </h3>
        <h2 className="text-5xl font-medium mt-1">
          Geared up to deliver the best cinematic Wedding videos in Kolkata,
          which will make you fall in love every time you watch them
        </h2>
        <p className="px-10 mt-10">
          It can take a day or even a lifetime to find a soulmate. People start
          looking for that one special person, ever since the day they realize
          the other half of their soul is missing. The day two people get
          married is the day when these two people share their most precious
          moments with their friends and family, a moment valuable not only to
          them but to their generations to come. A day so special that sometimes
          photographs alone are not enough to express its significance. No
          photograph can capture the feelings on a face trembling with emotions.
          No image can recreate the feelings in your choking voice when you take
          your vows. We know how to grab those special moments and put them
          together to bring your story alive on a screen. We are geared up to
          deliver the best Wedding Films & cinematic wedding video teasers in
          Kolkata and other places in India. Our team of expert
          cinematographers, with state of the art video technology, specializes
          in capturing the love story behind your wedding. We don’t just make
          wedding videos, we tell stories full of love and weave feelings into
          it with only one intention, to make you fall in love with each other
          every time you watch our wedding films. Your special moments deserve
          more, because we know that “photographs just aren’t enough”.
        </p>
      </div>

      {/* Loop through each video section */}
      {videoSections.map((section, index) => (
        <section key={index} className="mt-36">
          {/* Video iframe container */}
          <div className="flex items-center justify-center m-14">
            <div className="relative w-full h-[80vh] pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-none"
                src={section.videoUrl}
                title={section.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}
      <div className="bg-[#4ca9b4] h-[80vh] font-abril flex flex-col items-center justify-center">
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

export default CinematicVideo;
