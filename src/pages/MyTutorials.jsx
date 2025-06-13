import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

function MyTutorials() {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://your-server-url.com/my-tutorials?email=${user.email}`)
        .then((res) => {
          setTutorials(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching tutorials:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10">Loading your tutorials...</p>;
  }

  if (tutorials.length === 0) {
    return <p className="text-center mt-10">You have not added any tutorials yet.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Tutorials</h2>
      <div className="grid gap-4">
        {tutorials.map((tutorial) => (
          <div key={tutorial._id} className="border p-4 rounded shadow bg-white">
            <img src={tutorial.image} alt={tutorial.language} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{tutorial.language}</h3>
            <p className="text-gray-600">{tutorial.description}</p>
            <p className="text-blue-600 font-semibold mt-2">Price: ${tutorial.price}</p>
            <p className="text-sm text-gray-500">Review: {tutorial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTutorials;
