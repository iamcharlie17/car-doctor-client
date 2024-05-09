import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3100/services", {withCredentials: true}).then((data) => setServices(data.data));
  }, []);

  // console.log(services);

  return (
    <div className="mb-8">
      <div className="text-center space-y-4 pb-16 m-2">
        <h1 className="font-semibold text-orange-600">Service</h1>
        <h2 className="text-4xl md:text-5xl font-bold">Our Service Area</h2>
        <p>
          <small className="">
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.{" "}
          </small>
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
      <div className="text-center my-4">
        <Link>
          <button className="text-orange-500 font-semibold border-[1.5px] border-orange-500 rounded px-5 py-2">
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
