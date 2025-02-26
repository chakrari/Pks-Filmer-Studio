import React, { useState } from "react";

const HomeCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image Thumbnail */}
      <div className="w-full lg:w-1/5 p-5 overflow-hidden md:ml-14">
        <img
          className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg object-contain cursor-pointer"
          // eslint-disable-next-line react/prop-types
          src={props.img}
          alt="img"
          onClick={() => setIsOpen(true)} // Open modal on click
        />
      </div>

      {/* Modal - Opens when isOpen is true */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          {/* Close Button at the top right of the screen */}
          <button
            className="fixed top-4 right-4 text-white px-3 py-2 rounded-full text-lg font-bold  bg-opacity-50 hover:bg-opacity-75 transition-all"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* Enlarged Image */}
          <div className="p-4 rounded-lg shadow-lg max-w-3xl w-full">
            <img
              className="w-full max-h-[80vh] rounded-lg object-contain"
              // eslint-disable-next-line react/prop-types
              src={props.img}
              alt="Enlarged img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCard;
