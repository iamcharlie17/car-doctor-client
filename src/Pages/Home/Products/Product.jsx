import { IoStarSharp } from "react-icons/io5";

const Product = ({ product }) => {
  const { id, name, image, price } = product;
  console.log(image);
  return (
    <div className="border-2 p-4 rounded-lg space-y-2 m-2">
      <div
        className="h-64 bg-gray-200 rounded-lg flex m-4 justify-center items-center"
        // style={{ backgroundImage: `url(${image})` }}
      >
        <img src={image} className="w-1/2 " alt="" />
      </div>
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="flex">
            <IoStarSharp className="text-orange-600 text-xl" />
            <IoStarSharp className="text-orange-600 text-xl" />
            <IoStarSharp className="text-orange-600 text-xl" />
            <IoStarSharp className="text-orange-600 text-xl" />
            <IoStarSharp className="text-orange-600 text-xl" />
          </div>
        </div>
        <h1 className="font-bold text-xl">{name}</h1>
        <h1 className="text-orange-600 font-semibold">Price: ${price}</h1>
      </div>
    </div>
  );
};

export default Product;
