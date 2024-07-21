import "animate.css";

const Textbox = (prop) => {
  return (
    <>
      <div className="text-start basis-2/3">
        <div className="w-full h-28 overflow-y-auto">
          <h2 className="text-3xl text-blue font-medium uppercase">
            {prop.title}
          </h2>
          <p className="py-2">{prop.description}</p>
        </div>
      </div>
    </>
  );
};

export default Textbox;
