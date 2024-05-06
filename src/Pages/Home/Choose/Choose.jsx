import person from "../../../assets/icons/person.svg";
import deliveryt from "../../../assets/icons/deliveryt.svg";
import check from "../../../assets/icons/check.svg";
import group from "../../../assets/icons/group.svg";
import Wrench from "../../../assets/icons/Wrench.svg";
import time from "../../../assets/icons/Group 32.png";

const Choose = () => {
  return (
    <div className="mt-8">
      <div className="text-center space-y-4 pb-16 m-2">
        <h1 className="font-semibold text-orange-600">Core Features</h1>
        <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
        <p>
          <small className="">
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.{" "}
          </small>
        </p>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 p-2">
        <div className="p-8 border-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-600  hover:text-white ">
          <img className="w-1/2" src={group} alt="" />
          <h1 className="font-bold text-center">Expert Team</h1>
        </div>
        <div className="p-8 border-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-600 hover:text-white">
          <img className="w-1/2" src={deliveryt} alt="" />
          <h1 className="font-bold text-center">Timely Delivery</h1>
        </div>
        <div className="p-8 border-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-600 hover:text-white">
          <img className="w-1/3" src={person} alt="" />
          <h1 className="font-bold text-center">24/7 Support</h1>
        </div>
        <div className="p-8 border-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-600 hover:text-white">
          <img className="w-2/5" src={Wrench} alt="" />
          <h1 className="font-bold text-center">Best Equipment</h1>
        </div>
        <div className="p-8 border-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-600 hover:text-white">
          <img className="w-1/3" src={check} alt="" />
          <h1 className="font-bold text-center">100% Guranty</h1>
        </div>
        <div className="p-8 border-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-600 hover:text-white">
          <img className="w-1/2" src={deliveryt} alt="" />
          <h1 className="font-bold text-center">Timely Delivery</h1>
        </div>
       
      </div>
    </div>
  );
};

export default Choose;
