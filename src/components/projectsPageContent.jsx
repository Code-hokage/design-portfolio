import React, { useState, useRef, useEffect } from "react";
import Textbox from "./text";
import Background from "./background";
import Showcase from "./imgSlider";
import ProjectGithub from "./projectGithub";
import { motion, useScroll, useSpring } from "framer-motion";

// const slideVariants = {
//   animation: {
//     x: [0],
//     y: [0, -10],
//     transition: {
//       // x: {
//       //   repeat: Infinity,
//       //   duration: 5,
//       //   ease: "easeOut",
//       // },
//       y: {
//         repeat: Infinity,
//         duration: 3,
//         // ease: [0.17, 0.67, 0.83, 0.67]
//       },
//     },
//   },
// };

const slideVariants = {
  animation: {
    x: [0, -5, 0],
    y: [10, -8, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "mirror", // Smoothly returns to the start
        duration: 4, // Adjust the duration for smoothness
        ease: "easeInOut", // Ease in and out for smooth transitions
      },
      y: {
        repeat: Infinity,
        repeatType: "mirror", // Smoothly returns to the start
        duration: 4, // Match duration for synchronized animation
        ease: "easeInOut", // Ease in and out for smooth transitions
      },
    },
  },
};

const PageContent = ({ pageContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      const selectedImage = slider.querySelector(`.slide-${currentIndex}`);
      if (selectedImage) {
        selectedImage.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [currentIndex]);

  const getSlideStyle = (index) =>
    index === currentIndex
      ? "border-2 border-blue transform scale-110"
      : "transform scale-90";

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

      <div className="w-1/2 h-full flex items-center justify-between gap-4 pr-16">
        <div
          className="w-full h-full p-4 flex flex-col gap-4 items-center overflow-y-scroll overflow-x-hidden snap-y snap-mandatory no-scrollbar -skew-x-[10deg]"
          aria-live="polite"
          aria-atomic="true"
          ref={scrollRef}
        >
          <div className="w-[90%] h-[70%] text-transparent cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam
            at autem dolorum eligendi praesentium, deleniti similique illo
            molestiae vero eaque. Nostrum sapiente aliquam aut, impedit
            consequatur mollitia laudantium culp Lorem ipsum, dolor sit amet
            consecteturlaudantium culp Lorem ipsum, dolor sit amet consectetur
          </div>
          {pageContent.map((image, index) => (
            <motion.div
              key={index}
              data-index={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-[85%] h-[60%] cursor-pointer slide-${index} ${getSlideStyle(
                index
              )}`}
            >
              <motion.div
                className="absolute m-auto -left-5 right-0 top-0 bottom-0 w-[110%] h-[115%] bg-transparent"
                variants={slideVariants}
                animate={currentIndex === index ? "animation" : ""}
              >
                <div class="absolute inset-y-0 right-0 w-10 bg-darkBlue"></div>
                <div class="absolute inset-y-0 left-0 w-10 bg-darkBlue"></div>
                <div class="absolute inset-x-0 top-0 h-10 bg-darkBlue"></div>
                <div class="absolute inset-x-0 bottom-0 h-10 bg-darkBlue"></div>
              </motion.div>
              <img
                src={image.url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          <div className="w-[90%] h-[70%] text-transparent cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam
            at autem dolorum eligendi praesentium, deleniti similique illo
            molestiae vero eaque. Nostrum sapiente aliquam aut, impedit
            consequatur mollitia laudantium culp Lorem ipsum, dolor sit amet
            consectetur
          </div>
        </div>

        <div className="flex flex-col">
          {pageContent.map((_, index) => (
            <span
              key={index}
              className={`mx-1 rounded-full my-2 cursor-pointer ${
                currentIndex === index
                  ? "bg-blue h-6 w-3 origin-center transition duration-500"
                  : "h-3 w-3 border-2 border-blue"
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
