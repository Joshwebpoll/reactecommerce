import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ecomCreatContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartloading, setCartLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const [cat, selectedCat] = useState("all");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleCart = async (productid, quantity) => {
    if (!users) {
      toast.error("Please Login to Add to Cart");
    } else {
      setCartLoading(true);

      try {
        const response = await axios.post(
          "https://umex.annenoaltd.com/api/cart",
          { productid, quantity },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
            },
          }
        );

        if (response.data.status === 201) {
          toast.error(response.data.message);
          return;
        }

        setCartLoading(false);
        toast.success(response.data.message);
        fetchCart();
      } catch (error) {
        toast.error(error.response.data.message);
        setCartLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile data
        const response = await axios.get(
          "https://umex.annenoaltd.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
            },
          }
        );

        setUsers(response.data.user);
      } catch (error) {
        error.response.data.message;
      }
    };

    fetchProfile();
  }, []);

  const fetchCart = async () => {
    try {
      // Fetch user profile data

      const response = await axios.get(
        "https://umex.annenoaltd.com/api/getcart",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
          },
        }
      );
      response.data.cart;
      setCart(response.data.cart);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);
  search;
  // Increase cart and decreaseCart

  const decreaseCart = (cartid) => {
    // const items = cart.filter((data)=>data.id !==0)
    setCart(
      cart.map((data) => {
        if (data.id === cartid) {
          return { ...data, quantity: data.quantity - 1 };
        }
        return data;
      })
    );

    updateCart(cartid, "decrease");
  };
  const IncreaseCart = (cartid) => {
    setCart(
      cart.map((data) => {
        if (data.id === cartid) {
          return { ...data, quantity: data.quantity + 1 };
        }
        return data;
      })
    );
    updateCart(cartid, "increase");
  };

  const updateCart = async (cartid, scope) => {
    try {
      const response = await axios.put(
        ` https://umex.annenoaltd.com/api/update/${cartid}/${scope}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
          },
        }
      );

      // setCartLoading(false);
    } catch (error) {
      error.response.data.message;
    }
  };

  const deleteme = (deleteid) => {
    setCart(
      cart.filter((data) => {
        return data.id !== deleteid;
      })
    );
    deleteCart(deleteid);
  };

  const deleteCart = async (deleteid) => {
    try {
      // Fetch user profile data

      const response = await axios.delete(
        `https://umex.annenoaltd.com/api/deletecart/${deleteid}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fetch token from local storage
          },
        }
      );
      response.data;
      toast.success("Produuct deleted successfully");
      fetchCart();
    } catch (error) {
      error.response.data.message;
    }
  };

  const { totalquantity, total, subtotal } = cart.reduce(
    (acc, cum) => {
      acc.total += Number(cum.product.price) * Number(cum.quantity);
      acc.totalquantity += cum.quantity;
      acc.subtotal += Number(cum.product.price);
      return acc;
    },
    { totalquantity: 0, total: 0, subtotal: 0 }
  );

  return (
    <ecomCreatContext.Provider
      value={{
        users,
        setUsers,
        login,
        setLogin,
        cart,
        setQuantity,
        quantity,
        setCart,
        decreaseCart,
        IncreaseCart,
        deleteCart,
        deleteme,
        handleCart,
        setLoadings,
        totalquantity,
        total,
        subtotal,
        loadings,
        cartloading,
        selectedCat,
        cat,
        product,
        setProduct,
        setSearch,
        search,
        handleSearch,
      }}
    >
      {children}
    </ecomCreatContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ecomCreatContext);
};
