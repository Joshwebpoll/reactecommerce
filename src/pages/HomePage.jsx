import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import { Product } from "../Components/Product";
import { HeroSection } from "../Components/HeroSection";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const HomePage = () => {
  localStorage.getItem("token");

  return (
    <>
      <HeroSection />
      <Navbar />
      <Category />
      <Product />
      <Footer />
    </>
  );
};

export default HomePage;
