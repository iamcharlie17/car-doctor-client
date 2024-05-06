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
      
    </div>
  );
};

export default Checkout;
