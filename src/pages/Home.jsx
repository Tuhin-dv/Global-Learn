import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/headers/Hero';
import { FaArrowRight, FaLanguage } from 'react-icons/fa';
import { HiArrowRightCircle } from "react-icons/hi2";
import TopRatedTutors from '../components/TopRatedTutors';
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/tutorials')
      .then((res) => res.json())
      .then((data) => setTutorials(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleLanguageClick = (id) => {
    navigate(`/language/${id}`);
  };

  return (
    <div className="">
      <Hero />
      <div className='max-w-7xl mt-20 mx-auto px-4 '>
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
          Available Languages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              onClick={() => handleLanguageClick(tutorial._id)}
              className='border border-white rounded-lg cursor-pointer'
            >


              {/* Language name */}
              <div className='flex items-center justify-between px-8 py-4 '>
                <FaLanguage size={25}></FaLanguage>
                <h3 className="text-xl text-center font-semibold text-white group-hover:text-indigo-900 tracking-wide">

                  {tutorial.language}
                </h3>
                <HiArrowRightCircle size={25} />
              </div>
            </div>
          ))}
        </div>
        <TopRatedTutors></TopRatedTutors>
      </div>
    </div>
  );
};

export default Home;
