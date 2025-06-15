import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

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
      <div className="flex items-center justify-center min-h-screen bg-white">
        <span className="loading loading-spinner text-indigo-600 scale-150"></span>
      </div>
    );

  return (
    <div className="bg-gradient-to-r from-purple-50 via-indigo-100 to-gray-100 min-h-screen py-16 px-4 sm:px-8 md:px-16">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12 tracking-tight">
        🌐 Explore Language Tutorials
      </h2>
      <div className="flex items-center justify-between border border-gray-400 rounded-lg bg-white px-3 py-2 mb-5">
        <input
          type="text"
          placeholder="Search by Language"
          className="text-black w-full py-3 bg-white outline-none"
        />
        <IoSearchOutline className="text-gray-600 ml-3 cursor-pointer" size={24} />
      </div>

      {tutorials.length === 0 ? (
        <p className="text-center text-red-500 text-lg">No tutorials found.</p>
      ) : (
        <div className="space-y-10">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-white flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 group border border-gray-100"
            >
              <img
                src={tutorial.image}
                alt={tutorial.name}
                className="w-full md:w-72 h-52 object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-indigo-900 mb-1">
                  Tutor : {tutorial.name}
                </h3>
                <p className="text-gray-600 text-base">
                  Learn{" "}
                  <span className="font-semibold text-purple-800">
                    {tutorial.language}
                  </span>{" "}
                  from skilled instructors and enhance your communication skills.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-gray-800 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-sm">
                    ${tutorial.price}
                  </span>
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {tutorial.review} Reviews
                  </span>
                  <Link
                    to={`/language/${tutorial._id}`}
                    className="ml-auto text-indigo-700 hover:text-indigo-900 font-medium underline underline-offset-2 transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorialList;
