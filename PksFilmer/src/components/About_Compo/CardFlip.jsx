import React, { useState } from "react";
import { aboutCard } from "../../aboutCardData";
import "../About_Compo/CardFlip.css";

const CardFlip = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 mt-10 px-4 sm:px-6 md:px-14">
      {aboutCard.map((card) => (
        <div
          key={card.id}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
          className="relative perspective w-full max-w-[320px] h-[300px] mx-auto"
        >
          <div
            className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
              hoveredCard === card.id ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center border-8 border-white">
              <h2 className="font-abril font-bold text-4xl">
                {card.frontHeading}
              </h2>
              <p className="text-xl mt-3">{card.frontContent}</p>
            </div>
            {/* Back Side */}
            <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center border-8 border-white  rotate-y-180">
              <h2 className="font-abril font-bold text-4xl">
                {card.backHeading}
              </h2>
              <p className="text-xl mt-3">{card.backContent}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardFlip;
