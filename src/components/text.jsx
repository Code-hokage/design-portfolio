import "animate.css";

const Textbox = ({ title, description }) => {
  return (
    <div className="text-start h-28 overflow-y-auto">
      {title && (
        <h2 className="text-3xl text-blue font-medium uppercase">{title}</h2>
      )}
      {description && <p className="py-2">{description}</p>}
    </div>
  );
};

export default Textbox;
