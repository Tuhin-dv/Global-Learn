import React from "react";
import { motion } from "framer-motion";
import languImg from '../../assets/languageimg.jpg'
const Hero = () => {
  return (
    <div className="bg-gradient-to-r  from-purple-100 via-pink-100 to-blue-100 py-24 px-6">
      <div className="max-w-7xl  px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Empower Your Learning Journey <br />
            <span className="text-purple-600">with Expert Tutors</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Join Globallearn to connect with passionate tutors, explore new languages, and gain cultural fluency—anytime, anywhere.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300">
            🚀 Get Started
          </button>
        </motion.div>

        {/* Right: Image / Illustration */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src={languImg}
            alt="Online Learning"
            className="  rounded-lg w-[600px]"
          />

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
