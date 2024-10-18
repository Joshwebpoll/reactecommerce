import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/ecomContext";

const Category = () => {
  const { selectedCat, cat } = useGlobalContext();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile data
        const response = await axios.get(
          "https://umex.annenoaltd.com/api/category",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
            },
          }
        );

        setCategory(response.data.category);
      } catch (error) {
        error.response.data.message;
      }
    };

    fetchProfile();
  }, []);
  const handlecate = (cat) => {
    selectedCat(cat);
  };
  return (
    <ul className="flex gap-3 my-8 md:my-12 flex-wrap justify-center  px-4 md:px-8 ">
      {category.map((items) => {
        return (
          <li
            key={items.id}
            className={`px-2 py-1 md:text-lg relative  rounded-lg select-none hover:shadow hover:shadow-teal-500  text-center ${
              cat === items.name ? "bg-[#1A30AF] text-white" : ""
            } `}
          >
            <button
              onClick={() => handlecate(items.name)}
              className=" cursor-pointer capitalize rounded-full"
            >
              {items.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
