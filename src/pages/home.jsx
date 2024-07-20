import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Socials } from "../db";
import DateTime from "../components/dateTime";
import 'animate.css';

const Home = () => {
  return (
    <>
      <main className="relative bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue/30 via-grey to-darkBlue w-screen h-screen flex justify-center items-center px-16">
        {/* profile pic */}
        <div className="fixed overflow-hidden w-1/2 h-full animate__animated animate__zoomIn animate__slow">
          <div className="bg-hero bg-contain bg-no-repeat w-full h-full fixed"></div>
          {/* <img src="/imgs/man.png" alt="man" className="size-max" /> */}
        </div>

        <div className="flex w-full h-full pt-40 pb-12 justify-between">
          {/* web dev */}
          <div className="z-50 flex basis-1/2 flex-col justify-between items-start animate__animated animate__fadeInLeft">
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-2xl text-blue">Welcome!</h3>
              <h3 className="text-2xl">I am Adnan Adam a</h3>
              <h2 className="text-4xl font-medium text-blue uppercase">
                frontend developer
              </h2>
              <p>
                I create exceptional user friendly experiences. <br /> Here are
                some of my personal projects. <br /> Explore and get a sense of
                technical capabilities.
              </p>
              <Link
                to="/webprojects"
                className="text-blue flex justify-center items-center gap-2 group text-base"
              >
                Explore projects{" "}
                <FaArrowRight className="size-4 group-hover:translate-x-2 duration-500 ease-in-oute" />
              </Link>
            </div>

            <div className="h-full opacity-30 text-[0.5rem] -rotate-90">
              copyright © 2024
            </div>

            <nav aria-label="socials" className="z-50 flex gap-3">
              {Socials.map((social) => {
                return (
                  <button className="group relative">
                    <Link
                      key={social.hrefUrl}
                      to={social.hrefUrl}
                      className="pt-1"
                    >
                      <social.icon
                        className={`${social.style} text-blue size-8 hover:scale-105 hover:bg-white p-1 rounded-lg duration-500`}
                      />
                    </Link>
                    <span className="absolute text-grey -top-10 left-[50%] -translate-x-[50%] scale-0 origin-bottom rounded-lg bg-white p-2 text-xs font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:flex">
                      {social.Name}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="z-50 basis-1/2 text-end flex flex-col items-end justify-between animate__animated animate__fadeInRight ">
            {/* dateTime */}
            <div>
              <DateTime />
            </div>

            {/* designs */}
            <div className="flex flex-col gap-2 items-end justify-end">
              <h2 className="text-3xl text-blue uppercase font-medium text-end">
                graphic designer
              </h2>
              <p>
                I create exceptional and beautiful designs.
                <br /> Explore and get a sense of my design aesthetics.
              </p>
              <Link
                to="/designs"
                className="text-blue flex justify-end items-center gap-2 group"
              >
                Explore designs
                <FaArrowRight className="group-hover:translate-x-2 duration-500 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>

        {/* gradient */}
        <div className="w-full h-1/5 absolute bottom-0 bg-gradient-to-t from-darkBlue to-blue/0"></div>
      </main>
    </>
  );
};

export default Home;
