import React, { useState, useEffect } from "react";
// import { useAuth } from "../contexts/AuthContext"; // your auth context
import axios from "axios";

const AddTutorial = () => {
  // const { user } = useAuth(); // get logged-in user info
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    language: "",
    price: "",
    description: "",
    review: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.displayName || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      // Adjust URL as per your backend endpoint
      const response = await axios.post("/api/groupsInfo", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 201) {
        setSuccessMsg("Tutorial added successfully!");
        setFormData({
          name: user.displayName || "",
          email: user.email || "",
          image: "",
          language: "",
          price: "",
          description: "",
          review: 0,
        });
      }
    } catch (err) {
      setError("Failed to add tutorial. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Tutorial</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name - Readonly */}
        <div>
          <label className="block mb-1 font-medium">User Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Email - Readonly */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Tutorial Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Language */}
        <div>
          <label className="block mb-1 font-medium">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="Enter language (e.g. English, Spanish)"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price (USD)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
            min="0"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description"
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
          />
        </div>

        {/* Review - Hidden or disabled */}
        <input type="hidden" name="review" value={formData.review} />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Saving..." : "Add Tutorial"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
