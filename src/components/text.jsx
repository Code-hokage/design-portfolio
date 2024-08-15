import { useState, useEffect } from "react";

const Textbox = ({ title, description }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (title !== currentTitle) {
      setTransitioning(true);
      const timeout = setTimeout(() => {
        setCurrentTitle(title);
        setTransitioning(false);
      }, 500); // Duration should match the transition duration

      return () => clearTimeout(timeout); // Clean up the timeout on unmount or re-render
    }
  }, [title, currentTitle]);

  useEffect(() => {
    if (description !== currentDescription) {
      setTransitioning(true);
      const timeout = setTimeout(() => {
        setCurrentDescription(description);
        setTransitioning(false);
      }, 500); // Duration should match the transition duration

      return () => clearTimeout(timeout); // Clean up the timeout on unmount or re-render
    }
  }, [description, currentDescription]);

  return (
    <div className="text-start overflow-y-auto animate__animated animate__fadeInLeft animate__slow">
      {currentTitle && (
        <h2
          className={`text-4xl text-blue font-medium uppercase transition-all ${
            transitioning ? "opacity-0 duration-0 -translate-x-4" : "opacity-100 origin-left duration-500 translate-x-0"
          }`}
        >
          {currentTitle}
        </h2>
      )}
      {currentDescription && (
        <p
          className={`py-2 transition-all ${
            transitioning ? "opacity-0 -translate-x-4 duration-0" : "opacity-100 translate-x-0 duration-500"
          }`}
        >
          {currentDescription}
        </p>
      )}
    </div>
  );
};

export default Textbox;
