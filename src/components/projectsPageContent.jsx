import React, { useState, useEffect, useRef } from "react";
import Textbox from "./text";
import Background from "./background";
import Showcase from "./imgSlider";
import ProjectGithub from "./projectGithub";
import PropTypes from "prop-types";
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
        }, 2000); // match the duration of your transition
      }
    }
  }, [currentIndex]);

  // Define styles for the active and non-active images
  const getSlideStyle = (index) => {
    return index === currentIndex
      ? "opacity-100 border border-blue z-10 transform scale-125"
      : "opacity-50";
  };

  const currentPageContent = pageItems.pageContent[currentIndex];

  return (
    <div className="w-full h-full overflow-hidden">
      <Background bgStyle={currentPageContent.bgStyle} />

      <div className="w-full m-auto flex flex-col justify-center items-center -mt-24 animate__animated animate__fadeInUp animate__slow">
        <div className="w-full *:z-50 px-16 flex justify-between items-start pb-10">
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
                className={`slide rounded w-32 h-24 object-cover mx-3 transition duration-[2s] cursor-pointer slide-${index} ${getSlideStyle(
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
              setCurrentIndex((currentIndex + 1) % pageItems.pageContent.length)
            }
            aria-label="Next slide"
          >
            <span className="text-4xl text-blue opacity-50 hover:opacity-100">{`>`}</span>
          </button>
        </div>

        <div className="flex items-center justify-center px-10 pt-2">
          {pageItems.pageContent.map((image, index) => (
            <span
              key={index}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition duration-1000 ${
                currentIndex === index ? "bg-blue" : "bg-blue opacity-30"
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

PageContent.propTypes = {
  pageItems: PropTypes.shape({
    pageContent: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        bgStyle: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
        icon: PropTypes.shape({
          iconName: PropTypes.string.isRequired,
          hrefUrl: PropTypes.string.isRequired,
          style: PropTypes.object,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Define default props
PageContent.defaultProps = {
  pageItems: {
    pageContent: [
      {
        title: "Default Title",
        description: "Default Description",
        bgStyle: "default-bg-style",
        images: [{ url: "default-image-url" }],
        icon: {
          Icon: () => null,
          iconName: "default-icon-name",
          hrefUrl: "default-href-url",
          style: {},
        },
      },
    ],
  },
};

export default PageContent;
