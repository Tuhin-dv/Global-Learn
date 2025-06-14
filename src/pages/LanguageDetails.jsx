import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const LanguageDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/tutorials/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTutorial(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p className="text-center text-lg mt-10 text-indigo-700">Loading...</p>;

  if (!tutorial)
    return (
      <p className="text-center mt-10 text-red-600 text-lg font-semibold">
        No details found.
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-2xl rounded-2xl">
      <div className="flex flex-col items-center text-center">
        <img
          src={tutorial.image}
          alt={tutorial.language}
          className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-indigo-800 mt-4">{tutorial.language}</h2>
        <p className="mt-2 text-gray-600 text-lg">
          <span className="font-semibold text-gray-800">Created by:</span> {tutorial.name}
        </p>
        <p className="mt-1 text-purple-700 font-semibold text-xl">
          💰 Price: ${tutorial.price}
        </p>
        <p className="mt-2 text-sm text-gray-500 italic">Enhance your fluency with expert-led tutorials</p>
      </div>

      <div className="text-center mt-6">
        <Link
          to="/find-tutors"
          className="inline-block bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition"
        >
          🔙 Back to Tutors
        </Link>
      </div>
    </div>
  );
};

export default LanguageDetails;
