import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";


const LoginRegisterNav = () => {
    const navLinks = (
        <>
          <NavLink className='font-semibold hover:border-[1.5px] rounded border-orange-500 px-4 py-1 hover:text-orange-500'>
            <li className="bg-white">
              Order
            </li>
          </NavLink>
          <NavLink className='font-semibold hover:border-[1.5px] rounded border-orange-500 px-4 py-1 hover:text-orange-500'>
            <li>
              Order Review
            </li>
          </NavLink>
          <NavLink className='font-semibold hover:border-[1.5px] rounded border-orange-500 px-4 py-1 hover:text-orange-500'>
            <li>
              Manage Inventory
            </li>
          </NavLink>
          <NavLink className='font-semibold hover:border-[1.5px] rounded border-orange-500 px-4 py-1 hover:text-orange-500'>
            <li>
              Login
            </li>
          </NavLink>
      
        </>
      );
    
      return (
        <div className="navbar py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div>
              <Link  to="/" >
                {" "}
                <img src={logo} className="w-14 md:w-full" alt="" />
              </Link>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
      );
};

export default LoginRegisterNav;