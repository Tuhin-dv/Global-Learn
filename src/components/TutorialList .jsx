import React, { useEffect, useState } from "react";
import axios from "axios";

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
        console.error("Failed to fetch tutorials:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">All Tutorials</h2>
      {tutorials.length === 0 && <p>No tutorials found.</p>}
      <ul>
        {tutorials.map((tutorial) => (
          <li key={tutorial._id} className="mb-4 p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">{tutorial.name}</h3>
            <p>
              <strong>Language:</strong> {tutorial.language}
            </p>
            <p>
              <strong>Price:</strong> ${tutorial.price}
            </p>
            <p>{tutorial.description}</p>
            <img
              src={tutorial.image}
              alt={tutorial.name}
              className="w-48 mt-2 rounded"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialList;
