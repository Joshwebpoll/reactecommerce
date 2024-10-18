import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/ecomContext";
import Loading from "./Loading";

import { Link } from "react-router-dom";
import FetchLoading from "./FetchLoading";

export const Product = () => {
  const {
    cart,

    handleCart,
    cartloading,

    setLoadings,
    loadings,
    product,
    setProduct,
    cat,
  } = useGlobalContext();
  // const [cartloading, setCartLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoadings(true);
      try {
        // Fetch user profile data
        const response = await axios.get(
          "https://umex.annenoaltd.com/api/product",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
            },
          }
        );

        setProduct(response.data.product);
        setLoadings(false);
      } catch (error) {
        error.message;
        setLoadings(false);
      }
    };

    fetchProduct();
  }, []);

  const productexist = (productid) => {
    return cart.some((items) => items.productid === productid);
  };

  const filtercate =
    cat === "all" ? product : product.filter((data) => data.cat.name === cat);

  if (loadings) {
    return <FetchLoading />;
  }
  if (filtercate.length === 0) {
    return (
      <div className="text-center pb-[10rem]">
        <h1 className="text-2xl">No Product Available</h1>
      </div>
    );
  }
  return (
    <div className="pb-[5rem] px-[5rem] ">
      <h1 className="text-center text-[30px] py-5 mb-5">Featured Products</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {filtercate.map((data) => {
          return (
            <div key={data.id} className=" rounded-lg ">
              <div className="group relative block overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
                <Link to={`details/${data.id}`}>
                  <img
                    src={`https://umex.annenoaltd.com/public/productImages/${data.thumbnail}`}
                    alt=""
                    className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[15rem]"
                  />
                </Link>
                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap bg-[#2B38D1] text-white px-3 py-1.5 text-xs font-medium">
                    {" "}
                    New{" "}
                  </span>
                  <Link to={`details/${data.id}`}>
                    <h3 className="mt-4 text-lg text-[16px] text-gray-900">
                      {data.title.substring(0, 20)}
                    </h3>
                  </Link>
                  <p className="mt-1.5 text-sm text-gray-700 font-semibold">
                    ${data.price}
                  </p>

                  <button
                    disabled={productexist(data.id)}
                    onClick={() => handleCart(data.id, data.quantity)}
                    className={`block w-full uppercase rounded mt-4 bg-[#2B38D1] text-white p-2 text-sm  font-semibold transition hover:scale-105 ${
                      productexist(data.id) &&
                      "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                    }`}
                  >
                    {cartloading ? <Loading /> : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
