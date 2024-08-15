import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectGithub = ({ hrefUrl, Icon, style, iconName }) => {
  const [currentHref, setCurrentHref] = useState(hrefUrl);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (hrefUrl !== currentHref) {
      setTransitioning(true);

      const timeout = setTimeout(() => {
        setCurrentHref(hrefUrl);
        setTransitioning(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [hrefUrl, currentHref]);

  return (
    <>
      <div className="animate__animated animate__fadeInLeft animate__slow cursor-pointer">
        <div
          className={`flex transition-all ${
            transitioning ? "opacity-0 -translate-x-4 duration-0" : "opacity-100 translate-x-0 origin-left duration-500"
          }`}
        >
          <div className={`relative mt-2 group`}>
            <Link to={currentHref} aria-label={iconName}>
              <button
                className={`text-grey bg-white p-1 rounded-lg transition-transform duration-500 hover:scale-105 ${style}`}
              >
                <Icon className="w-6 h-6" />
              </button>
            </Link>
            <div
              className="absolute group-hover:flex top-0 left-7 transform group-hover:origin- group-hover:translate-x-4 opacity-0 group-hover:opacity-100 rounded-lg bg-white p-1 text-xs font-bold text-grey shadow-md transition-all duration-500 ease-in-out"
              role="tooltip"
            >
              {iconName}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectGithub;
