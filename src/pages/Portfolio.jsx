// Placeholder content for Contact.jsx
// ✅ File: Portfolio.jsx

import React from "react";

const Portfolio = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Project Portfolio</h2>
      <p className="text-gray-600 max-w-2xl mb-10 text-lg">
        ScribbleSync is a smart writing pad system crafted to help individuals with learning disabilities. 
        It converts handwritten content into digital text in real time, making learning easier, smoother, and more accessible.
      </p>

      <div className="w-full max-w-3xl mb-12">
        <img
          src="https://img.freepik.com/free-vector/handwriting-concept-illustration_114360-4885.jpg"
          alt="ScribbleSync Project Illustration"
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Real-Time Handwriting Capture</h3>
          <p className="text-gray-700">Write on a graphic tablet and see the text appear instantly.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Text Conversion & Storage</h3>
          <p className="text-gray-700">Convert your writing into digital format and save it for future use.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Built for Accessibility</h3>
          <p className="text-gray-700">Designed with features that aid children with learning difficulties.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;