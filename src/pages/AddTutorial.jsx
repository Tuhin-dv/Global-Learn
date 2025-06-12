import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AddTutorial = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    language: "",
    price: "",
    description: "",
    review: 0,
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          📘 Add Your Tutorial
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 shadow-sm text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Tutorial Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="e.g. English, Bangla"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price (USD)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="0"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description about your tutorial"
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 resize-none shadow-sm"
            ></textarea>
          </div>

          {/* Hidden Review */}
          <input type="hidden" name="review" value={formData.review} />

          {/* Submit Button Placeholder */}
          <div className="text-center">
            <button
              type="button"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl shadow-md"
              onClick={() => console.log(formData)}
            >
              ➕ Save Tutorial (Demo)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
