import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {

  const getCurrentYear = () => new Date().getFullYear();
 
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white p-6 sm:p-8 lg:p-10 mt-28">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-10">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-600">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/home" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/+917980108976"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                Book Us
              </a>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-600">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Wedding Photography
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Pre-Wedding Shoot
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Kids Photography
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Event Photography
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Product Photography
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Portfolio Shoot
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-gray-600">
            Follow Us
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.facebook.com/pksfilmer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@pksfilmer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pks_filmer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pritam-kumar-shaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center text-gray-500 font-bold text-lg mt-16">
        © {getCurrentYear()} PKS Filmer. All rights reserved.
      </div>
      <div className="mt-10 flex items-center">
        <div className="bg-gray-400 h-1 w-full"></div>
        <span aria-hidden="true" className="mx-2 text-yellow-500 text-2xl">
          💛
        </span>
        <div className="bg-gray-400 h-1 w-full"></div>
      </div>
      <div className="mt-8 flex items-center justify-center text-center">
        <h3 className="font-bold">
          Design & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/aritra-charkaborty-513254253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            Aritra Chakraborty
          </a>
        </h3>
      </div>
    </div>
  );
};

export default QuickLinks;
