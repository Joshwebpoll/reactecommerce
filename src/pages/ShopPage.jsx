import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/ecomContext";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import FilterbyCategory from "../Components/FilterbyCategory";
import axios from "axios";
import FetchLoading from "../Components/FetchLoading";

const ShopPage = () => {
  const { search } = useGlobalContext();
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, selectedCategory] = useState("lowest");
  const [priceSort, setPriceSort] = useState("");
  const [loading, setLoading] = useState(false);
  search;

  console.log(priceSort);
  const fetchProducts = async () => {
    setLoading(true);
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
      setFilteredProducts(response.data.product);
      setLoading(false);
    } catch (error) {
      error.message;
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategory = (e) => {
    const cat = e.target.value;
    selectedCategory(cat);
    // filtered(cat, priceSort);
  };
  const handlePrice = (e) => {
    const price = e.target.value;
    setPriceSort(price);
  };

  const filterseach = filteredProducts.filter((data) => {
    return data?.title?.toLowerCase().includes(search?.toLowerCase());
  });
  filterseach;

  //   let filtered = product;

  //   if (category) {
  //     filtered = filtered.filter((data) => data.cat.name === category);
  //   }
  //   // filtered =
  //   //   category === "all"
  //   //     ? product
  //   //     : (filtered = product.filter((data) => data.cat.name === category));

  //   // filtered = filtered.sort((a, b) => {
  //   //   if (price === "lowToHigh") {
  //   //     return a.price - b.price;
  //   //   } else {
  //   //     return b.price - a.price;
  //   //   }
  //   // });
  //   return filtered;
  // };
  useEffect(() => {
    let filtered = product;
    if (search) {
      filtered = filterseach;
    }
    if (category) {
      filtered.filter((data) => data.cat.name === category);
    }
    filtered = filtered.sort((a, b) => {
      if (priceSort === "lowest") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(filtered);
  }, [category, priceSort, search]);

  return (
    <section>
      <Navbar />
      {loading ? (
        <div className="py-[20rem]">
          <FetchLoading />
        </div>
      ) : (
        <div className="py-[10rem] px-[5rem]">
          <FilterbyCategory
            selectedCategory={selectedCategory}
            setPriceSort={setPriceSort}
            handleCategory={handleCategory}
            handlePrice={handlePrice}
            category={category}
            priceSort={priceSort}
          />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 ">
            {filteredProducts.length === 0 ? (
              <h1 className="text-center text-3xl">No Match Found</h1>
            ) : (
              filteredProducts.map((item) => {
                return (
                  <Link to={`/details/${item.id}`} key={item.id}>
                    <div className="mx-auto mt-11  transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        className="h-48 w-full object-cover object-center"
                        src={`https://umex.annenoaltd.com/public/productImages/${item.thumbnail}`}
                        alt="Product Image"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                          {item.title.substring(0, 15)}
                        </h2>
                        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                          Product description goes here.
                        </p>
                        <div className="flex items-center">
                          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                            ${item.price}
                          </p>

                          <p className="ml-auto text-base font-medium text-green-500">
                            20% off
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default ShopPage;
