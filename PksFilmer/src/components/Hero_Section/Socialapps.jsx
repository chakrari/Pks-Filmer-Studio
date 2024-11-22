import React, { useState, useEffect } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

const Socialapps = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowIcons(true); // Show icons when scrolled below 300px
      }

      // Set scrolling to true when scroll event occurs
      setScrolling(true);

      // Clear the previous timeout to prevent earlier hiding of icons
      clearTimeout(scrollTimeout);

      // Set a new timeout to hide icons after 2 seconds of inactivity
      scrollTimeout = setTimeout(() => {
        setScrolling(false); // Hide icons after 2 seconds of inactivity
      }, 2000); // 2000ms = 2 seconds

      // If scrolled back above 300px, hide the icons
      if (window.scrollY <= 300) {
        setShowIcons(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener and timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // Clear timeout on cleanup
    };
  }, []);

  const icons = [
    {
      icon: <FcGoogle size="20" />,
      link: "https://www.google.com/maps/place/PKS+Filmer/",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-400",
      tooltip: "Google Reviews",
    },
    {
      icon: <AiFillFacebook size="20" />,
      link: "https://www.facebook.com/pksfilmer",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      tooltip: "Facebook",
    },
    {
      icon: <AiFillInstagram size="20" />,
      link: "https://www.instagram.com/pks_filmer/",
      bgColor: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      tooltip: "Instagram",
    },
    {
      icon: <AiFillYoutube size="20" />,
      link: "https://www.youtube.com/@pksfilmer",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      tooltip: "YouTube",
    },
    {
      icon: <AiFillLinkedin size="20" />,
      link: "https://www.linkedin.com/in/pritam-kumar-shaw/",
      bgColor: "bg-blue-800",
      hoverColor: "hover:bg-blue-900",
      tooltip: "LinkedIn",
    },
    {
      icon: <FaPhoneAlt size="20" />,
      link: "https://www.justdial.com/Kolkata/Pks-Filmer-Paschim-Putiary/",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      tooltip: "Just Dial",
    },
    {
      icon: <FaCalendarCheck size="20" />,
      link: "#",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-700",
      tooltip: "Book us",
    },
  ];

  return (
    <>
      {/* Render social icons only when showIcons is true and scrolling */}
      {showIcons && scrolling && (
        <div className="fixed top-52 left-3 z-50">
          <ul className="space-y-4">
            {icons.map((item, index) => (
              <li key={index} className="relative group flex items-center">
                <a
                  className={`flex items-center justify-center w-8 h-8 text-white rounded-full shadow-lg transition duration-300 ${item.bgColor} ${item.hoverColor}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
                {/* Tooltip */}
                <div
                  className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity 
                duration-300 bg-gray-800 text-white text-sm rounded py-1 px-2 whitespace-nowrap"
                >
                  {item.tooltip}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Socialapps;
