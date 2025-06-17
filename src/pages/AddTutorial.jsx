import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image, language, price, description } = formData;

    if (!name || !image || !language || !price || !description) {
      toast.error("❗ Please fill out all fields before submitting.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/tutorials", formData);
      toast.success("🎉 Tutorial saved successfully!");

      setFormData({
        name: "",
        email: user?.email || "",
        image: "",
        language: "",
        price: "",
        description: "",
        review: 0,
      });
    } catch {
      toast.error("❌ Failed to save tutorial. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center py-12 px-4 transition-colors duration-500">
      <div className="w-full max-w-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center text-indigo-800 dark:text-indigo-300 mb-10 tracking-wide drop-shadow">
          ✍️ Add a New Tutorial
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Tutorial Image URL
            </label>
            <input
              id="image"
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Language */}
          <div>
            <label htmlFor="language" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Language
            </label>
            <input
              id="language"
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="e.g. English, Bangla"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Price (USD)
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="0"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Email (Read-only) */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 shadow-sm text-gray-600 dark:text-gray-300 cursor-not-allowed"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description about your tutorial..."
              rows={4}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 resize-none shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
            ></textarea>
          </div>

          {/* Hidden Review */}
          <input type="hidden" name="review" value={formData.review} />

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-transform duration-200 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl"
            >
              🚀 Submit Tutorial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
