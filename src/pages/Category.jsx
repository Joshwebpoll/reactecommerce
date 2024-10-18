import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Components/Navbar";

const Category = () => {
  const [name, setName] = useState("");
  const [image, setimage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };
  name, image;

  const handleCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Fetch user profile data
      const response = await axios.post(
        "https://umex.annenoaltd.com/api/category",
        { name, image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
          },
        }
      );
      response.data;
      setName("");
      setimage(null);
      document.getElementById("file-upload").value = "";
      setLoading(false);
    } catch (error) {
      console.error(error.response.data.message);
      setLoading(false);
    }
  };
  data;
  useEffect(() => {
    const category = async () => {
      setLoadings(true);
      try {
        // Fetch user profile data
        const response = await axios.get(
          "https://umex.annenoaltd.com/api/product",

          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
            },
          }
        );

        const imagesData = response.data.product.map((data) => ({
          ...data,
          images: JSON.parse(data.images),
        }));
        setData(imagesData);
        setLoadings(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    category();
  }, []);

  return (
    <div className="mx-auto block max-w-sm rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
      <form onSubmit={handleCategory}>
        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            type="catename"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail2"
            placeholder="Enter email"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
            Category
          </label>
        </div>

        <div className="mb-3">
          <label className="mb-2 inline-block text-neutral-500 dark:text-neutral-400">
            Default file input example
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
            type="file"
            id="file-upload"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="inline-block w-full font-semibold rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-blue-700"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      {/* C:\xampp\htdocs\LaravelTutor\public\storage\images\1711790961_turbo.png */}
      {/* C:\xampp\htdocs\LaravelTutor\public\storage\images */}
      <div>
        {loadings ? (
          <h1 className="text-black">Loading...</h1>
        ) : (
          data.map((data) => {
            return (
              <div key={data.id}>
                <h1>{data.title}</h1>
                <h1>{data.cat.name}</h1>
                <h1>
                  {" "}
                  <img
                    src={`https://umex.annenoaltd.com/productImages/${data.thumbnail}`}
                  />
                </h1>
                <div className="flex ">
                  {data.images.map((data, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={`https://umex.annenoaltd.com/productImages/${data}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Category;
