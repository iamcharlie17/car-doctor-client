import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="lg:flex gap-4 items-center">
      <div className="lg:w-1/2 py-8 md:py-40 relative">
        <div
          style={{ backgroundImage: `url(${person})` }}
          className=" lg:w-3/4 h-[60vh] bg-cover border-2"
        ></div>
        <div
          style={{ backgroundImage: `url(${parts})` }}
          className="w-2/3 lg:w-1/2  bg-cover border-8 border-white rounded-lg absolute right-2 top-1/2 h-[40vh]"
        ></div>
      </div>
      <div className="lg:w-1/2 text-center lg:text-start space-y-4 px-8 lg:px-0 lg:pr-24 mt-14 md:mt-4 mb-10">
        <h1 className="font-semibold text-orange-600">About Us</h1>
        <h2 className="text-5xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <p>
          <small>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </small>
        </p>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </small>
        </p>
        <div className="">
          <button className="text-white bg-orange-600  px-5 py-3 rounded font-semibold ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
