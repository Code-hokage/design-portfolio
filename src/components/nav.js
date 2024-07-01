import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-6 px-16 shadow-shadowButtom">
        <div className="basis-3/5">
          <span>
            <Link to='/'>ADDY</Link>
            {/* <img src="/mylogo.png" alt="mylogo" className="h-14 w-16"/> */}
          </span>
        </div>
        <div className="basis-2/5 flex justify-between">
          <div className="flex justify-center items-center *:px-4">
            <span className="">
              <Link to="/" className="hover:text-blue">Home</Link>
            </span>
            <span>
              <Link to="designs" className="hover:text-blue">Designs</Link>
            </span>
          </div>
          <div>Available</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
