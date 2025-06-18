import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://globallern-server.vercel.app/tutorials")
      .then((res) => {
        setTutorials(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <span className="loading loading-spinner text-indigo-600 scale-150"></span>
      </div>
    );

  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.language.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-r from-purple-50 via-indigo-100 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all duration-300">
      <h2 className="text-4xl font-bold text-center text-indigo-900 dark:text-white mb-12 tracking-tight">
        🌐 Explore Language Tutorials
      </h2>

      {/* Search Bar */}
      <div className="flex items-center justify-between border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 px-4 py-2 mb-6 shadow-sm">
        <input
          type="text"
          placeholder="Search by Language"
          className="text-gray-800 dark:text-white w-full bg-transparent outline-none py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearchOutline className="text-gray-500 dark:text-gray-300 ml-3" size={22} />
      </div>

      {filteredTutorials.length === 0 ? (
        <p className="text-center text-red-500 text-lg font-medium">No tutorials found.</p>
      ) : (
        <div className="space-y-10">
          {filteredTutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={tutorial.image}
                alt={tutorial.name}
                className="w-full md:w-72 h-52 object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-white mb-1">
                  Tutor : {tutorial.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base">
                  Learn{" "}
                  <span className="font-semibold text-purple-800 dark:text-purple-400">
                    {tutorial.language}
                  </span>{" "}
                  from skilled instructors and enhance your communication skills.
                </p>
                 <p className="font-semibold text-gray-600 dark:text-white"><span className="font-semibold">Description </span>: {tutorial.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-gray-800 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-sm">
                    ${tutorial.price}
                  </span>
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {tutorial.review} Reviews
                  </span>
                  <Link
                    to={`/language/${tutorial._id}`}
                    className="ml-auto text-indigo-700 dark:text-indigo-400 hover:underline font-medium transition"
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
