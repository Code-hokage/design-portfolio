import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectGithub = ({ hrefUrl, Icon, style, iconName }) => {
  const [currentIcon, setCurrentIcon] = useState(Icon);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (Icon !== currentIcon) {
      setTransitioning(true);
      const timeout = setTimeout(() => {
        setCurrentIcon(Icon);
        setTransitioning(false);
      }, 500); // Duration should match the transition duration

      return () => clearTimeout(timeout); // Clean up the timeout on unmount or re-render
    }
  }, [Icon, currentIcon]);

  return (
    <div
      className="flex animate__animated animate__fadeInLeft animate_slow"
    >
      <div className="relative mt-2 group">
        <Link to={hrefUrl} aria-label={iconName}>
          <button
            className={`text-grey bg-white p-1 rounded-lg transition-transform duration-500 hover:scale-105 ${style}`}
          >
            <currentIcon className={`w-6 h-6 ${transitioning ? "opacity-0" : "opacity-100"}`} />
          </button>
        </Link>
        <div
          className="absolute hidden group-hover:flex -top-10 left-1/2 transform -translate-x-1/2 rounded-lg bg-white p-2 text-xs font-bold text-grey shadow-md transition-all duration-300 ease-in-out"
          role="tooltip"
        >
          {iconName}
        </div>
      </div>
    </div>
  );
};

export default ProjectGithub;
