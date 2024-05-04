import LoginRegisterNav from "./LoginRegisterNav";
import loginImg from "../../assets/images/login/login.svg";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = {email, password}
        console.log(loginInfo)
        loginUser(email, password)
        .then(result => console.log(result.user))
        .catch(e => console.log(e.message))

        form.reset()
    }

  return (
    <div className="">
      <LoginRegisterNav />
      <div className="flex">
        <div className="mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="w-full max-w-md p-16 rounded-xl border-2 space-y-6">
            <h1 className="text-3xl font-semibold text-center">Login</h1>
            <form onSubmit={handleLogin}  className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-black">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-md border "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-black">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded-md border "
                />
              
              </div>
              <button className="block w-full p-3 text-center rounded-lg bg-orange-600 text-white">
                Login
              </button>
            </form>
            <div className="flex items-center space-x-1">
              <div className="flex-1 h-px sm:w-16 "></div>
              <p className="px-3 text-sm">OR Sign In with</p>
              <div className="flex-1  "></div>
            </div>
            <div className="flex text-xl justify-center space-x-4">
              <FaFacebook />
              <FaLinkedin />
              <FaGoogle />
            </div>
            <p className="text-xs text-center">
              Do not have an account?
              <Link to="/register"
                rel="noopener noreferrer"
                href="#"
                className="font-bold text-orange-600 "
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
