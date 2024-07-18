import React, { useState, useEffect, useRef } from "react";
import { WebProjectsItems } from "../db";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // This function handles the intersection of images with the middle of the container
//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const index = parseInt(entry.target.dataset.index, 10);
//         setCurrentIndex(index);
//       }
//     });
//   };

  // Setting up the IntersectionObserver to monitor the images
  useEffect(() => {
    // const options = {
    //   root: sliderRef.current,
    //   rootMargin: "0px",
    //   threshold: 0.5,
    // };

    // const observer = new IntersectionObserver(handleIntersection, options);

    // const slides = sliderRef.current.querySelectorAll(".slide");
    // slides.forEach((slide) => {
    //   observer.observe(slide);
    // });

    // return () => {
    //   slides.forEach((slide) => {
    //     observer.unobserve(slide);
    //   });
    // };
  }, []);

  // Center the active image smoothly
  useEffect(() => {
    if (sliderRef.current) {
      const middleImage = sliderRef.current.querySelector(`.slide-${currentIndex}`);
      if (middleImage) {
        middleImage.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [currentIndex]);

  // Define styles for the active and non-active images
  const getSlideStyle = (index) => {
    if (index === currentIndex) {
      return "opacity-100 border-4 border-[crimson] z-10 transform scale-110";
    } else {
      return "opacity-70";
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-center items-center gap-4 cursor-pointer">
        {/* Button to go to the previous image */}
        <button className="flex" onClick={() => setCurrentIndex((currentIndex + WebProjectsItems.length - 1) % WebProjectsItems.length)} aria-label="Previous slide">
          <span className="text-6xl text-blue">{`<`}</span>
        </button>

        {/* Image slider container */}
        <div
          className="w-1/2 relative h-32 overflow-x-auto flex items-center no-scrollbar"
          aria-live="polite"
          aria-atomic="true"
          ref={sliderRef}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {WebProjectsItems.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Slide ${index}`}
              className={`slide rounded-lg w-32 h-28 object-cover mx-2 transition-opacity duration-500 cursor-pointer slide-${index} ${getSlideStyle(index)}`}
              data-index={index}
              style={{ scrollSnapAlign: "center" }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Button to go to the next image */}
        <button className="flex" onClick={() => setCurrentIndex((currentIndex + 1) % WebProjectsItems.length)} aria-label="Next slide">
          <span className="text-6xl text-blue">{`>`}</span>
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center px-10">
        {WebProjectsItems.map((image, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue" : "bg-blue opacity-30"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
