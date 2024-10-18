import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ecomContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CartPage = () => {
  const {
    cart,
    decreaseCart,
    IncreaseCart,
    deleteme,
    deleteCart,
    totalquantity,
    total,
    subtotal,
  } = useGlobalContext();
  cart;
  return (
    <>
      <Navbar />
      <div className="font-[sans-serif] bg-white py-[5rem] px-[5rem]">
        {cart.length === 0 ? (
          <div className="text-center py-[10rem] ">
            <h1 className="mb-4 text-[30px]">Cart is Empty</h1>
            <Link
              to="/"
              className="p-3 bg-[#2B38D1] rounded font-bold text-white"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* <h2 className="text-3xl font-extrabold text-[#333]">
              Shopping Cart
            </h2> */}
            <div className="overflow-x-auto">
              <table className="mt-12 w-full border-collapse divide-y">
                <thead className="whitespace-nowrap text-left">
                  <tr>
                    <th className="text-base text-gray-500 p-4">Description</th>

                    <th className="text-base text-gray-500 p-4">Quantity</th>
                    <th className="text-base text-gray-500 p-4">Remove</th>
                    <th className="text-base text-gray-500 p-4">Price</th>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap divide-y">
                  {cart.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td className="py-2 px-2">
                          <div className="flex items-center gap-6 w-max">
                            <div className="h-36 shrink-0">
                              <img
                                src={`https://umex.annenoaltd.com/public/productImages/${data.product.thumbnail}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <p className="text-lg font-bold text-[#333]">
                                {data.product.title.substring(0, 15)}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="py-2 px-2">
                          <div className="flex divide-x border w-max">
                            <button
                              type="button"
                              className="bg-gray-100 px-4 py-2 font-semibold"
                              onClick={() => {
                                if (data.quantity === 1) {
                                  deleteCart(data.id);
                                  return;
                                }
                                decreaseCart(data.id);
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
                              {data.quantity}
                            </button>
                            <button
                              type="button"
                              className="bg-gray-800 text-white px-4 py-2 font-semibold"
                              onClick={() => IncreaseCart(data.id)}
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
                          </div>
                        </td>
                        <td className="py-2 px-2">
                          <button
                            type="button"
                            className="bg-transparent border px-4 py-2 font-semibold"
                            onClick={() => deleteme(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 fill-red-500 inline cursor-pointer"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                        </td>
                        <td className="py-6 px-4">
                          <h4 className="text-lg font-bold text-[#333]">
                            ${data.product.price * data.quantity}
                          </h4>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className=" max-w-xl ml-auto mt-6">
              <ul className="text-[#333] divide-y">
                <li className="flex flex-wrap gap-4 text-md py-3">
                  Quantity{" "}
                  <span className="ml-auto font-bold">{totalquantity}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-md py-3">
                  Subtotal{" "}
                  <span className="ml-auto font-bold">${subtotal}</span>
                </li>

                <li className="flex flex-wrap gap-4 text-md py-3 font-bold">
                  Total <span className="ml-auto">${total}</span>
                </li>
              </ul>
              <button
                type="button"
                className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Check out
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
