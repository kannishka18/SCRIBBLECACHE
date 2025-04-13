
import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const Contact = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen flex flex-col items-center text-center">
      {/* Header Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl w-full mb-16">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">We'd Love to Hear from You!</h2>
          <p className="text-gray-600 text-lg">
            Whether you're curious about features, need support, or just want to say hello — we're here to help.
            Drop us a message or reach out using the info below.
          </p>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <img
            src="https://www.ixactcontact.com/wp-content/uploads/2020/04/imageblogapril172020.jpg"
            alt="Contact Us Illustration"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* 💫 Marquee Text */}
      <div className="overflow-hidden w-full mb-12">
        <div className="whitespace-nowrap animate-marquee text-blue-600 text-lg font-semibold">
          📞 Reach out anytime — We're here to support you! ✉ Let's connect and make learning accessible for everyone 🌟 &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition duration-300">
          <FiPhone className="text-blue-500 text-5xl mb-4 mx-auto hover:animate-bounce" />
          <p className="text-lg text-gray-700 font-medium">+1 (123) 456-7890</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition duration-300">
          <FiMail className="text-blue-500 text-5xl mb-4 mx-auto hover:animate-pulse" />
          <p className="text-lg text-gray-700 font-medium">contact@scribblesync.com</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition duration-300">
          <FiMapPin className="text-blue-500 text-5xl mb-4 mx-auto hover:animate-bounce" />
          <p className="text-lg text-gray-700 font-medium">
            123 Creative Street,<br />
            Imagination City, IN 45678
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;