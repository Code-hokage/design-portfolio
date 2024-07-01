import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const services = ["Web design", "Graphic design", "Web dev"];

  return (
    <>
      <div className="w-full flex justify-center items-start gap-4 p-16">
        <div className="basis-1/2">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-6xl text-blue font-medium">Welcome!</h1>
            <h3 className="text-2xl">
              I am Designer and a Frontend Developer.
            </h3>
            <p>
              I create exceptional user friendly experiences and beautiful
              designs. Here are some of my personal projects. Explore and get a
              sense of my design aesthetics and technical capabilities.
            </p>
            <Link
              to="designs"
              className="text-blue flex justify-center items-center gap-2 group"
            >
              Explore designs{" "}
              <FaArrowRight className="group-hover:translate-x-2 duration-300" />
            </Link>

            <div>
              <h3 className="text-2xl pb-1 pt-8">Services</h3>
              <div className="flex justify-start items-center gap-2">
                {services.map((service, index) => {
                  return (
                    <span
                      key={index}
                      className="text-grey font-bold px-2 py-1 rounded-lg bg-blue"
                    >
                      {service}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* profile-pic */}
        <div className="basis-1/2 flex items-start justify-center">
          {/* <div class="p-2 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
            <div class="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
          </div> */}

          {/* <div className="card">
            <img
              src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
              alt="cartoon"
              className="image animate-bounce"
            />
          </div> */}

          
        </div>
      </div>
    </>
  );
};

export default Home;
