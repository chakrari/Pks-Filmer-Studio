// import React from 'react';
// import { useCarousel } from '../Carousel_compo/CarouselContext'; // Import useCarousel hook
// import 'flowbite';
// import 'flowbite/dist/flowbite.css';

// import cr1 from '../../assets/photo_for_website/cr1.jpg';
// import cr2 from '../../assets/photo_for_website/cr2.jpg';
// import cr3 from '../../assets/photo_for_website/cr3.jpg';
// import cr4 from '../../assets/photo_for_website/cr4.jpg';

// const Carousel = () => {
//   const { currentSlide, setCurrentSlide } = useCarousel();

//   const slides = [cr1, cr2, cr3, cr4];

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);

//     const buttons = document.querySelectorAll('[data-carousel-slide-to]');
//     buttons.forEach((button, i) => {
//       button.classList.toggle('bg-white', i === index);
//       button.classList.toggle('bg-gray-800', i !== index);
//     });
//   };

//   return (
//     <div id="default-carousel" className="relative w-full h-[80vh]" data-carousel="slide">
//       <div className="relative w-full h-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`duration-1000 ease-in-out ${index === currentSlide ? '' : 'hidden'}`}
//             data-carousel-item
//           >
//             <img
//               src={slide}
//               className="absolute block w-full h-full object-cover"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-800'}`}
//             aria-current={index === currentSlide ? 'true' : 'false'}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//             onClick={() => handleSlideChange(index)}
//           ></button>
//         ))}
//       </div>

//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React from 'react';
import { useCarousel } from '../Carousel_compo/CarouselContext'; // Import useCarousel hook
import 'flowbite';
import 'flowbite/dist/flowbite.css';

const Carousel = ({ slides }) => {
  const { currentSlide, setCurrentSlide } = useCarousel();

  const handleSlideChange = (index) => {
    setCurrentSlide(index);

    const buttons = document.querySelectorAll('[data-carousel-slide-to]');
    buttons.forEach((button, i) => {
      button.classList.toggle('bg-white', i === index);
      button.classList.toggle('bg-gray-800', i !== index);
    });
  };

  return (
    <div id="default-carousel" className="relative w-full h-[100vh]" data-carousel="slide">
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-1000 ease-in-out ${index === currentSlide ? '' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={slide}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-800'}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
