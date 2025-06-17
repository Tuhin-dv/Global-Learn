import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/headers/Hero';
import { FaLanguage, FaUserGraduate, FaUserAlt } from 'react-icons/fa';
import { HiArrowRightCircle } from "react-icons/hi2";
import TopRatedTutors from '../components/TopRatedTutors';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

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
    <div className="text-white">
      <Hero />

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white/10 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-white/20 transition">
          <FaUserGraduate size={40} className="text-yellow-300 mb-3" />
          <h3 className="text-2xl font-bold">{tutorials.length}</h3>
          <p className="text-lg text-gray-300">Total Tutors</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-white/20 transition">
          <FaLanguage size={40} className="text-green-300 mb-3" />
          <h3 className="text-2xl font-bold">{uniqueTutorials.length}</h3>
          <p className="text-lg text-gray-300">Languages Offered</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-white/20 transition">
          <FaUserAlt size={40} className="text-blue-300 mb-3" />
          <h3 className="text-2xl font-bold">{users.length}</h3>
          <p className="text-lg text-gray-300">Registered Users</p>
        </div>
      </div>

      {/* Languages Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Top Languages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniqueTutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              onClick={() => handleLanguageClick(tutorial._id)}
              className="border border-white rounded-lg cursor-pointer hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between px-8 py-4">
                <FaLanguage size={25} />
                <h3 className="text-xl text-center font-semibold text-white tracking-wide">
                  {tutorial.language}
                </h3>
                <HiArrowRightCircle size={25} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhyChooseUsSection />
      <TopRatedTutors />
    </div>
  );
};

export default Home;
