import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const MyTutors = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/my-tutors?email=${user.email}`)
        .then((res) => {
          if (res.data.success) {
            setTutorials(res.data.tutorials);
          }
        })
        .catch((err) => console.error("Error fetching my tutorials:", err));
    }
  }, [user]);

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-white  text-center mb-6">
        ✏️ My Added Tutorials ({tutorials.length})
      </h2>

      {tutorials.length === 0 ? (
        <p className="text-gray-500 text-center">No tutorials added yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutor, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={tutor.image}
                alt={tutor.language}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-xl mt-2 font-semibold text-indigo-800">
                {tutor.language}
              </h3>
              <p className="text-gray-600">By: {tutor.name}</p>
              <p className="text-indigo-600 font-bold">${tutor.price}</p>
              <p className="text-yellow-500">⭐ {tutor.review} Reviews</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTutors;
