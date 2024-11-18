import React, { useState } from "react";
import contactMain from "../../assets/Pks_Photos/PKs_Clean_Photos/Contact_Us/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
  };

  return (
    <div>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Image Container */}
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            backgroundImage: `url(${contactMain})`,
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
            // className="px-8 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            className="text-lg font-semibold bg-transparent text-white py-2 px-6 rounded-full border-2 border-white hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
