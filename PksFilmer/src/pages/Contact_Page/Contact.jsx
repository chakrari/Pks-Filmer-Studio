import React, { useState } from "react";
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
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return; // Prevent form submission if email is invalid
    }
    handleModalOpen();
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
        <div
          className="relative z-20 p-18 lg:px-20 text-white"
          style={{ marginTop: "19vh" }} // Adjust positioning if needed
        >
          <div className="text-down_left ml-5">
            <h2
              className="text-4xl font-bold mt-16 "
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 1, 1)" }}
            >
              Contact Pks Filmer
            </h2>
            <p
              className="text-lg"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
            >
              <span className="text-yellow-400 text-8xl">“</span>
              From the enchanting moments of your pre-wedding and wedding, to
              the joyful milestones like baby showers and rice ceremonies, or
              even capturing your unique style in a stunning portfolio—we bring
              your vision to life. We do it all! Reach out to explore how we can
              make your memories unforgettable!
            </p>
          </div>
        </div>
      </div>
      <div className="text-left mt-16 ">
        <h2 className="text-4xl font-bold mb-3 ml-20 lg:ml-32">Contact info</h2>
        <p className="text-lg leading-relaxed max-w-18xl mb-10 ml-20 lg:ml-28">
          <span className="text-yellow-400 text-8xl ">"</span>We are Listening
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-12 gap-x-16 ml-4 w-full">
        {/* Telephone */}
        <div className="flex flex-col items-center text-center">
          <img src={telephoneImage} alt="Telephone" className="h-16" />
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
            <img src={whatsappImage} alt="WhatsApp" className="h-16" />
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
            <img src={googlemapImage} alt="Google Map" className="h-16" />
          </a>
          <p className="mt-2 text-2xl font-medium text-white">Visit Us</p>
          <a
            className="text-lg hover:text-yellow-400 text-gray-500 mr-6"
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
            <img src={facebookImage} alt="Facebook" className="h-16" />
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
            <img src={instagramImage} alt="Instagram" className="h-16" />
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
            <img src={googleImage} alt="Google" className="h-16" />
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
        <div className="relative z-100 px-6 py-12">
          <h2 className="text-4xl font-bold mb-3 ml-20 lg:ml-32 text-white">
            Book Us For an Event
          </h2>
          <p className="text-lg leading-relaxed max-w-18xl mb-10 ml-20 lg:ml-28 text-white">
            <span className="text-yellow-400 text-8xl ">"</span>Get your events
            organised to perfection by team Pks Filmer
          </p>
          <button
            className="text-lg font-semibold bg-transparent text-white py-2 px-6 rounded-full border-2 border-white hover:bg-yellow-500 ml-36"
            onClick={() =>
              window.open(
                "https://wa.me/+917980108976?text=Hello, I would like to discuss more about the services.",
                "_blank"
              )
            }
          >
            Let's discuss on Whatsapp
          </button>
        </div>
      </div>
      <div className="text-left mt-24 ">
        <h2 className="text-4xl font-bold mb-3 ml-20 lg:ml-32">
          Book Your Dream Shoot Today!
        </h2>
        <p className="text-lg leading-relaxed max-w-18xl mb-10 ml-20 lg:ml-28">
          <span className="text-yellow-400 text-8xl ">"</span>Message us and we
          will get back to you soon
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 px-4 sm:px-8 md:px-16 ml-16 "
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
            className="w-full max-w-screen-xl p-2 border border-gray-400 rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 mx-auto"
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
    </div>
  );
};

export default Contact;