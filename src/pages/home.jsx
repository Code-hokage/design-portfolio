import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Socials } from "../db";

const Home = () => {
  return (
    <>
      <main className="relative bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue/30 via-grey to-darkBlue w-screen h-screen flex justify-center items-center px-12">
        {/* profile pic */}
        <div className="absolute overflow-hidden w-2/3 h-full">
          <img src="/imgs/man.png" alt="man" className="size-max" />
        </div>

        {/* web dev */}
        <div className="flex w-full h-full pt-40 pb-12 justify-between">
          <div className="flex flex-col justify-between">
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
                to="designs"
                className="text-blue flex justify-center items-center gap-2 group hover:scale-105 duration-500 ease-in-out"
              >
                Explore projects{" "}
                <FaArrowRight className="group-hover:translate-x-2 duration-500" />
              </Link>
            </div>

            <nav aria-label="socials" className="z-50 flex gap-3">
              {Socials.map((social) => {
                return (
                  <button className="group relative">
                    <Link
                      key={social.hrefUrl}
                      href={social.hrefUrl}
                      className="pt-1"
                    >
                      <social.icon
                        className={`${social.style} text-blue size-8 hover:scale-105 hover:bg-white p-1 rounded-lg duration-500`}
                      />
                    </Link>
                    <span className="absolute text-grey -top-10 left-[50%] -translate-x-[50%] origin-left rounded-lg bg-white p-2 text-xs font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-90 hidden group-hover:flex">
                      {social.Name}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* designs */}
          <div className="z-50 text-end flex flex-col gap-2 items-end justify-end">
            <h2 className="text-3xl text-blue uppercase font-medium text-end">
              graphic designer
            </h2>
            <p>
              I create exceptional and beautiful designs. <br /> Here are some
              of my personal projects. <br /> Explore and get a sense of my
              design aesthetics.
            </p>
            <Link
              to="/designs"
              className="text-blue flex justify-end items-center gap-2 group hover:scale-105 duration-500"
            >
              Explore designs
              <FaArrowRight className="group-hover:translate-x-2 duration-500 ease-in-out" />
            </Link>
          </div>
        </div>

        {/* gradient */}
        <div className="w-full h-1/5 absolute bottom-0 bg-gradient-to-t from-darkBlue to-blue/0"></div>
      </main>
    </>
  );
};

export default Home;
