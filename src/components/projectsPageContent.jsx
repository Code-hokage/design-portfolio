import React, { useState, useEffect, useRef } from "react";
import Textbox from "./text";
import Background from "./background";
import Showcase from "./imgSlider";
import ProjectGithub from "./projectGithub";
import "animate.css";

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
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-full">
        <Background bgStyle={currentPageContent.bgStyle} />
        <div className="flex justify-between *:z-50 px-16 -my-16">
          <div className="">
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

        <div className="w-full flex justify-between cursor-pointer px-16 my-32">
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
            <span className="text-4xl text-blue opacity-50 hover:opacity-100">
              {`<`}Prev
            </span>
          </button>

          <button
            className="flex"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % pageItems.pageContent.length)
            }
            aria-label="Next slide"
          >
            <span className="text-4xl text-blue opacity-50 hover:opacity-100">
            Nxt{`>`}
            </span>
          </button>
        </div>
      </div>

      <div className="w-1/2 h-full flex items-center justify-center pr-16">
        <div
          className="p-4 w-full h-full overflow-y-auto flex flex-col gap-4 items-center no-scrollbar"
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
              className={`slide rounded w-4/5 h-64 object-cover transition-all duration-500 cursor-pointer slide-${index} ${getSlideStyle(
                index
              )}`}
              data-index={index}
              // style={{ scrollSnapAlign: "center" }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="flex flex-col">
          {pageItems.pageContent.map((image, index) => (
            <span
              key={index}
              className={`mx-1 rounded-full my-2 cursor-pointer ${
                currentIndex === index
                  ? "bg-blue h-8 w-4 origin-center transition duration-500"
                  : "h-4 w-4 border-2 border-blue"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
