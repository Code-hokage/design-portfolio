import React, { useState, useEffect, useRef } from "react";
import Textbox from "./text";
import Background from "./background";
import Showcase from "./imgSlider";
import ProjectGithub from "./projectGithub";
import "animate.css";
import { motion, useScroll, useSpring, animate } from "framer-motion";


const slideVariants = {
  animation: {
    y: [10, -30],
    x: [0],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 2,
        ease: "easeOut",
      },
    },
  },
};

const PageContent = ({ pageContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     const middleImage = sliderRef.current.querySelector(
  //       `.slide-${currentIndex}`
  //     );
  //     if (middleImage) {
  //       setTimeout(() => {
  //         middleImage.scrollIntoView({
  //           behavior: "smooth",
  //           block: "center",
  //           inline: "center",
  //         });
  //       }, 1000);
  //     }
  //   }
  // }, [currentIndex]);

  const getSlideStyle = (index) =>
    index === currentIndex ? "border-2 border-blue" : "";

  const currentPageContent = pageContent[currentIndex];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        viewport={{ root: scrollRef }}
        style={{ scaleY }}
        className={`bg-blue fixed right-0 top-0 bottom-0 w-2 origin-top`}
      />

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
        <div
          className="w-full h-full p-4 flex flex-col gap-4 items-center overflow-y-scroll overflow-x-hidden snap-y no-scrollbar -skew-x-[10deg]"
          aria-live="polite"
          aria-atomic="true"
          // ref={sliderRef}
          ref={scrollRef}
        >
          {pageContent.map((image, index) => (
            // <img
            //   key={index}
            //   src={image.url}
            //   alt={`Slide ${index}`}
            //   className={`w-full h-full object-cover snap-center transition-all duration-[1s] cursor-pointer slide-${index} ${getSlideStyle(
            //     index
            //   )}`}
            //   data-index={index}
            //   onClick={() => setCurrentIndex(index)}
            // />
            <motion.div
              key={index}
              data-index={index}
              variants={slideVariants}
              animate="animation"
              onClick={() => setCurrentIndex(index)}
              className={`w-full h-[60%] snap-center transition-all duration-[1s] cursor-pointer slide-${index} ${getSlideStyle(
                index
              )}`}
            >
              <img
                src={image.url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
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
