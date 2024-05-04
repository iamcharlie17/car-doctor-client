import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        axios.get('services.json')
        .then(data => setServices(data.data))
    },[])

    console.log(services)
    

  return (
    <div className="mb-8">
      <div className="text-center space-y-4 pb-16 m-2">
        <h1 className="font-semibold text-orange-600">Service</h1>
        <h2 className="text-4xl md:text-5xl font-bold">Our Service Area</h2>
        <p>
          <small className="">
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.{" "}
          </small>
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            services.map(service => <Service service={service} key={service._id}/>)
        }
      </div>
    </div>
  );
};

export default Services;
