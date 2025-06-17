import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/headers/Hero';
import { FaLanguage, FaUserGraduate, FaUserAlt } from 'react-icons/fa';
import { HiArrowRightCircle } from "react-icons/hi2";
import TopRatedTutors from '../components/TopRatedTutors';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import Testimonial from '../components/testimonials';

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/tutorials')
      .then((res) => res.json())
      .then((data) => setTutorials(data))

    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  const handleLanguageClick = (id) => {
    navigate(`/language/${id}`);
  };

  // Get unique languages with one tutorial each (limit to 9)
  const uniqueLanguagesMap = new Map();
  tutorials.forEach((tutorial) => {
    if (!uniqueLanguagesMap.has(tutorial.language)) {
      uniqueLanguagesMap.set(tutorial.language, tutorial);
    }
  });

  const uniqueTutorials = Array.from(uniqueLanguagesMap.values()).slice(0, 9);

  return (
    <div className="bg-white dark:bg-black/20 text-white transition-colors duration-300">
      <Hero />

     {/* Stats Cards */}
<div className="max-w-7xl mx-auto px-4 pt-16 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  <div className=" bg-teal-100 hover:bg-teal-200 dark:bg-white/10 text-black dark:text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center  dark:hover:bg-white/20 transition">
    <FaUserGraduate size={40} className="text-yellow-500 mb-3" />
    <h3 className="text-2xl font-bold">{tutorials.length}</h3>
    <p className="text-lg font-semibold text-black dark:text-gray-300">Total Tutors</p>
  </div>

  <div className=" bg-teal-100 hover:bg-teal-200 dark:bg-white/10 text-black dark:text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center  dark:hover:bg-white/20 transition">
    <FaLanguage size={40} className="text-green-500 mb-3" />
    <h3 className="text-2xl font-bold">{uniqueTutorials.length}</h3>
    <p className="text-lg font-semibold text-black dark:text-gray-300">Languages Offered</p>
  </div>

  <div className=" bg-teal-100 hover:bg-teal-200 dark:bg-white/10 text-black dark:text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center  dark:hover:bg-white/20 transition">
    <FaUserAlt size={40} className="text-blue-500 mb-3" />
    <h3 className="text-2xl font-bold">{users.length}</h3>
    <p className="text-lg font-semibold text-black dark:text-gray-300">Registered Users</p>
  </div>
</div>

      {/* Languages Section */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-16">
      {/* Enhanced Header */}
      <div className="text-center mb-12">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 tracking-tight">
          Top Languages
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our most popular languages.
        </p>
      </div>

      {/* Enhanced Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {uniqueTutorials.map((tutorial) => (
          <div
            key={tutorial._id}
            onClick={() => handleLanguageClick(tutorial._id)}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 rounded-2xl cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                {/* Enhanced Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaLanguage size={20} className="text-white" />
                </div>

                {/* Enhanced Language Title */}
                <h3 className="text-xl text-black dark:text-white text-center font-bold tracking-wide group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 flex-1 mx-4">
                  {tutorial.language}
                </h3>

                {/* Enhanced Arrow */}
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-all duration-300">
                  <HiArrowRightCircle
                    size={24}
                    className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="mt-4 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Animated Bottom Border */}
            <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </div>

      <WhyChooseUsSection />
      <TopRatedTutors />
      <Testimonial />
    </div>
  );
};

export default Home;
