import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("products.json").then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="mb-8">
      <div className="text-center space-y-4 pb-16 m-2">
        <h1 className="font-semibold text-orange-600">Popular Products</h1>
        <h2 className="text-4xl md:text-5xl font-bold">Browse Our Products</h2>
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
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="text-center my-4">
        <Link>
          <button className="text-orange-500 font-semibold border-[1.5px] border-orange-500 rounded px-5 py-2">
            More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
