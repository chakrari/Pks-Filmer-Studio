import React from "react";
import aboutPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/About_Us/about.jpg";
import CardFlip from "../../components/About_Compo/CardFlip";
import aboutQuote from "../../assets/Pks_Photos/PKs_Clean_Photos/About_Us/AboutQuote.jpg";
import aboutImage from "../../assets/Pks_Photos/PKs_Clean_Photos/About_Us/AboutPhoto.jpg";
import aboutServiceImage from "../../assets/Pks_Photos/PKs_Clean_Photos/About_Us/AboutServicePhoto.jpg";
import { Link } from "react-router-dom";
import QuickLinks from "../../components/Hero_Section/QuickLinks";

// eslint-disable-next-line react/prop-types
const ServiceSection = ({ title, description }) => (
  <div className="space-y-4">
    <h2 className="text-[#4ca9b4] text-4xl font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

function About() {
  return (
    <div className="">
      <div className="relative flex flex-col min-h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutPhoto})` }}
        ></div>

        <div className="relative z-20 px-8 py-18 lg:px-20 text-white md:mt-[40vh] mt-[12vh]">
          <div className="text-left mx-auto">
            <h2
              className="text-4xl font-bold mt-16"
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
            >
              ABOUT PKSFILMER
            </h2>
            <p
              className="text-lg mt-6"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              Since 2017, we have been functioning as a team. However, each of
              our teammates has come across an experience that goes further than
              that. We photograph the unique moment s in your life that make you
              smile. We provide evergreen memories for our clients to treasure
              for the rest of their life with our amazing photography.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-8 lg:px-32 mt-16">
        <div className="mx-4 md:mx-14 text-center md:text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-5xl">
            We Love To Create Memories
          </h2>
          <p className="text-lg leading-relaxed mt-10 ">
            Photography gives our precious moments a whole new meaning. We may
            share, cherish, and remember the timeless memories recorded by the
            lenses for the rest of our lives.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-center">
          {/* Our Story */}
          <div className="text-center max-w-xs mb-12 lg:mb-0">
            <div className="text-6xl mb-4">😍</div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-base">
              The works of the great Raghu Rai, Henri Cartier-Bresson, André
              Kertész, Ansel Adams, and Willy Ronis have always been fascinating
              to us. And this inspired us to set our journey of The Aartistry,
              in 2017.
            </p>
          </div>

          {/* Our Passion */}
          <div className="text-center max-w-xs mb-12 lg:mb-0">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-semibold mb-4">Our Passion</h3>
            <p className="text-base">
              We are passionate about learning and uncovering various dimensions
              in the world of photography and videography. We passionately
              nurture our capabilities by attending workshops and learning
              sessions.
            </p>
          </div>

          {/* Our Mission */}
          <div className="text-center max-w-xs">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-base">
              We recognize the value of establishing a trustworthy and
              cooperative connection with our clients. Having a close
              relationship with our subject enables us to get the finest shots.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mt-24 h-[400px] md:h-[500px] object-cover">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutQuote})` }}
        ></div>
        <div className="relative z-20 px-8 py-18 md:px-20 lg:px-20 text-white md:mt-[19vh]">
          <h2
            className="md:text-4xl text-2xl font-semibold md:mt-16 mt-36 italic"
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
          >
            Photography is the beauty of life captured{" "}
            <span className="block md:text-lg text-base mt-4 not-italic">
              – Tara Chisholm
            </span>
          </h2>
        </div>
      </div>

      <div className="text-center mt-32">
        <h2 className="text-4xl font-bold mb-2">Why Choose Us ?</h2>
        <p className="text-lg leading-relaxed px-10 mt-10">
          Our expert team transforms your precious moments into timeless
          memories. With top-tier skills and cutting-edge equipment, we don’t
          just take photos – we craft visual stories that last a lifetime. From
          digital masterpieces to stunning prints, we capture the essence of
          your special day. Our photographers blend artistry with technology to
          bring out the best in every shot. We’re not just preserving memories;
          we’re making dreams tangible. Let our lenses work their magic at your
          next big event. Why settle for the ordinary when you can have
          extraordinary? Your moments, our passion, let’s create something truly
          unforgettable.
        </p>
      </div>
      <CardFlip />
      <div className="mt-32">
        <img
          src={aboutImage}
          alt="About Photo"
          className="w-full max-h-[600px] object-cover"
        />
      </div>
      <div className="mt-32">
        <div className="text-center">
          <h2 className="md:text-5xl text-4xl font-bold mb-8 ">
            Where We Shine
          </h2>
        </div>
        <section className="text-left mt-24 px-14">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-24">
            {/* Services section */}
            <div className="space-y-12 md:mt-4 ">
              <ServiceSection
                title="Wedding & Pre-Wedding"
                description="Capture the magic of your love story with our cinematic wedding and post-wedding photoshoots. From stunning romantic moments in picturesque locations to documenting your journey, we ensure every milestone is beautifully preserved. Trust us to create unique, breathtaking memories of your special day together."
              />
              <ServiceSection
                title="Events & Product"
                description="Capture the magic of your love story with our cinematic wedding and post-wedding photoshoots. From stunning romantic moments in picturesque locations to documenting your journey, we ensure every milestone is beautifully preserved. Trust us to create unique, breathtaking memories of your special day together."
              />
              <ServiceSection
                title="Kids & Portfolio"
                description="Capture the magic of your love story with our cinematic wedding and post-wedding photoshoots. From stunning romantic moments in picturesque locations to documenting your journey, we ensure every milestone is beautifully preserved. Trust us to create unique, breathtaking memories of your special day together."
              />
            </div>

            {/* Image section */}
            <div className="mt-8 md:mt-0">
              <img
                src={aboutServiceImage}
                alt="A visual representation of the services we offer"
                className="shadow-lg w-full max-h-[670px] object-cover"
              />
            </div>
          </div>
        </section>
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
}

export default About;
