import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../../layouts/HomeCard";
import home1 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home1.jpg";
import home2 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home2.jpg";
import home3 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home3.jpg";
import home4 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home4.jpg";
import home5 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home5.jpg";
import home6 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home6.jpg";
import home7 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home7.jpg";
import home8 from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/home8.jpg";
import homeAboutImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/homeAboutPhoto.jpg";
import homeServiceImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/homeServicePhoto.jpg";
import Amazing from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/amazing.png";
import Care from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/care.png";
import Travel from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/travelling.png";
import Time from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/time.png";
import Memory from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/memory.png";
import CameraShy from "../../assets/Pks_Photos/PKs_Clean_Photos/Home/camerashy.png";
import Team from "./Team";
import TestimonialSlider from "../Testimonial/TestimonialSlider";
import QuickLinks from "../Hero_Section/QuickLinks";

const Hero = () => {
  return (
    <div>
      <div className="text-left m-24">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
          Welcome to Pks Filmer
        </h2>
        <p className="text-lg leading-relaxed max-w-18xl mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>We create those
          special moments that light up your life. Our artistry creates timeless
          memories for you to cherish always. Our team has worked together since
          2017 but our individual journeys go back much further. Through our
          lenses we aim to share the pure joy of your special day.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-10 leading-loose">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-abril">Meet With Us</h2>
          <h3 className="text-xl first:font-roboto text-center mt-4">
            THE JOURNEY
          </h3>
          <p className="mt-4 text-lg mx-16 text-center">
            Since 2017, we’ve captured the joy-filled moments that make life
            unforgettable. With a passion for timeless memories, we turn
            fleeting instants into visual treasures, preserving your most
            cherished occasions. Discover the essence behind every smile.
          </p>
          <Link to="/about">
            <button className=" mt-6 border-2 text-lg font-semibold border-white px-6 bg-transparent hover:bg-yellow-500 py-2 ">
              KNOW MORE
            </button>
          </Link>
        </div>
        <div>
          <img
            src={homeAboutImage}
            alt="kids image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-32">
        <HomeCard img={home1} />
        <HomeCard img={home2} />
        <HomeCard img={home3} />
        <HomeCard img={home4} />
        <HomeCard img={home5} />
        <HomeCard img={home6} />
        <HomeCard img={home7} />
        <HomeCard img={home8} />
      </div>
      <div className="text-left m-24 ">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
          Why Choose Us?
        </h2>
        <p className="text-lg leading-relaxed max-w-18xl mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>We create those
          special moments that light up your life. Our artistryOur expert team
          transforms your precious moments into timeless memories. With top-tier
          skills and cutting-edge equipment, we don’t just take photos, we craft
          visual stories that last a lifetime. From digital masterpieces to
          stunning prints, we capture the essence of your special day. Our
          photographers blend artistry with technology to bring out the best in
          every shot. We’re not just preserving memories; we’re making dreams
          tangible. Let our lenses work their magic at your next big event. Why
          settle for the ordinary when you can have extraordinary? Your moments,
          our passion, let’s create something truly unforgettable.
        </p>
        <div className="mt-4">
          <Link to="https://wa.me/+917980108976">
            <button className="text-lg font-semibold bg-transparent text-white py-2 px-6 rounded-full border-2 border-white hover:bg-yellow-500">
              Book Us
            </button>
          </Link>
        </div>
      </div>
      <div className="m-24 text-center">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
          Skilled & Creative
        </h2>
        <p className="text-lg leading-relaxed  mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>Choose our team for
          a blend of expertise, creativity, and dedication. We capture life’s
          most cherished moments with unmatched attention to detail, using the
          latest equipment to deliver stunning, timeless visuals that reflect
          the essence of your story.
        </p>
        <div className="mt-4">
          <Team />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center mb-2">
        <div>
          <img src={homeServiceImage} className="h-[80vh]" />
        </div>
        <div className="text-center h-[80vh] bg-[#4ca9b4] py-20">
          <h2 className="font-abril text-5xl">Quality Services</h2>
          <h3 className="font-roboto text-xl mt-4">
            Our services & Core Values
          </h3>
          <p className="mt-6 px-6 ">
            Experience the art of photography with our tailored services,
            capturing life’s most precious moments and milestones. From magical
            weddings and joyous kids’ sessions to professional portfolios, event
            highlights, and product storytelling—our team is passionate about
            turning moments into lasting memories. Discover exceptional
            photography that brings your vision to life.
          </p>
          <Link to="/services">
            <button className="mt-6 border-2 font-medium hover:bg-yellow-500 border-white bg-transparent shadow-lg object-cover px-6 py-2">
              OUR SERVICES
            </button>
          </Link>
        </div>
      </div>
      <div className="py-16 px-16 mt-32">
        <div className="text-left mb-12 ">
          <h2 className="text-5xl font-bold mb-4">Other Areas of Expertise</h2>
          <p className="text-lg leading-relaxed max-w-18xl mx-auto">
            <span className="text-yellow-400 text-8xl">“</span>
            Apart from the event, portfolio and many other photography styles,
            you can be assured of the following touches in our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 ">
          {/* Amazing Photography */}
          <div className="text-center">
            <img src={Amazing} alt="Amazing" className="w-24 h-24 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 mt-4">
              Amazing Photography
            </h3>
            <p className="text-base">
              Yes, this is the very first thing you might find with us. And
              we’re sure that this is a priority while you choose your
              photographer. And each shot through the lens of Aartistry is
              everything amazing.
            </p>
          </div>

          {/* We Care About You */}
          <div className="text-center">
            <img src={Care} alt="Caring" className="w-24 h-24 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 mt-4">
              We Care About You
            </h3>
            <p className="text-base">
              We are much over the cliched give and take type of relationship in
              a business. We believe that the connection with our client is much
              beyond signing bookings. We believe in establishing a relationship
              of trust.
            </p>
          </div>

          {/* We Enjoy Travelling */}
          <div className="text-center">
            <img src={Travel} alt="Travelling" className="w-24 h-24 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 mt-4">
              We Enjoy Travelling
            </h3>
            <p className="text-base">
              Along with the click sound of the shutter, we love the sound of
              travelling. Besides, we are always up for reaching you or
              accompanying you to locations, for the perfect photography and
              filming sessions.
            </p>
          </div>

          {/* We Respect Your Time */}
          <div className="text-center">
            <img src={Time} alt="Time" className="w-24 h-24 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 mt-4">
              We Respect Your Time
            </h3>
            <p className="text-base">
              We believe that time is indeed money. And we understand how
              important time is to you. It is the same with us as well. So we
              abide by strict deadlines, and time schedules to make the most of
              it.
            </p>
          </div>

          {/* We Create Memory */}
          <div className="text-center">
            <img src={Memory} alt="Memory" className="w-24 h-24 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 mt-4">
              We Create Memory
            </h3>
            <p className="text-base">
              Be it the first smash cake of your little bundle of joy, or a DDLJ
              style pre-wedding shoot, or the emotional bidaayi moment in your
              wedding. We understand the emotions of each moment and preserve
              them forever.
            </p>
          </div>

          {/* Camera Shy Person? */}
          <div className="text-center">
            <img
              src={CameraShy}
              alt="Camera Shy"
              className="w-24 h-24 mx-auto"
            />
            <h3 className="text-2xl font-semibold mb-4 mt-4">
              Camera Shy Person?
            </h3>
            <p className="text-base">
              We totally understand that not everyone is very comfortable in
              front of the camera. We know how camera consciousness is like. So
              we can assure you that our friendly crew is just gonna shoo the
              shyness away!
            </p>
          </div>
        </div>
      </div>
      <div className="m-24 text-center">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
          We Create Lasting Memories Together
        </h2>
        <p className="text-lg leading-relaxed  mx-auto">
          <span className="text-yellow-400 text-8xl">"</span>We go beyond
          capturing images, focusing on building connections, respecting your
          time, and embracing every emotion. Whether it’s traveling to your
          dream location or helping you feel comfortable, our dedicated team
          ensures timeless, heartfelt memories for you.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <section className="mt-36">
          <h2 class="text-3xl font-bold text-center ml-10 text-white drop-shadow-lg">
            Lens & Light: Capturing Life in <br />
            <span class="block">Focus</span>
          </h2>
          <div className="flex items-center justify-center mt-4 ">
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
        </section>
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
      <div className="bg-[#4ca9b4] h-[80vh] mt-24 font-abril flex flex-col items-center justify-center">
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
      <div>
        <QuickLinks />
      </div>
    </div>
  );
};

export default Hero;
