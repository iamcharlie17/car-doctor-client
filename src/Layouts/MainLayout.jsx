import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;