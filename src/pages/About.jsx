import React from "react";
import aboutImg from "../assets/image4.jpg"; // Add your image to /assets and adjust name if needed

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-10 bg-gray-50 min-h-screen">
      
      {/* Left: Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={aboutImg}
          alt="About ScribbleSync"
          className="rounded-2xl shadow-lg w-80 md:w-[400px]"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 w-full text-left">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">About ScribbleSync</h1>
        <p className="text-lg font-serif tracking-wide leading-relaxed text-gray-700">
          ScribbleSync is an innovative assistive writing tool designed for children with learning disabilities. 
          Our platform helps bridge the gap between traditional handwriting and digital learning by offering 
          a smart writing pad system that converts handwriting into editable text in real-time.
          <br /><br />
          With a focus on accessibility, engagement, and seamless integration, ScribbleSync empowers 
          learners to express themselves confidently and educators to monitor progress effectively.
        </p>
      </div>
    </div>
  );
};

export default About;
