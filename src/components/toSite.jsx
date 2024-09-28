import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ToSite = ({ siteName, hrefUrl, githubName, githubUrl }) => {
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
      <div
        className={`flex flex-col items-start justify-between gap-4 py-2 font-semibold transition-all cursor-pointer ${
          transitioning
            ? "opacity-0 -translate-x-4 duration-0"
            : "opacity-100 translate-x-0 duration-500"
        }`}
      >
        <Link
          to={hrefUrl}
          className="inline-flex items-center gap-2 *:transition-transform *:duration-500 group"
        >
          <span className="group-hover:text-blue">{siteName}</span>
          <FaArrowRight className="inline group-hover:text-blue group-hover:translate-x-2" />
        </Link>
        <Link
          to={githubUrl}
          className="inline-flex items-center gap-2 *:transition-transform *:duration-500 group"
        >
          <span className="group-hover:text-blue">{githubName}</span>
          <FaArrowRight className="inline group-hover:text-blue group-hover:translate-x-2" />
        </Link>
      </div>
    </>
  );
};

export default ToSite;
