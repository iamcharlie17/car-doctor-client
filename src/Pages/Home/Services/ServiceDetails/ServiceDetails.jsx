import { Link, useLoaderData } from "react-router-dom";
import detailsBanner from "../../../../assets/images/banner/4.jpg";
import logo from "../../../../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa";
import { GoVideo } from "react-icons/go";

const ServiceDetails = () => {
  //   const [service, setService] = useState([]);
  //   const id = useParams();
  //   useEffect(() => {
  //     fetch(`http://localhost:3100/services/${id.id}`)
  //       .then((res) => res.json())
  //       .then((data) => setService(data));
  //   }, []);

  //   console.log(service[0]);

  //   const{img, title, price, description, facilty} = service[0]

  const service = useLoaderData();
//   console.log(service);

  const { img, price, description, facility, title, _id } = service[0];
  console.log(_id)

  return (
    <div className="min-h-screen mx-2 ">
      {/* details banner */}
      <div className="relative ">
        <img
          src={detailsBanner}
          className="h-[50vh] w-full rounded-lg -z-10 "
          alt=""
        />
        <div className="bg-gradient-to-br from-black to-transparent h-[50vh] w-full rounded-lg absolute bottom-0 z-10">
          <h1 className="text-white top-[20vh] left-20 font-semibold absolute text-4xl ">
            Service Details
          </h1>
          <div className="absolute w-full flex justify-center  bottom-0">
            <span className="text-white bg-orange-600 rounded-t-lg py-1 px-8">
              Home/Service Details
            </span>
          </div>
        </div>
      </div>
      {/* details section */}
      <div className="my-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <img className="w-full h-[50vh] rounded-lg" src={img} alt="" />
          </div>
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p>
            <small>{description}</small>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {facility.map((f, idx) => (
              <div
                className="bg-gray-200 p-8 rounded-lg border-t-4 border-orange-600 space-y-3"
                key={idx}
              >
                <h1 className="font-semibold">{f.name}</h1>
                <p>
                  <small>{f.details}</small>
                </p>
              </div>
            ))}
          </div>
          <p>
            <small>{description}</small>
          </p>
          {/* Steps section */}
          <div className="space-y-4 pt-8">
            <h1 className="font-semibold text-4xl">
              3 Simple Steps to Process
            </h1>
            <p>
              <small>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there is not anything embarrassing
                hidden in the middle of text
              </small>
            </p>
            <div className="grid grid-cols-3 gap-4">
              {/* step 01 */}
              <div className="border-2 rounded-lg text-center p-12 space-y-4">
                <div className="w-full flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-orange-600 bg-opacity-25 flex items-center justify-center">
                    <div className="h-20 w-20 flex justify-center items-center bg-orange-600 rounded-full">
                      <h1 className="text-white font-bold text-xl">01</h1>
                    </div>
                  </div>
                </div>
                <h1 className="font-semibold text-2xl">STEP ONE</h1>
                <h1>It uses a dictionary of over 200 .</h1>
              </div>
              {/* step 02 */}
              <div className="border-2 rounded-lg text-center p-12 space-y-4">
                <div className="w-full flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-orange-600 bg-opacity-25 flex items-center justify-center">
                    <div className="h-20 w-20 flex justify-center items-center bg-orange-600 rounded-full">
                      <h1 className="text-white font-bold text-xl">02</h1>
                    </div>
                  </div>
                </div>
                <h1 className="font-semibold text-2xl">STEP TWO</h1>
                <h1>It uses a dictionary of over 200 .</h1>
              </div>
              {/* step 03 */}
              <div className="border-2 rounded-lg text-center p-12 space-y-4">
                <div className="w-full flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-orange-600 bg-opacity-25 flex items-center justify-center">
                    <div className="h-20 w-20 flex justify-center items-center bg-orange-600 rounded-full">
                      <h1 className="text-white font-bold text-xl">03</h1>
                    </div>
                  </div>
                </div>
                <h1 className="font-semibold text-2xl">STEP THREE</h1>
                <h1>It uses a dictionary of over 200 .</h1>
              </div>
            </div>
          </div>
          {/* steps section */}

          <div className="pt-8 relative">
            <img className="w-full rounded-lg" src={img} alt="" />
            <div className="absolute top-1/2 w-full flex justify-center">
              <GoVideo className="text-orange-600" size={90} />
            </div>
          </div>
        </div>

        <div>
          {/* services section */}
          <div className="bg-gray-200 space-y-4 p-8 rounded-lg">
            <h1 className="text-2xl font-semibold">Services</h1>
            <div className="text-black hover:text-white bg-white hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center justify-between">
              <h1>Full Car Repair</h1>
              <FaArrowRight />
            </div>
            <div className="text-black hover:text-white bg-white hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center justify-between">
              <h1>Engine Repair</h1>
              <FaArrowRight />
            </div>
            <div className="text-black hover:text-white bg-white hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center justify-between">
              <h1>Automatic Services</h1>
              <FaArrowRight />
            </div>
            <div className="text-black hover:text-white bg-white hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center justify-between">
              <h1>Engine Oil Change</h1>
              <FaArrowRight />
            </div>
            <div className="text-black hover:text-white bg-white hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center justify-between">
              <h1>Battery Charge</h1>
              <FaArrowRight />
            </div>
          </div>

          {/* download section */}
          <div className="bg-black rounded-lg p-8 mt-8 space-y-4">
            <h1 className="text-white text-2xl font-semibold">Download</h1>
            <div className="flex justify-between">
              <div>
                <h1 className="text-white text-xl">Our Brochure</h1>
                <h2 className="text-gray-300">Download</h2>
              </div>
              <button className="p-4 rounded-lg text-white text-2xl bg-orange-600">
                <FaArrowRight />
              </button>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-white text-xl">Company Details</h1>
                <h2 className="text-gray-300">Download</h2>
              </div>
              <button className="p-4 rounded-lg text-white text-2xl bg-orange-600">
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* doctor help section */}
          <div className="bg-black rounded-lg p-8 pb-16 mt-8 space-y-4 text-center relative">
            <div className="w-full flex justify-center">
              <img className="w-1/2" src={logo} alt="" />
            </div>
            <h1 className="text-2xl font-semibold text-white">
              Need Help? We Are Here To Help You
            </h1>
            <div className="bg-white text-2xl font-semibold rounded-lg p-8 space-y-4 ">
              <h1 className="">
                <span className="text-orange-600">Car Doctor</span> Special
              </h1>
              <h2 className="text-xl text-gray-400 pb-8 ">
                Save up to <span className="text-orange-600">60% off</span>
              </h2>
            </div>
            <div className=" flex justify-center">
              <div className="bg-orange-600 w-2/3 mx-auto px-8 py-4 rounded-lg absolute bottom-12">
                <h1 className="text-2xl text-white font-semibold">
                  Get A Quote
                </h1>
              </div>
            </div>
          </div>

          {/* price section */}
          <div className="my-8 space-y-6">
            <h1 className="text-4xl font-bold">Price: ${price}</h1>
            <Link to={`/service/${_id}`}>
              <button className="text-2xl bg-orange-600 w-full text-white py-3 rounded-lg">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
