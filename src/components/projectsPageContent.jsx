import React, { useState, useEffect, useRef } from "react";
import Textbox from "./text";
import Background from "./background";
import Showcase from "./imgSlider";
import ProjectGithub from "./projectGithub";
import "animate.css";

const PageContent = ({ pageContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const middleImage = sliderRef.current.querySelector(
        `.slide-${currentIndex}`
      );
      if (middleImage) {
        setTimeout(() => {
          middleImage.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }, 100); // Adding a small delay can help with smooth transitions
      }
    }
  }, [currentIndex]);

  const getSlideStyle = (index) =>
    index === currentIndex
      ? "opacity-100 border-2 border-blue mx-8 z-10 transform transition-all duration-[2s]"
      : "opacity-30 scale-90";

  const currentPageContent = pageContent[currentIndex];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-full">
        <Background bgStyle={currentPageContent.bgStyle} />
        <div className="flex justify-between px-16 -my-16">
          <div>
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
                (currentIndex + pageContent.length - 1) % pageContent.length
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
              setCurrentIndex((currentIndex + 1) % pageContent.length)
            }
            aria-label="Next slide"
          >
            <span className="text-4xl text-blue opacity-50 hover:opacity-100">
              Nxt{`>`}
            </span>
          </button>
        </div>
      </div>

      <div className="w-1/2 h-full flex items-center justify-between pr-16">
        <div className="p-4 w-4/5 h-full overflow-y-auto overflow-x-hidden no-scrollbar">
          <div
            className="w-full h-3/5 flex flex-col gap-4 items-center"
            aria-live="polite"
            aria-atomic="true"
            ref={sliderRef}
            style={{ scrollSnapType: "y mandatory" }}
          >
            {pageContent.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Slide ${index}`}
                className={`slide w-full h-full object-cover transition-all duration-[2s] cursor-pointer slide-${index} ${getSlideStyle(
                  index
                )}`}
                data-index={index}
                style={{ scrollSnapAlign: "center" }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {pageContent.map((_, index) => (
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
