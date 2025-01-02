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
    <div className="">
      <div className="mt-24 mx-4 md:mx-14 text-center md:text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-5xl">
          Welcome to Pks Filmer
        </h2>
        <p className="text-lg leading-relaxed mt-10 ">
          We create those special moments that light up your life. Our artistry
          creates timeless memories for you to cherish always. Our team has
          worked together since 2017 but our individual journeys go back much
          further. Through our lenses we aim to share the pure joy of your
          special day.
        </p>
      </div>
      <div className="grid grid-cols-2 md:mt-16 mt-14 lg:mt-10 leading-loose">
        <div className="flex flex-col items-center justify-center md:mt-16 lg:mt-0">
          <h2 className="text-3xl font-abril md:text-5xl">Meet With Us</h2>
          <h3 className="md:text-xl text-md first:font-roboto text-center mt-4">
            THE JOURNEY
          </h3>
          <p className="text-lg leading-relaxed text-center mx-1 mt-3 md:mx-16 md:mt-4">
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

        <div className="mt-16">
          <img
            src={homeAboutImage}
            alt="kids image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] mt-24 lg:mt-36 text-white leading-loose mx-4 md:mx-16 lg:mx-20 gap-5">
               <div className="font-abril text-2xl sm:text-3xl md:text-4xl border-slate-200 border-[8px] md:border-[12px] py-8 px-5 sm:py-10 sm:px-8 lg:py-20 lg:px-11 text-center md:text-left">
          Capturing Love’s Finest Moments, Book Your Dream Shoot Today!
        </div>
       <div className="bg-[#4ca9b4] text-center flex items-center justify-center py-10 md:py-10 lg:py-0">
          <Link to="https://wa.me/+917980108976">
            <button className="mt-6 border-4 md:px-3 md:border-4 font-medium hover:bg-yellow-500 border-white bg-transparent shadow-lg px-4 sm:px-6 py-2">
              PLAN MY SHOOT
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-2 justify-center mt-32 mx-auto">
        <HomeCard img={home1} />
        <HomeCard img={home2} />
        <HomeCard img={home3} />
        <HomeCard img={home4} />
        <HomeCard img={home5} />
        <HomeCard img={home6} />
        <HomeCard img={home7} />
        <HomeCard img={home8} />
      </div>
      <div className="mt-24 mx-4 md:mx-14 text-center md:text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-5xl">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed mt-10">
          We create those special moments that light up your life. Our
          artistryOur expert team transforms your precious moments into timeless
          memories. With top-tier skills and cutting-edge equipment, we don’t
          just take photos, we craft visual stories that last a lifetime. From
          digital masterpieces to stunning prints, we capture the essence of
          your special day. Our photographers blend artistry with technology to
          bring out the best in every shot. We’re not just preserving memories;
          we’re making dreams tangible. Let our lenses work their magic at your
          next big event. Why settle for the ordinary when you can have
          extraordinary? Your moments, our passion, let’s create something truly
          unforgettable.
        </p>
      </div>
      <div className="mt-24 mx-4 md:mx-14 text-center md:text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-5xl">
          Skilled & Creative
        </h2>
        <p className="text-lg leading-relaxed mt-10">
          Choose our team for a blend of expertise, creativity, and dedication.
          We capture life’s most cherished moments with unmatched attention to
          detail, using the latest equipment to deliver stunning, timeless
          visuals that reflect the essence of your stor
        </p>
        <div className="mt-4">
          <Team />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center mb-2 w-full mt-16">
        <div>
          <img src={homeServiceImage} className="md:h-[80vh] h-[30vh] w-full" />
        </div>
        <div className="text-center md:h-[80vh] bg-[#4ca9b4] py-20">
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
          </Link>{" "}
        </div>
      </div>
      <div className="py-16 px-16 md:mt-32">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-bold mb-4 md:text-5xl">
            Other Areas of Expertise
          </h2>
          <p className="text-lg leading-relaxed mt-10">
            Apart from the event, portfolio and many other photography styles,
            you can be assured of the following touches in our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 mt-10">
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
              We Care About You{" "}
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
              We Respect Your Time{" "}
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
      <div className="mt-24 mx-4 md:mx-14 text-center md:text-center">
        <h2 className="text-3xl font-bold mb-4 md:text-5xl">
          We Create Lasting Memories Together
        </h2>
        <p className="text-lg leading-relaxed mt-10">
          We go beyond capturing images, focusing on building connections,
          respecting your time, and embracing every emotion. Whether it’s
          traveling to your dream location or helping you feel comfortable, our
          dedicated team ensures timeless, heartfelt memories for yo
        </p>
      </div>
      <div className="grid grid-cols-2">
        <section className="mt-36">
          <h2 class="md:text-3xl text-2xl font-bold text-center md:ml-10 text-white drop-shadow-lg">
            Lens & Light: Capturing Life in <br />
            <span className="block">Focus</span>
          </h2>
          <div className="flex items-center justify-center md:mt-4 mt-8">
            <div className="md:relative h-50 md:h-[60vh] lg:h-[60vh] md:ml-14 mx-8 w-full">
              <iframe
                className=" md:absolute w-full h-[95%] border-none"
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

export default Hero;
