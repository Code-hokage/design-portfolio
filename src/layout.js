// import Footer from "./components/footer";
import Navbar from "./components/nav";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return ( 
        <>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
        </>
     );
}
 
export default SharedLayout;