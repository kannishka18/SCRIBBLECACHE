import React from "react";
import service1 from "../assets/image7.jpg";   // Add your actual image files in assets
import service2 from "../assets/image5.jpg";
import service3 from "../assets/image6.jpg";

const Services = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <img
            src={service1}
            alt="Smart Writing Pad"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Writing Pad</h3>
          <p className="text-gray-600">
            Our digital writing pad allows children to write naturally using a stylus while capturing every stroke digitally in real-time.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <img
            src={service2}
            alt="Handwriting to Text"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Handwriting to Text</h3>
          <p className="text-gray-600">
            Our intelligent engine converts handwriting into editable, searchable digital text to support learning and accessibility.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <img
            src={service3}
            alt="Progress Tracking"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Progress & Feedback</h3>
          <p className="text-gray-600">
            Teachers and parents can track student progress and provide timely feedback through interactive performance insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
