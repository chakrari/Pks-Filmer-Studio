import React, { useState, useEffect } from "react";
import { reviews } from "../../reviewsData"; // Assuming reviewsData has an array of reviews

const TestimonialSlider = () => {
  // State to manage the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // UseEffect to set up the automatic slider (change every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index, and loop back to 0 if at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change testimonial every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto py-8 text-white">
      {/* Testimonial content */}
      <div className="overflow-hidden">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Testimonial content */}
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <img
                src={review.image}
                alt={`Profile of ${review.name}`}
                className="rounded-full shadow-lg mb-4 w-36 h-36 object-cover border-4 border-gray-700"
              />
              {/* Testimonial Text */}
              <p className="text-gray-300 mb-4">{review.text}</p>
              {/* Rating Stars */}
              <div className="text-yellow-400 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={
                    //   starIndex < review.rating
                    //     ? "text-yellow-400"
                    //     : "text-gray-600"
                    "text-yellow-400"
                    }
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              {/* Author Name and City */}
              <p className="text-xl font-semibold">
                {review.name}, <span>{review.city}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
