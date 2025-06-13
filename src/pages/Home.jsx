import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/headers/Hero';

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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Hero />
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Available Languages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial._id}
            onClick={() => handleLanguageClick(tutorial._id)}
            className="bg-gradient-to-r from-blue-100 to-purple-100 cursor-pointer p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-center text-indigo-700">{tutorial.language}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
