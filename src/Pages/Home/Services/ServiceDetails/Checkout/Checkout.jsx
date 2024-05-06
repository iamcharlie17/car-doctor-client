import { useLoaderData } from "react-router-dom";
import detailsBanner from "../../../../../assets/images/banner/4.jpg";

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
        {/* banner section */}
      <div className="relative ">
        <img
          src={detailsBanner}
          className="h-[50vh] w-full rounded-lg -z-10 "
          alt=""
        />
        <div className="bg-gradient-to-br from-black to-transparent h-[50vh] w-full rounded-lg absolute bottom-0 z-10">
          <h1 className="text-white top-[20vh] left-20 font-semibold absolute text-4xl ">
            Check Out
          </h1>
          <div className="absolute w-full flex justify-center  bottom-0">
            <span className="text-white bg-orange-600 rounded-t-lg py-1 px-8">
              Home/Checkout
            </span>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* checkout form */}
      <form className="grid col-span-1 md:grid-cols-2 gap-8 bg-gray-200 rounded-lg px-2 py-8  md:p-8 lg:p-16 mt-24" >
        <input className="p-4 rounded-lg" type="text" name="firstName" placeholder="First Name" id="" />
        <input className="p-4 rounded-lg" type="text" name="lastName" placeholder="Last Name" id="" />
        <input className="p-4 rounded-lg" type="text" name="phone" placeholder="Your Phone" id="" />
        <input className="p-4 rounded-lg" type="email" name="email" placeholder="Your Email" id="" />
        <textarea className="p-4 rounded-lg md:col-span-2" name="message" id="" placeholder="Your Message" cols="30" rows="10"></textarea>
        <input className=" w-full py-4 rounded-lg md:col-span-2 text-white text-xl bg-orange-600" type="submit" value="Order Confirm" />
      </form>

    </div>
  );
};

export default Checkout;
