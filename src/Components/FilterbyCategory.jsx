import React from "react";
import { categorys, price } from "../data";

const FilterbyCategory = ({
  handleCategory,
  handlePrice,
  category,
  priceSort,
}) => {
  //     const handleCategory=(e)=>{
  //  cat =
  //     }
  return (
    <div>
      <div className="flex gap-4 items-center flex-wrap">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Category
          </label>
          <select
            id="countries"
            value={category}
            onChange={handleCategory}
            className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {categorys.map((data, index) => {
              return (
                <option key={index} value={data} className="capitalize">
                  {data}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sort by Price
          </label>
          <select
            id="countries"
            value={priceSort}
            onChange={handlePrice}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {price.map((price, index) => {
              return (
                <option key={index} value={price.name}>
                  {price.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterbyCategory;
