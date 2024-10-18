import { FaShoppingCart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import { useGlobalContext } from "../context/ecomContext";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, users, setLogin, handleSearch, search } = useGlobalContext();
  const [navbar, setNavbar] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://umex.annenoaltd.com/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
          },
        }
      );

      toast.success(response.data.message);
      localStorage.removeItem("token");
      localStorage.removeItem("islogin");
      setLogin(false);
      // window.localStorage.removeItem("islogin");
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <nav className="w-full bg-white ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-10 py-3 fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <p className="text-[30px] font-bold m-0 p-0 space-0">
                UME<span className="text-[#1A30AF]">NEX</span>
              </p>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black font-medium hover:text-red-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black font-medium hover:text-red-600">
                <Link to="/shop">Shop</Link>
              </li>

              <div>
                <input
                  type="text"
                  className="p-2 bg-slate-100 outline-none rounded-full px-4 hidden  md:block"
                  placeholder="Search here"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <div className="flex align-items-center items-center  gap-2">
                <span>
                  <FaUserLarge />
                </span>
                {users ? (
                  <h2>
                    Welcome{" "}
                    <span className="text-[#1A30AF] font-bold capitalize ms-2">
                      {users.name}
                    </span>
                  </h2>
                ) : (
                  <Link to="/login">
                    <span className="font-medium">
                      Login <span className="text-[#1A30AF] ">Account</span>
                    </span>
                  </Link>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <Link to="/cart">
                  <FaShoppingCart color="black" size={23} />
                  <span className="bg-red-600 w-6 h-6 text-center rounded-full text-white cart">
                    {cart.length}
                  </span>
                </Link>
              </div>

              {users && (
                <button
                  onClick={() => handleLogout()}
                  type="submit"
                  className="text-white bg-[#1A30AF] font-semibold p-2 rounded-md"
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
