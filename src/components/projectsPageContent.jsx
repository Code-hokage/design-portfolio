import React, { useState, useEffect, useRef } from "react";
import Textbox from "./text";
import Background from "./background";
import Showcase from "./imgSlider";
import ProjectGithub from "./projectGithub";
import "animate.css";
import { motion } from "framer-motion";


const PageContent = (pageItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Center the active image smoothly
  useEffect(() => {
    if (sliderRef.current) {
      const middleImage = sliderRef.current.querySelector(
        `.slide-${currentIndex}`
      );
      if (middleImage) {
        const containerWidth = sliderRef.current.offsetWidth;
        const imageWidth = middleImage.offsetWidth;
        const scrollPosition =
          middleImage.offsetLeft - containerWidth / 2 + imageWidth / 2;

        // Add the smooth scrolling class
        sliderRef.current.classList.add("scroll-smooth");
        sliderRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        // Remove the smooth scrolling class after the transition
        setTimeout(() => {
          sliderRef.current.classList.remove("scroll-smooth");
        }, 1000); // match the duration of your transition
      }
    }
  }, [currentIndex]);

  // Define styles for the active and non-active images
  const getSlideStyle = (index) => {
    return index === currentIndex
      ? "opacity-100 border-2 border-blue mx-8 z-10 transform scale-125 transition-all duration-500"
      : "opacity-30 scale-90";
  };

  const currentPageContent = pageItems.pageContent[currentIndex];

  return (
    <div className="w-full h-full overflow-hidden">
      <Background bgStyle={currentPageContent.bgStyle} />

      <div className="w-full m-auto flex flex-col justify-center items-center -mt-24">
        <div className="w-full *:z-50 px-32 flex justify-between items-start pb-10">
          <div className="w-3/5">
            <Textbox
              title={currentPageContent.title}
              description={currentPageContent.description}
            />
            {currentPageContent.icon && (
              <ProjectGithub
                hrefUrl={currentPageContent.icon.hrefUrl}
                Icon={currentPageContent.icon.Icon}
                iconName={currentPageContent.icon.iconName}
                style={currentPageContent.icon.style}
              />
            )}
          </div>
          <Showcase images={currentPageContent.images} />
        </div>

        <div className="w-full">
          <div className="w-full flex justify-center items-center gap-4 cursor-pointer">
            <button
              className="flex"
              onClick={() =>
                setCurrentIndex(
                  (currentIndex + pageItems.pageContent.length - 1) %
                    pageItems.pageContent.length
                )
              }
              aria-label="Previous slide"
            >
              <span className="text-4xl text-blue opacity-50 hover:opacity-100">{`<`}</span>
            </button>

            <div
              className="max-w-[50%] p-4 relative h-32 overflow-x-auto flex items-center no-scrollbar"
              aria-live="polite"
              aria-atomic="true"
              ref={sliderRef}
              style={{ scrollSnapType: "x mandatory" }}
            >
              {pageItems.pageContent.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Slide ${index}`}
                  className={`slide rounded w-32 h-24 object-cover transition-all duration-500 cursor-pointer slide-${index} ${getSlideStyle(
                    index
                  )}`}
                  data-index={index}
                  // style={{ scrollSnapAlign: "center" }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button
              className="flex"
              onClick={() =>
                setCurrentIndex(
                  (currentIndex + 1) % pageItems.pageContent.length
                )
              }
              aria-label="Next slide"
            >
              <span className="text-4xl text-blue opacity-50 hover:opacity-100">{`>`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center px-10 pt-4">
            {pageItems.pageContent.map((image, index) => (
              <span
                key={index}
                className={`mx-1 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-blue h-4 w-8 origin-center transition duration-500"
                    : "h-4 w-4 border-2 border-blue"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
