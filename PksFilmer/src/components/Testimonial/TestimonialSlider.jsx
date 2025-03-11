import React, { useState, useEffect } from "react";
import { reviews } from "../../reviewsData"; // Assuming reviewsData has an array of reviews

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto md:py-8 text-white">
      {/* Wrapper for all testimonials */}
      <div className="flex flex-col items-center text-center">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "flex" : "hidden"
            } flex-col items-center text-center`}
          >
            {/* Profile Image */}
            <img
              src={review.image}
              loading="lazy" 
              alt={`Profile of ${review.name}`}
              className="rounded-full shadow-lg mb-4 w-36 h-36 object-cover border-4 border-gray-700 mt-20"
            />
            {/* Testimonial Text */}
            <p className="text-gray-300 mb-2">{review.text}</p>
            {/* Rating Stars */}
            <div className="text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex}>&#9733;</span>
              ))}
            </div>
            {/* Author Name and City */}
            <p className="text-xl font-semibold">
              {review.name}, <span>{review.city}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
