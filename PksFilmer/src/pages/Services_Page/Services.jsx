import React from "react";
import { Link } from "react-router-dom";
import servicePhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/serviceImage.jpg";
import weddingService from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/weddingServiceImage.jpg";
import preweddingService from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/preweddingServiceImage.jpg";
import kidsService from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/kidsServiceImage.jpg";
import eventService from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/eventServiceImage.jpg";
import productService from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/productServiceImage.jpg";
import portfolioService from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/portfolioServiceImage.jpg";
import consultation from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/consultation.svg";
import scout from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/scout.svg";
import create from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/create.svg";
import capture from "../../assets/Pks_Photos/PKs_Clean_Photos/Services_Photos/capture.svg";
import Quicklinks from "../../components/Hero_Section/QuickLinks";
import Testimonials from "../../components/Testimonial/TestimonialSlider";

const processes = [
  {
    icon: consultation, // Replace with the path or import of your icon
    title: "Consultation",
    description:
      "We begin by discussing your vision, themes, and preferences, allowing us to understand your unique story and what you want captured.",
  },
  {
    icon: scout,
    title: "Scout",
    description:
      "We visit potential shooting locations to assess lighting, backgrounds, and composition, ensuring every scene is perfect for your vision.",
  },
  {
    icon: create,
    title: "Create",
    description:
      "Our team designs each shot with care, arranging lighting, props, and angles to highlight the beauty of your special moments.",
  },
  {
    icon: capture,
    title: "Capture",
    description:
      "On the day of the shoot, we bring your vision to life, capturing authentic emotions and stunning images that tell your story.",
  },
];

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
        <div className="relative z-20 px-8 py-18 lg:px-20 text-white md:mt-[30vh] mt-[12vh]">
          <div className="text-left mx-auto">
            <h2
              className="text-4xl font-bold mt-8"
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
            >
              Services | Pks Filmer
            </h2>
            <p
              className="text-lg mt-6 md:w-[40vw] text-justify"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              From the magical moments of your pre-wedding and wedding
              celebrations to cherished milestones like baby showers and rice
              ceremonies, we specialize in capturing every beautiful occasion.
              Whether you are looking to showcase your unique style in a stunning
              portfolio or preserve unforgettable memories, we are here to bring
              your vision to life. Get in touch with us today to learn how we
              can make your moments truly unforgettable!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-8 gap-y-16 items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col text-center">
          <img src={weddingService} className="object-cover" />
          <h2 className="mt-4 text-2xl lg:text-3xl font-abril">
            Wedding <span className="block">Photography</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Capture your love story from “I do” to forever. We offer cinematic
            wedding photography that reflects every emotion, from heartfelt vows
            to joyful celebrations. Let us document every unique chapter, even
            with a creative post-wedding shoot.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img src={preweddingService} className="object-cover mt-4" />
          <h2 className="mt-8 text-2xl lg:text-3xl font-abril">
            Pre Wedding Shoot
          </h2>
          <p className="mt-10 text-sm sm:text-base lg:text-lg">
            Create timeless memories in a romantic, scenic setting before the
            big day. Our pre-wedding shoots capture candid, cinematic moments,
            adding a touch of magic to your journey with stunning backdrops and
            natural chemistry.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img src={kidsService} className="object-cover mt-4 lg:h-[35vh] " />
          <h2 className="mt-10 text-2xl lg:text-3xl font-abril">
            Kids Photography
          </h2>
          <p className="mt-8 text-sm sm:text-base lg:text-lg">
            Preserve those fleeting baby smiles and pure innocence with our
            newborn and baby photography. We capture each tiny milestone with
            gentle care, creating treasured memories of your little one’s early
            days.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img src={eventService} className="object-cover" />
          <h2 className="mt-4 text-2xl lg:text-3xl font-abril">
            Event Photography
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Our event photography covers every detail, from grand moments to
            small nuances. With advanced equipment, including drones and DSLRs,
            we ensure your event is captured with clarity, precision, and
            passion.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img src={productService} className="object-cover mt-8" />
          <h2 className="mt-4 text-2xl lg:text-3xl font-abril">
            Product Photography
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Showcase your products with style. From lighting to creative
            backdrops, we bring out the best in each item, crafting eye-catching
            visuals ideal for catalogs, brochures, websites, or social media.
            Let us turn your products into stunning visual stories.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img src={portfolioService} className="object-cover" />
          <h2 className="mt-4 text-2xl lg:text-3xl font-abril">
            Portfolio Shoot
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Highlight your best features with professional, creative portfolio
            shoots. We combine expert lighting, technique, and editing to
            deliver exceptional results, perfect for models looking to stand out
            through captivating images.
          </p>
        </div>
      </div>
      <div className="bg-[#4ca9b4] h-[36vh] mt-24 font-abril flex flex-wrap gap-8 items-center justify-center px-4  lg:gap-[24vh] md:h-[40vh]">
        <h2 className="text-3xl md:text-5xl text-center md:text-left">
          We’re available for any project
        </h2>
        <Link to="https://wa.me/7980108976">
          <button className="font-display text-sm md:text-lg font-semibold bg-transparent text-white py-3 px-8 md:py-4 md:px-10 border-4 border-white hover:bg-yellow-500">
            GET IN TOUCH
          </button>
        </Link>
      </div>

      <div className="py-16 px-8 lg:px-32 mt-16">
        <div className="text-center md:mb-12">
          <h2 className="text-5xl font-bold mb-4">How it Works</h2>
          <p className="text-lg leading-relaxed max-w-18xl mx-auto">
            Our photography process is crafted to capture every moment with
            artistry and precision. We focus on understanding your unique
            vision, ensuring each step leads to stunning results and a memorable
            experience.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-8 px-14 py-10 text-white">
        {processes.map((process, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[300px] text-center"
          >
            <div className="w-16 h-16 bg-[#47C7D1] rounded-full flex items-center justify-center">
              <img
                src={process.icon}
                alt={process.title}
                loading="lazy"
                className="w-8 h-8 invert text-white"
              />
            </div>
            <h2 className="font-bold font-abril text-3xl mt-4">
              {process.title}
            </h2>
            <p className="text-lg mt-3">{process.description}</p>
          </div>
        ))}
      </div>
      <div className="md:mt-60 mt-28">
        <h2 className="font-bold font-abril text-4xl text-center">
          Testimonials
        </h2>
        <p className="font-roboto text-center mt-4 text-lg">CLIENTS LOVE US</p>
        <div className="-mt-10 lg:mb-44 md:mb-32 mb-40 ">
          <Testimonials />
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
        <Quicklinks />
      </div>
    </div>
  );
};

export default Services;
