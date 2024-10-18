import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

import Category from "./pages/Category";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import ShopPage from "./pages/ShopPage";

import { useGlobalContext } from "./context/ecomContext";
import CarouselPage from "./pages/CarouselPage";

function App() {
  const token = window.localStorage.getItem("token");
  const { users } = useGlobalContext();
  token;
  users;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!token ? <Login /> : <HomePage />} />
        </Routes>
        <Routes>
          <Route
            path="/register"
            element={token ? <HomePage /> : <Register />}
          />
        </Routes>
        <Routes>
          <Route path="/login" element={token ? <HomePage /> : <Login />} />
        </Routes>
        <Routes>
          <Route path="/category" element={!token ? <Login /> : <Category />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={!token ? <Login /> : <CartPage />} />
        </Routes>
        <Routes>
          <Route
            path="/details/:singleproduct"
            element={!token ? <Login /> : <DetailPage />}
          />
        </Routes>
        <Routes>
          <Route path="/shop" element={!token ? <Login /> : <ShopPage />} />
        </Routes>
        <Routes>
          <Route path="/carousel" element={<CarouselPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
