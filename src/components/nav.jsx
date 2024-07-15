import { NavLink, Link } from "react-router-dom";
import { NavLinks } from "../db";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const activeLink = "text-blue text-base font-normal border-b-2 border-blue";

  return (
    <>
      <header className="z-50 flex justify-between sticky -my-10 top-0 items-center py-5 px-16">
        <div className="basis-1/2">
          <span className="text-2xl font-extrabold font-playwrite">
            <Link to="/">ADDY</Link>
            {/* <img src="/mylogo.png" alt="mylogo" className="h-14 w-16"/> */}
          </span>
        </div>

        <div className="basis-1/2 flex justify-end">
          <nav className="flex justify-center items-center *:px-4">
            <ul className="flex *:px-3 justify-center items-start">
              {NavLinks.map((link) => {
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? activeLink
                        : "text-base font-normal hover:text-blue hover:scale-105"
                    }
                  >
                    {link.Name}
                  </NavLink>
                );
              })}
            </ul>

            <Link className="flex items-center justify-center cursor-pointer">
              <div class="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow text-blue transition-all duration-150 ease-in-out rounded-lg hover:pl-10 hover:pr-6 bg-grey group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <FaArrowRight />
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <FaArrowRight className="text-darkBlue" />
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-darkBlue">
                  Get in touch
                </span>
              </div>
            </Link>

            {/* mobile nav */}
            {/* <label class="flex flex-col gap-2 w-8">
              <input class="peer hidden" type="checkbox" />
              <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
              <div class="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
              <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
            </label> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;