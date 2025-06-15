import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-20 px-6">
      <div>
        <div className=" text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Empower Your Learning Journey with <br />
            <span className="text-purple-600">Expert Tutors</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join Globallearn today to connect with passionate language tutors, explore diverse cultures, and unlock new opportunities through personalized learning.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300">
            🚀 Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
