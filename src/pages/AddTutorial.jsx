"use client"

import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../contexts/AuthContext"
import { toast } from "react-hot-toast"

const AddTutorial = () => {
  const { user } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    language: "",
    price: "",
    description: "",
    review: 0,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
      }))
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { name, image, language, price, description } = formData

    if (!name || !image || !language || !price || !description) {
      toast.error("❗ Please fill out all fields before submitting.")
      setIsSubmitting(false)
      return
    }

    try {
      // Check if we're in preview environment
      const isPreview = typeof window !== "undefined" && window.location.hostname.includes("vusercontent.net")

      if (isPreview) {
        // Simulate API call for preview
        await new Promise((resolve) => setTimeout(resolve, 1500))
        toast.success("🎉 Tutorial saved successfully!")
      } else {
        // Real API call for production
        await axios.post("http://localhost:5000/tutorials", formData)
        toast.success("🎉 Tutorial saved successfully!")
      }

      setFormData({
        name: "",
        email: user?.email || "",
        image: "",
        language: "",
        price: "",
        description: "",
        review: 0,
      })
    } catch {
      toast.error("❌ Failed to save tutorial. Try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors duration-500">
      <div className="flex justify-center items-center min-h-screen py-8 px-4">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-8">
          
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 tracking-tight">
              Add New Tutorial
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Share your knowledge with the world by creating an amazing tutorial
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <div className="p-8 md:p-12">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-lg">👤</span>
                      <span>Your Name</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-lg shadow-sm"
                    />
                  </div>

                  {/* Language Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="language"
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-lg">🌐</span>
                      <span>Subject/Language</span>
                    </label>
                    <input
                      id="language"
                      type="text"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      placeholder="e.g., JavaScript, Python, English"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-lg shadow-sm"
                    />
                  </div>

                  {/* Price Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="price"
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-lg">💰</span>
                      <span>Price (USD)</span>
                    </label>
                    <input
                      id="price"
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter price (e.g., 50)"
                      min="0"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-lg shadow-sm"
                    />
                  </div>

                  {/* Email Field (Read-only) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-lg">📧</span>
                      <span>Your Email</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      readOnly
                      className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-100/90 dark:bg-gray-600/90 text-gray-600 dark:text-gray-300 cursor-not-allowed text-lg shadow-sm"
                    />
                  </div>
                </div>

                {/* Image URL Field - Full Width */}
                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-lg">🖼️</span>
                    <span>Tutorial Image URL</span>
                  </label>
                  <input
                    id="image"
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/your-tutorial-image.jpg"
                    required
                    className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-lg shadow-sm"
                  />
                </div>

                {/* Description Field - Full Width */}
                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-lg">📝</span>
                    <span>Tutorial Description</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write a detailed description about your tutorial. What will students learn? What makes it special?"
                    rows={6}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-lg shadow-sm"
                  ></textarea>
                </div>

                {/* Hidden Review Field */}
                <input type="hidden" name="review" value={formData.review} />

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto mx-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl">🚀</span>
                        <span>Submit Tutorial</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Decorative Bottom Border */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-md">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Need help? Contact our support team for assistance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  )
}

export default AddTutorial
