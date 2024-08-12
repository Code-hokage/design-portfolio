import { Link } from "react-router-dom";
import { Socials } from "../db";
import DateTime from "../components/dateTime";
import "animate.css";

const Home = () => {
  return (
    <>
      <main className="relative bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue/30 via-grey to-darkBlue w-screen h-screen flex justify-center items-center px-16">
        {/* profile pic */}
        <div className="fixed flex items-end justify-end overflow-hidden w-full h-full animate__animated animate__fadeInUp animate__slow">
          <div className="bg-hero bg-contain bg-no-repeat w-2/3 h-[90%] fixed"></div>
          {/* <img src="/imgs/man.png" alt="man" className="size-max" /> */}
        </div>

        <div className="flex w-full h-full pt-40 pb-12 justify-between">
          {/* web dev */}
          <div className="z-50 flex basis-1/2 h-full flex-col justify-between items-start animate__animated animate__fadeInLeft">
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-2xl text-blue">Welcome!</h3>
              <h3 className="text-2xl">I am Adnan Adam a</h3>
              <h2 className="text-4xl font-medium text-blue uppercase">
                <span>frontend developer</span> <br />
                <span className="text-[crimson]">+</span>
                <span>designer</span>
              </h2>
              <p className="pt-8">
                I create exceptional user friendly experiences <br />
                and exceptional designs. Explore and get a sense <br /> of
                technical capabilities <br /> and design aesthetics.
              </p>

              {/* <div className="flex items-center gap-4">
                <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-8 w-40 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p class="z-10">Discover More</p>
                </button>
              </div> */}
            </div>

            <div className="opacity-30 text-[0.5rem]">
              <span>copyright © 2024</span>
            </div>
          </div>

          <div className="z-50 basis-1/2 text-end flex flex-col items-end justify-between animate__animated animate__fadeInRight ">
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

        {/* gradient */}
        <div className="w-full h-1/5 absolute bottom-0 bg-gradient-to-t from-darkBlue to-blue/0"></div>
      </main>
    </>
  );
};

export default Home;
