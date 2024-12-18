import React from "react";

const HomeCard = (props) => {
  return (
    <div className="w-full lg:w-1/5 p-5 overflow-hidden ml-14">
      <img
        className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg object-contain"
        src={props.img}
        alt="img"
      />
    </div>
  );
};

export default HomeCard;
