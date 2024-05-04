import { Outlet } from "react-router-dom";
import LoginRegisterNav from "../Pages/LoginRegister/LoginRegisterNav";


const LoginRegisterLayout = () => {
    return (
        <div>
            <LoginRegisterNav/>
            <Outlet/>
        </div>
    );
};

export default LoginRegisterLayout;