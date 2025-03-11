import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Pks_Photos/PKs_Clean_Photos/Logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const [isMobile, setIsMobile] = useState(false); // Track whether it's mobile view
  const location = useLocation();

  const handleMenu = () => {
    setIsNavDialogOpen(!isNavDialogOpen);
    if (!isNavDialogOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };

  // Automatically close nav dialog when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavDialogOpen(false);
        setIsMobile(false);
        document.body.style.overflow = ""; // Enable scrolling
      } else if (window.innerWidth >= 768) {
        setIsMobile(true); // Tablet view
        setIsNavDialogOpen(false); // Ensure menu is closed
        document.body.style.overflow = ""; // Enable scrolling
      } else {
        setIsMobile(true); // Mobile view
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close nav dialog on route change
  useEffect(() => {
    if (isNavDialogOpen) {
      setIsNavDialogOpen(false);
      document.body.style.overflow = ""; // Enable scrolling
    }
  }, [location]);

  // Track scroll position to hide/show navbar (only on desktop)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // At the top of the page, show the navbar
        setIsNavbarVisible(true);
      } else {
        // Scrolling down, hide the navbar
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // }
  }, []);

  // Clean up scrolling restriction on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ""; // Reset scrolling
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent shadow-md transition-transform duration-300  ${
        isNavbarVisible ? "transform-none" : "-translate-y-full"
      } md:px-10 md:py-6 lg:px-12 `}
    >
      {/* Logo Section */}
      <Link to="/" id="brand" className="flex items-center ">
        <img
          className="object-cover w-12 h-12 md:w-14 md:h-14"
          src={logo}
          alt="Logo"
        />
      </Link>

      {/* Navigation Links */}
      <div
        id="nav-menu"
        className="hidden md:flex flex-1 justify-evenly items-center "
      >
        <Link to="/" className="font-bold hover:text-primary cursor-pointer">
          Home
        </Link>
        <Link
          to="/aboutus"
          className="font-bold hover:text-primary cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/gallery"
          className="font-bold hover:text-primary cursor-pointer"
        >
          Gallery
        </Link>
        <Link
          to="/services"
          className="font-bold hover:text-primary cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="/cinematic-video"
          className="font-bold hover:text-primary cursor-pointer"
        >
          Cinematic Video
        </Link>
        <Link
          to="/team"
          className="font-bold hover:text-primary cursor-pointer"
        >
          Team
        </Link>
        <Link
          to="/contactus"
          className="font-bold hover:text-primary cursor-pointer"
        >
          Contact
        </Link>
      </div>
      {/* <button className="hidden md:flex gap-2 items-center border border-black px-6 py-2 rounded-lg hover:border-primary hover:bg-yellow-400">
        Book Us
        <FaArrowRight />
      </button> */}
      <button
        className="p-2 md:hidden fixed top-4 right-4 z-50 text-white"
        onClick={handleMenu}
      >
        {isNavDialogOpen ? (
          <IoMdClose size={24} />
        ) : (
          <GiHamburgerMenu size={24} />
        )}
      </button>

      {isNavDialogOpen && (
        <div
          id="nav-dialog"
          className="fixed inset-0 z-50 flex flex-col p-3 bg-black/70 backdrop-blur-md text-white"
        >
          <div className="flex justify-between items-center">
            <Link to="/" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-12 max-h-12"
                src={logo}
                alt="Logo"
              />
            </Link>
            <button className="p-2 md:hidden text-white" onClick={handleMenu}>
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <Link
              to="/"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Gallery
            </Link>
            <Link
              to="/services"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Services & Packages
            </Link>
            <Link
              to="/cinematic-video"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Cinematic Video
            </Link>
            <Link
              to="/team"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Team
            </Link>
            <Link
              to="/contactus"
              className="font-medium p-3 hover:bg-gray-700 block rounded-lg"
            >
              Contact
            </Link>
          </div>
          {/* <button className="mt-6 w-full flex gap-2 text-white items-center px-6 py-4 rounded-lg hover:bg-primary">
            Book Us
            <FaArrowRight />
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
