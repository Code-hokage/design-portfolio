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
    <div className="text-start max-h-32 overflow-y-auto animate__animated animate__fadeInLeft">
      {currentTitle && (
        <h2
          className={`text-3xl text-blue font-medium uppercase transition-opacity duration-500 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentTitle}
        </h2>
      )}
      {currentDescription && (
        <p
          className={`py-2 transition-opacity duration-500 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentDescription}
        </p>
      )}
    </div>
  );
};

export default Textbox;
