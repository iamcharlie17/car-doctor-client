import { GoClockFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  return (
    <div className="bg-black grid md:grid-cols-2 gap-4 lg:grid-cols-3 md:p-16 p-12 rounded-lg my-8">
      <div className="flex items-center gap-4 text-white">
        <div className="relative">
          <GoClockFill className="absolute text-orange-600 -bottom-1 left-3" />
          <SlCalender size={25} />
        </div>
        <div>
          <h1>We are open monday-friday</h1>
          <h1 className="text-2xl">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <div className="relative">
          <BiSolidMessageRoundedDots size={25} className="absolute text-orange-600 bottom-2 left-3" />
          <IoCall size={30} />
        </div>
        <div>
          <h1>Have a question?</h1>
          <h1 className="text-2xl">+2546 251 2658</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <div className="relative">
          <FaLocationDot size={35} className=" text-orange-600 -bottom-1 left-3" />
          {/* < size={25} /> */}
        </div>
        <div>
          <h1>Need a repair? our address</h1>
          <h1 className="text-2xl">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Location;
