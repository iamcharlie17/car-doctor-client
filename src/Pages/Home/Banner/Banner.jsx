import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full min-h-screen">
      <div
        style={{ backgroundImage: `url(${img1})` }}
        id="slide1"
        className="carousel-item bg-cover relative w-full "
      >
        <div className=" w-full bg-gradient-to-br from-black to-transparent flex flex-col justify-center">
          <div className="lg:w-1/2 p-4 md:p-16 space-y-6">
          <h1 className=" text-5xl text-center lg:text-start md:text-7xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-center lg:text-start">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 text-center lg:text-start">
            <button className="text-white bg-orange-600 px-5 py-3 rounded font-semibold">
              Discover More
            </button>
            <button className="text-white bg-transparent border-white border-[1.5px] px-5 py-3 font-semibold rounded">
              Latest Project
            </button>
          </div>
          </div>
        </div>

        <div className="absolute flex gap-4  transform -translate-y-1/2 bottom-[10vh] lg:bottom-[10vh] right-1/3 md:bottom-[20vh] md:right-3 lg:right-10">
          <a href="#slide4" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
            <FaArrowLeft size={25}/>
          </a>
          <a href="#slide2" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
           <FaArrowRight size={25} />
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${img2})` }}
        id="slide2"
        className="carousel-item bg-cover relative w-full"
      >
        <div className=" w-full bg-gradient-to-br from-black to-transparent flex flex-col justify-center">
          <div className="lg:w-1/2 p-4 md:p-16 space-y-6">
          <h1 className=" text-5xl text-center lg:text-start md:text-7xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-center lg:text-start">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 text-center lg:text-start">
            <button className="text-white bg-orange-600 px-5 py-3 rounded font-semibold">
              Discover More
            </button>
            <button className="text-white bg-transparent border-white border-[1.5px] px-5 py-3 font-semibold rounded">
              Latest Project
            </button>
          </div>
          </div>
        </div>
        <div className="absolute flex gap-4  transform -translate-y-1/2 bottom-[10vh] lg:bottom-[10vh] right-1/3 md:bottom-[20vh] md:right-3 lg:right-10">
          <a href="#slide1" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
            <FaArrowLeft size={25}/>
          </a>
          <a href="#slide3" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
           <FaArrowRight size={25} />
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${img3})` }}
        id="slide3"
        className="carousel-item bg-cover relative w-full"
      >
        <div className=" w-full bg-gradient-to-br from-black to-transparent flex flex-col justify-center">
          <div className="lg:w-1/2 p-4 md:p-16 space-y-6">
          <h1 className=" text-5xl text-center lg:text-start md:text-7xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-center lg:text-start">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 text-center lg:text-start">
            <button className="text-white bg-orange-600 px-5 py-3 rounded font-semibold">
              Discover More
            </button>
            <button className="text-white bg-transparent border-white border-[1.5px] px-5 py-3 font-semibold rounded">
              Latest Project
            </button>
          </div>
          </div>
        </div>
        <div className="absolute flex gap-4  transform -translate-y-1/2 bottom-[10vh] lg:bottom-[10vh] right-1/3 md:bottom-[20vh] md:right-3 lg:right-10">
          <a href="#slide2" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
            <FaArrowLeft size={25}/>
          </a>
          <a href="#slide4" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
           <FaArrowRight size={25} />
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${img4})` }}
        id="slide4"
        className="carousel-item bg-cover relative w-full"
      >
        <div className=" w-full bg-gradient-to-br from-black to-transparent flex flex-col justify-center">
          <div className="lg:w-1/2 p-4 md:p-16 space-y-6">
          <h1 className=" text-5xl text-center lg:text-start md:text-7xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-center lg:text-start">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 text-center lg:text-start">
            <button className="text-white bg-orange-600 px-5 py-3 rounded font-semibold">
              Discover More
            </button>
            <button className="text-white bg-transparent border-white border-[1.5px] px-5 py-3 font-semibold rounded">
              Latest Project
            </button>
          </div>
          </div>
        </div>
        <div className="absolute flex gap-4  transform -translate-y-1/2 bottom-[10vh] lg:bottom-[10vh] right-1/3 md:bottom-[20vh] md:right-3 lg:right-10">
          <a href="#slide3" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
            <FaArrowLeft size={25}/>
          </a>
          <a href="#slide5" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
           <FaArrowRight size={25} />
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${img5})` }}
        id="slide5"
        className="carousel-item bg-cover relative w-full"
      >
        <div className=" w-full bg-gradient-to-br from-black to-transparent flex flex-col justify-center">
          <div className="lg:w-1/2 p-4 md:p-16 space-y-6">
          <h1 className=" text-5xl text-center lg:text-start md:text-7xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-center lg:text-start">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 text-center lg:text-start">
            <button className="text-white bg-orange-600 px-5 py-3 rounded font-semibold">
              Discover More
            </button>
            <button className="text-white bg-transparent border-white border-[1.5px] px-5 py-3 font-semibold rounded">
              Latest Project
            </button>
          </div>
          </div>
        </div>
        <div className="absolute flex gap-4  transform -translate-y-1/2 bottom-[10vh] lg:bottom-[10vh] right-1/3 md:bottom-[20vh] md:right-3 lg:right-10">
          <a href="#slide4" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
            <FaArrowLeft size={25}/>
          </a>
          <a href="#slide6" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
           <FaArrowRight size={25} />
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${img6})` }}
        id="slide6"
        className="carousel-item bg-cover relative w-full"
      >
        <div className=" w-full bg-gradient-to-br from-black to-transparent flex flex-col justify-center">
          <div className="lg:w-1/2 p-4 md:p-16 space-y-6">
          <h1 className=" text-5xl text-center lg:text-start md:text-7xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-center lg:text-start">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 text-center lg:text-start">
            <button className="text-white bg-orange-600 px-5 py-3 rounded font-semibold">
              Discover More
            </button>
            <button className="text-white bg-transparent border-white border-[1.5px] px-5 py-3 font-semibold rounded">
              Latest Project
            </button>
          </div>
          </div>
        </div>
        <div className="absolute flex gap-4  transform -translate-y-1/2 bottom-[10vh] lg:bottom-[10vh] right-1/3 md:bottom-[20vh] md:right-3 lg:right-10">
          <a href="#slide5" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
            <FaArrowLeft size={25}/>
          </a>
          <a href="#slide1" className="btn btn-circle w-16 h-16 text-white bg-gray-600 border-none hover:bg-orange-600 opacity-80">
           <FaArrowRight size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
