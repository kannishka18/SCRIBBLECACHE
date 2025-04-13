import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";


import centerImg from "../assets/child img.jpg";
import leftImg from "../assets/image2.png";
import rightImg from "../assets/image3.jpg";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />

      {/* Three side-by-side images */}
      <div className="flex justify-center items-center gap-6 my-10 flex-wrap">
        <img
          src={leftImg}
          alt="Child drawing on left"
          className="w-[300px] rounded-xl shadow-md"
        />
        <img
          src={centerImg}
          alt="Child writing in center"
          className="w-[400px] rounded-xl shadow-lg"
        />
        <img
          src={rightImg}
          alt="Child drawing on right"
          className="w-[300px] rounded-xl shadow-md"
        />
      </div>

      {/* Click Here button */}
      <Link
        to="/demo"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition mb-10"
      >
        Click Here to Try the Demo
      </Link>

      <Features />

      {/* ✅ Replace Testimonials with Portfolio */}
      
    </main>
  );
};

export default Home;
