import logo from "../../assets/logo.svg";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-20 p-10 bg-black text-white items-center">
      <aside>
        <img className="" src={logo} alt="" />
        <p className="">
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
        <div>
          <button className="bg-gray-700 p-2 rounded-full mx-1">
            <FaGoogle />
          </button>
          <button className="bg-gray-700 p-2 rounded-full mx-1">
            <FaTwitter />
          </button>
          <button className="bg-gray-700 p-2 rounded-full mx-1">
            <FaInstagram />
          </button>
          <button className="bg-gray-700 p-2 rounded-full mx-1">
            <FaLinkedin />
          </button>
        </div>
      </aside>
      <nav className="space-y-2">
        <h6 className="font-bold mb-4">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="space-y-2">
        <h6 className="font-bold mb-4">Company</h6>
        <a className="link link-hover">Why car doctor </a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">About us</a>
        
      </nav>
      <nav className="space-y-2">
        <h6 className="font-bold mb-4">Support</h6>
        <a className="link link-hover">Support center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
