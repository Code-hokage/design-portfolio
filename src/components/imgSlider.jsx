import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Showcase = ({ images }) => {
  const [currentImgs, setCurrentImgs] = useState(images);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (images !== currentImgs) {
      setTransitioning(true);

      const timeout = setTimeout(() => {
        setCurrentImgs(images);
        setTransitioning(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [images, currentImgs]);

  return (
    <>
    <div className="animate__animated animate__fadeInRight animate__slow">
      <div
        className={`border-2 border-blue transition-all ${
          transitioning ? "opacity-0 translate-x-4 duration-0" : "opacity-100 translate-x-0 duration-500"
        }`}
      >
        <SimpleImageSlider
          width={160}
          height={120}
          images={currentImgs}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={2}
          navStyle={{ color: "#fff" }}
        />
      </div>
      </div>
    </>
  );
};

export default Showcase;
