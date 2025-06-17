import React from "react";
import { motion } from "framer-motion";
import languImg from "../../assets/languageimg.jpg";

const Hero = () => {
  return (
    <div
      className="relative py-24 px-6 overflow-hidden
      bg-white text-gray-800 dark:bg-black/40 dark:text-white"
    >
      {/* Animated radial gradient in light mode */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 3, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full
          bg-gradient-radial from-purple-300 via-pink-300 to-blue-300
          dark:hidden"
        style={{ transformOrigin: "bottom right" }}
      />

      {/* Dark mode overlay */}
      <div className="hidden dark:block absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Text */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="md:w-1/2 text-left"
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight
            text-gray-900 dark:text-white"
          >
            Empower Your Learning Journey <br />
            <span className="text-teal-600 dark:text-teal-300">
              with Expert Tutors
            </span>
          </h1>
          <p
            className="text-lg md:text-xl mb-6
            text-gray-700 dark:text-gray-300"
          >
            Join Globallearn to connect with passionate tutors, explore new
            languages, and gain cultural fluency—anytime, anywhere.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300">
             Get Started
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src={languImg}
            alt="Online Learning"
            className="rounded-xl  w-full max-w-[600px] dark:shadow-white/20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
