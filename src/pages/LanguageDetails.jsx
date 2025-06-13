import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!tutorial) return <p className="text-center mt-10 text-red-500">No details found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <img src={tutorial.image} alt={tutorial.language} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h2 className="text-2xl font-bold text-center text-indigo-700">{tutorial.language}</h2>
      <p className="text-center mt-2 text-gray-700">Created by: <span className="font-semibold">{tutorial.name}</span></p>
      <p className="text-center text-purple-600 text-lg mt-2">Price: ${tutorial.price}</p>
    </div>
  );
};

export default LanguageDetails;
