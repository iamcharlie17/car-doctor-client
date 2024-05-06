import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

  return (
    <div className="border-2 p-4 rounded-lg space-y-2 m-2">
      <div
        className="h-64 bg-cover"
        style={{ backgroundImage: `url(${service.img})` }}
      ></div>
      <div>
        <h1 className="font-bold text-xl">{service.title}</h1>
      </div>
      <div className="text-orange-600 flex justify-between">
        <h1>Price: ${service.price}</h1>
        <Link to={`/service-details/${service._id}`}>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Service;
