/* eslint-disable no-undef */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/contact.jpg";
import contactSecondPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/contactSecond.jpg";
import Modal from "../../components/Contact_compo/modal";
import telephoneImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/telephone.png";
import whatsappImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/whatsapp.png";
import googlemapImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/map.png";
import facebookImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/facebook.png";
import instagramImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/instagram.png";
import googleImage from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/google.png";
import QuickLinks from "../../components/Hero_Section/QuickLinks";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    document.body.classList.add("no-scroll");
    setShowModal(true);
  };

  const handleModalClose = () => {
    document.body.classList.remove("no-scroll");
    setShowModal(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Real-time email validation
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email matches the regex pattern
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Prevent form submission if email is invalid
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form

          // Optionally show modal on success
          handleModalOpen();
        },
        (error) => {
          toast.error(
            `Error: ${error.text || "Message sending failed! Try again."}`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image Container */}
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            backgroundImage: `url(${contactPhoto})`,
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
              Contact Pks Filmer
            </h2>
            <p
              className="text-lg mt-6 md:w-[40vw] text-justify"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              From the enchanting moments of your pre-wedding and wedding, to
              the joyful milestones like baby showers and rice ceremonies, or
              even capturing your unique style in a stunning portfolio—we bring
              your vision to life. We do it all! Reach out to explore how we can
              make your memories unforgettable!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-2">Contact info</h2>
        <p className="text-xl textleading-relaxed px-10 mt-10">
          We are Listening
        </p>
      </div>

      <div className="grid grid-cols-3 gap-y-12 gap-x-16  mt-12 w-full">
        {/* Telephone */}
        <div className="flex flex-col items-center text-center">
          <img
            src={telephoneImage}
            alt="Telephone"
            className="h-16"
            aria-label="Discuss with us"
          />
          <p className="mt-2 text-2xl font-medium text-white">Call Us</p>
          <p className=" ml-4 text-lg text-gray-500 hover:text-yellow-400">
            Call us at +917980108976
          </p>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col items-center text-center">
          <a
            href="https://wa.me/7980108976"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={whatsappImage}
              alt="WhatsApp"
              className="h-16"
              aria-label="Chat with us"
            />
          </a>
          <p className="mt-2 text-2xl font-medium text-white">WhatsApp</p>

          <a
            href="https://wa.me/7980108976"
            className="hover:text-yellow-400 text-lg text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plan your shoot on whatsapp +917980108976
          </a>
        </div>

        {/* Google Map */}
        <div className="flex flex-col items-center text-center">
          <a
            href="https://www.google.com/maps/place/PKS+Filmer/@22.4807021,88.3347199,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027144d1fcdc1b:0x123657d378866540!8m2!3d22.4806972!4d88.3372948!16s%2Fg%2F11rs2b8r8s?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={googlemapImage}
              alt="Google Map"
              className="h-16"
              aria-label="Visit our location"
            />
          </a>
          <p className="mt-2 text-2xl font-medium text-white">Visit Us</p>
          <a
            className="text-lg hover:text-yellow-400 text-gray-500 md:mx-12 lg:mx-0 mx-0"
            href="https://www.google.com/maps/place/PKS+Filmer/@22.4807021,88.3347199,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027144d1fcdc1b:0x123657d378866540!8m2!3d22.4806972!4d88.3372948!16s%2Fg%2F11rs2b8r8s?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            76/3, Mahatma Gandhi Rd, Haridevpur, Paschim Putiary, Kolkata, West
            Bengal 700082
          </a>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center text-center">
          <a
            href="https://www.facebook.com/pksfilmer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={facebookImage}
              alt="Facebook"
              className="h-16"
              aria-label="Visit our Facebook profile"
            />
          </a>
          <p className="mt-2 text-2xl font-medium text-white">Facebook</p>
          <a
            href="https://www.facebook.com/pksfilmer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-yellow-400 text-gray-500"
          >
            Like our Facebook page
          </a>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center text-center">
          <a
            href="https://www.instagram.com/pks_filmer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={instagramImage}
              alt="Instagram"
              className="h-16"
              aria-label="Visit our Instagram profile"
            />
          </a>
          <p className="mt-2 text-2xl font-medium text-white">Instagram</p>
          <a
            href="https://www.instagram.com/pks_filmer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-yellow-400 text-gray-500"
          >
            Follow us on Instagram
          </a>
        </div>

        {/* Google */}
        <div className="flex flex-col items-center text-center">
          <a
            href="https://www.google.com/maps/place/PKS+Filmer/@22.4807021,88.3347199,17z/data=!4m8!3m7!1s0x3a027144d1fcdc1b:0x123657d378866540!8m2!3d22.4806972!4d88.3372948!9m1!1b1!16s%2Fg%2F11rs2b8r8s?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={googleImage}
              alt="Google"
              className="h-16"
              aria-label="Please give your feedback"
            />
          </a>
          <p className="mt-2 text-2xl font-medium text-white">Google</p>
          <a
            href="https://www.google.com/maps/place/PKS+Filmer/@22.4807021,88.3347199,17z/data=!4m8!3m7!1s0x3a027144d1fcdc1b:0x123657d378866540!8m2!3d22.4806972!4d88.3372948!9m1!1b1!16s%2Fg%2F11rs2b8r8s?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-yellow-400 text-gray-500"
          >
            Give Review on Google
          </a>
        </div>
      </div>
      <div className="relative text-left mt-24" style={{ height: "60vh" }}>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${contactSecondPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(1px)",
            zIndex: -1,
          }}
        ></div>
        {/* Text Container with background for contrast */}
        <div className="relative z-100 px-4 sm:px-6 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white text-center sm:text-left md:mx-20 lg:mx-28">
            Book Us For an Event
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-full sm:max-w-2xl mb-6 text-white text-center sm:text-left md:mx-20 lg:mx-28">
            Get your events organised to perfection by team Pks Filmer
          </p>
          <div className="flex justify-center sm:justify-start md:mx-20 lg:mx-28">
            <button
              className="text-sm sm:text-lg font-semibold bg-transparent text-white py-2 px-4 sm:px-6 rounded-full border-2 border-white hover:bg-yellow-500"
              onClick={() =>
                window.open(
                  "https://wa.me/+917980108976?text=Hello, I would like to discuss more about the services.",
                  "_blank"
                )
              }
            >
              Lets discuss on Whatsapp
            </button>
          </div>
        </div>
      </div>
      <div className="text-left mt-24 ">
        <h2 className="text-4xl font-bold mb-3 md:mx-20 mx-5">
          Book Your Dream Shoot Today!
        </h2>
        <p className="text-lg leading-relaxed max-w-18xl mb-10 md:mx-20 mx-6">
          Message us and we will get back to you soon
        </p>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6 px-4 sm:px-8 md:px-16 md:mx-5 mx-2"
      >
        {/* Horizontal Row of Input Fields for Desktop */}
        <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:gap-6">
          {/* Name Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-500"
              className={`w-full p-2 border ${
                emailError ? "border-red-500" : "border-gray-400"
              } rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-500`}
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-200 mb-1"
          >
            Your Message for us
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full max-w-screen-2xl p-2 border border-gray-400 rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 mx-auto"
            // required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex place-items-start">
          <button
            type="submit"
            className="text-lg font-semibold bg-transparent text-white py-2 px-6 rounded-full border-2 border-white hover:bg-yellow-500 mb-4"
          >
            Submit
          </button>
          {showModal && <Modal onClose={handleModalClose} />}
        </div>
      </form>
      <QuickLinks />

      <ToastContainer />
    </div>
  );
};

export default Contact;
