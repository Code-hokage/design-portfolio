import { Link } from "react-router-dom";
import { Socials } from "../db";
import DateTime from "../components/dateTime";
import { FaArrowRight } from "react-icons/fa6";
import "animate.css";

const Home = () => {
  return (
    <>
      <main className="relative overflow-hidden bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue/30 via-grey to-darkBlue w-screen h-screen flex justify-center items-center px-16">
        {/* profile pic */}
        <div className="absolute flex items-end justify-end overflow-hidden w-full h-full animate__animated animate__fadeInUp">
          <div className="bg-hero bg-contain bg-no-repeat w-2/3 h-[90%] fixed"></div>
          {/* <img src="/imgs/man.png" alt="man" className="size-max" /> */}
        </div>

        <div className="flex w-full h-full pt-40 pb-12 justify-between">
          {/* web dev */}
          <div className="z-50 flex h-full flex-col justify-between items-start animate__animated animate__fadeInLeft">
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-2xl text-blue">Welcome!</h3>
              <h3 className="text-2xl">I am Adnan Adam a</h3>
              <h2 className="text-4xl font-medium text-blue uppercase">
                <span>frontend developer</span> <br />
                <span className="text-[crimson]">+</span>
                <span>designer</span>
              </h2>
              <p className="py-2">
                I create exceptional user friendly experiences <br />
                and exceptional designs. Explore and get a sense <br /> of
                technical capabilities and design aesthetics.
              </p>

              <div className="flex items-center">
                <Link to="/" className="overflow-hidden text-center px-4 py-2 bg-blue text-darkBlue border-none rounded-md text-base font-bold cursor-pointer relative z-10 group">
                  <span className="group-hover:text-blue mr-2">Explore!</span>
                  <FaArrowRight className="text-darkBlue inline group-hover:text-blue group-hover:translate-x-2 transition-transform duration-500" />
                  <span className="absolute w-36 h-32 -top-8 -left-2 -z-10 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 -z-10 bg-darkBlue/70 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 -z-10 bg-darkBlue rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                </Link>
              </div>
            </div>

            <div className="opacity-30 text-[0.5rem]">
              <span>copyright © 2024</span>
            </div>
          </div>

          <div className="z-50 text-end flex flex-col items-end justify-between animate__animated animate__fadeInRight ">
            <div>
              <DateTime />
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
        </div>

        {/* bottom gradient */}
        <div className="w-full h-1/5 absolute bottom-0 bg-gradient-to-t from-darkBlue to-blue/0"></div>
      </main>
    </>
  );
};

export default Home;
