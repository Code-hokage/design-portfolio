import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Textbox = ( prop ) => {
  return (
    <>
      <div className="text-start basis-2/3">
        <h2 className="text-3xl text-blue font-medium uppercase">
          {prop.title}
        </h2>
        <p className="py-2">{prop.description}</p>
        <button className="group relative">
          <Link to={prop.hrefUrl} className="pt-1">
            <FaGithub
              className={`${prop.iconStyle} text-blue size-8 hover:scale-105 hover:bg-white p-1 rounded-lg duration-500`}
            />
          </Link>
          <span className="absolute text-grey -top-10 left-[50%] -translate-x-[50%] origin-left rounded-lg bg-white p-2 text-xs font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-90 hidden group-hover:flex">
            {prop.iconName}
          </span>
        </button>
      </div>
    </>
  );
};

export default Textbox;
