"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../assets/banner.jpg";
import banner2s from "../assets/banner2s.png";
import banner3 from "../assets/banner3.png";

import { Carousel } from "antd";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const onChange = (currentSlide) => {
    currentSlide;
  };
  return (
    <div className="pt-[10rem] ">
      <div>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundImage: `url(${banner})`,
              }}
              className="bg-gray-500"
            >
              <div className="  text-white ms-[3rem] md:ms-[10rem] pt-[10rem]">
                <h1 className="text-[25px] md:text-[40px] pb-2 font-bold">
                  Apple <br />
                  <span className="text-[#FFE603]">Top AirPord Pro</span>
                </h1>
                <p className="pb-6 font-semibold">Limited Time Offer</p>
                <Link
                  to="/shop"
                  className="px-10 py-3 bg-white rounded-full font-bold text-black hover:bg-[#2B38D1] hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${banner2s})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
              }}
              className="bg-gray-500"
            >
              <div className="  text-white ms-[3rem] md:ms-[10rem] pt-[10rem]">
                <h1 className="text-[25px] md:text-[40px] pb-2 font-bold">
                  Trending <br />
                  <span className="text-[#FFE603]">Your New Style</span>
                </h1>
                <p className="pb-6 font-semibold">Limited Time Offer</p>
                <Link
                  to="/shop"
                  className="px-10 py-3 bg-white rounded-full font-bold text-black hover:bg-[#2B38D1] hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${banner3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
              }}
              className="bg-gray-500"
            >
              <div className="  text-white ms-[3rem] md:ms-[10rem] pt-[10rem]">
                <h1 className="text-[25px] md:text-[40px] pb-2 font-bold">
                  CellPhone <br />
                  <span className="text-[#FFE603]">25MP Pro Camera</span>
                </h1>
                <p className="pb-6 font-semibold">
                  Perfect: Level Up Your Productivity
                </p>
                <Link
                  to="/shop"
                  className="px-10 py-3 bg-white rounded-full font-bold text-black hover:bg-[#2B38D1] hover:text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
