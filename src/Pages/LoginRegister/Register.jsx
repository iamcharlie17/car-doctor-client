import LoginRegisterNav from "./LoginRegisterNav";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import Tilt from "react-parallax-tilt";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerInfo = { name, email, password };
    console.log(registerInfo);
    registerUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));

    form.reset();
  };

  return (
    <div className="">
      <LoginRegisterNav />
      <div className="flex">
        <div className="mx-auto flex flex-col md:flex-row  md:gap-16 items-center">
          <div className="w-1/2">
            <Tilt scale={1.5} transitionSpeed={2000} >
              <img src={loginImg} alt="" />
            </Tilt>
          </div>
          <div className="w-full max-w-md md:p-16 p-8 rounded-xl md:border-2 space-y-6">
            <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md border "
                />
              </div>
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
                Sign Up
              </button>
            </form>

            <p className="text-xs text-center">
              Already have an account?
              <Link
                to="/login"
                rel="noopener noreferrer"
                href="#"
                className="font-bold text-orange-600 "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
