import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tutorials")
      .then((res) => {
        setTutorials(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tutorials:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-indigo-600"></span>
      </div>
    );

  return (
    <div className="bg-gradient-to-r from-purple-50 via-indigo-100 to-gray-100 min-h-screen py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-10">
        🌐 Explore Language Tutorials
      </h2>

      {tutorials.length === 0 ? (
        <p className="text-center text-red-500 text-lg">No tutorials found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <img
                src={tutorial.image}
                alt={tutorial.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-semibold text-indigo-800">{tutorial.name}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-2">
                Learn <span className="font-medium">{tutorial.language}</span> easily!
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="inline-block bg-gradient-to-r from-purple-800 via-indigo-700 to-gray-800 text-white text-sm px-3 py-1 rounded-full shadow">
                  ${tutorial.price}
                </span>
                <Link
                  to={`/language-details/${tutorial._id}`}
                  className="text-indigo-700 hover:underline font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorialList;
