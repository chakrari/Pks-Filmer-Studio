import React from "react";
import galleryWideImage1 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryWide1.jpg";
import galleryWideImage2 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryWide2.jpg";
import galleryWideImage3 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryWide3.avif";
import galleryWideImage4 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryWide4.avif";
import galleryWideImage5 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryWide5.avif";
import galleryWideImage6 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/galleryWide6.avif";
import gallerySquareImage1 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/gallerySquare1.jpg";
import gallerySquareImage2 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/gallerySquare2.avif";
import gallerySquareImage3 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/gallerySquare3.jpg";
import gallerySquareImage4 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/gallerySquare4.jpg";
import gallerySquareImage5 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/gallerySquare5.jpg";
import gallerySquareImage6 from "../../assets/Pks_Photos/PKs_Clean_Photos/Gallery/gallerySquare6.avif";

const images = [
  { id: 1, src: gallerySquareImage1, alt: "Pre-Wedding Image 1" },
  { id: 2, src: galleryWideImage1, alt: "Pre-Wedding Image 2" },
  { id: 3, src: galleryWideImage2, alt: "Pre-Wedding Image 3" },
  { id: 4, src: gallerySquareImage2, alt: "Pre-Wedding Image 4" },
  { id: 5, src: galleryWideImage3, alt: "Pre-Wedding Image 5" },
  { id: 6, src: gallerySquareImage3, alt: "Pre-Wedding Image 6" },
  { id: 7, src: gallerySquareImage4, alt: "Wedding Image 1" },
  { id: 8, src: galleryWideImage4, alt: "Wedding Image 2" },
  { id: 9, src: galleryWideImage5, alt: "Wedding Image 3" },
  { id: 10, src: gallerySquareImage5, alt: "Wedding Image 4" },
  { id: 11, src: galleryWideImage6, alt: "Wedding Image 5" },
  { id: 12, src: gallerySquareImage6, alt: "Wedding Image 6" },
];

const MasonaryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-1 md:py-20 gap-4">
      {images.map((image) => (
        <div key={image.id} className="mb-4 break-inside-avoid">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonaryGrid;
