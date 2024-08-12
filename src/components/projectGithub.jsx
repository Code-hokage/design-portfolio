import React from "react";
import { Link } from "react-router-dom";

const ProjectGithub = ({ hrefUrl, Icon, style, iconName }) => {
  return (
    <div className="flex">
      <div className="relative mt-1 group">
       <Link to={hrefUrl} aria-label={iconName}>
        <button
          className={`text-grey bg-white p-1 rounded-lg transition-transform duration-500 hover:scale-105 ${style}`}
        >
          <Icon className="w-6 h-6" />
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
