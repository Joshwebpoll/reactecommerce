import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

import FetchLoading from "../Components/FetchLoading";
import { useGlobalContext } from "../context/ecomContext";

import Footer from "../Components/Footer";

const DetailPage = () => {
  const { handleCart } = useGlobalContext();
  const { singleproduct } = useParams();

  const [singleProduct, setSingleProduct] = useState("");
  const [singleloading, setSingleLoading] = useState(false);
  const [image, setImage] = useState("");

  const fetchSingleProduct = async () => {
    setSingleLoading(true);
    try {
      // Fetch user profile data
      const response = await axios.get(
        `https://umex.annenoaltd.com/api/singleproduct/${singleproduct}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
          },
        }
      );
      // (response.data.product);
      const pro = {
        ...response.data.product,
        images: JSON.parse(response.data.product.images),
      };

      setSingleProduct(pro);

      //  const imagesData = response.data.images.map((image) => ({
      //    ...image,
      //product.images: JSON.parse(response.data.product.images),
      //    image_paths: JSON.parse(image.image_paths),
      //  }));
      setImage(pro.images[0]);

      setSingleLoading(false);
    } catch (error) {
      // (error.response.data.message);
      setSingleLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);
  singleProduct;
  const handleChange = (image) => {
    setImage(image);
  };
  return (
    <>
      <Navbar />
      {singleloading ? (
        <div className="py-[10rem]">
          <FetchLoading />
        </div>
      ) : (
        <div className="bg-gray-100 dark:bg-gray-800 pt-[10rem] pb-10 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="flex flex-row  md:flex-col ps-4 gap-2">
                {singleProduct?.images?.map((image, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`https://umex.annenoaltd.com/public/productImages/${image}`}
                        alt="hee"
                        className="h-32 rounded-lg  dark:bg-gray-700 mb-4 object-cover"
                        onClick={() => handleChange(image)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover mix-blend-multiply"
                    src={`https://umex.annenoaltd.com/public/productImages/${image}`}
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {singleProduct.title}
                </h2>

                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">
                      Price:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      ${singleProduct?.price}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">
                      Availability:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      In Stock
                    </span>
                  </div>
                </div>
                {/* <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div> */}

                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {singleProduct?.description}
                  </p>
                  <div className="flex -mx-2 mt-8 mb-4">
                    {/* <div className="flex divide-x border w-max">
                    <button
                      type="button"
                      className="bg-gray-100 px-4 py-2 font-semibold"
                      onClick={() => {
                        if (singleProduct.quantity === 1) {
                          deleteCart(singleProduct.id);
                          return;
                        }
                        decreaseCart(singleProduct.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 124 124"
                      >
                        <path
                          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                    >
                      {singleProduct.quantity}
                    </button>
                    <button
                      type="button"
                      className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      onClick={() => IncreaseCart()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 42 42"
                      >
                        <path
                          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                  </div> */}
                    <div className="w-1/2 px-2">
                      <button
                        onClick={() =>
                          handleCart(singleProduct?.id, singleProduct?.quantity)
                        }
                        className="w-full bg-[#2B38D1] dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold  "
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DetailPage;
