

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import toast from "react-hot-toast"
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import axios from "axios"


const MyTutors = () => {
  const { user } = useContext(AuthContext)
  const [tutorials, setTutorials] = useState([])
  const [editingTutor, setEditingTutor] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMyTutorials()
  }, [user])

  const fetchMyTutorials = () => {
    setLoading(true)

    // Check if we're in a preview environment
    const isPreview = typeof window !== "undefined" && window.location.hostname.includes("vusercontent.net")

    if (isPreview) {
      // Use mock data for preview
      setTimeout(() => {
        setTutorials(mockTutorials)
        setLoading(false)
      }, 800)
    } else {
      // Use real API for production
      if (user?.email) {
        axios
          .get(`https://globallern-server.vercel.app/my-tutors?email=${user.email}`)
          .then((res) => {
            if (res.data.success) {
              setTutorials(res.data.tutorials)
            }
          })
          .catch((err) => console.error("Error fetching tutorials:", err))
          .finally(() => setLoading(false))
      } else {
        setLoading(false)
      }
    }
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditingTutor((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdate = () => {
    const { _id, ...updatedFields } = editingTutor

    // Check if we're in a preview environment
    const isPreview = typeof window !== "undefined" && window.location.hostname.includes("vusercontent.net")

    if (isPreview) {
      // Mock update for preview
      setTimeout(() => {
        setTutorials((prev) =>
          prev.map((tutorial) => (tutorial._id === _id ? { ...tutorial, ...updatedFields } : tutorial)),
        )
        toast.success("Tutorial updated successfully!")
        setEditingTutor(null)
      }, 600)
    } else {
      // Real API call for production
      axios
        .patch(`https://globallern-server.vercel.app/tutorials/${_id}`, updatedFields)
        .then((res) => {
          if (res.data.success) {
            toast.success("Tutorial updated successfully!")
            fetchMyTutorials()
            setEditingTutor(null)
          }
        })
        .catch(() => {
          toast.error("Failed to update tutorial")
        })
    }
  }

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col space-y-4 p-2">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">⚠️</span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Delete Tutorial</h4>
              <p className="text-sm text-gray-600">
                Are you sure you want to delete this tutorial? This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => {
                toast.dismiss(t.id)

          
                const isPreview = typeof window !== "undefined" && window.location.hostname.includes("vusercontent.net")

                if (isPreview) {
                
                  setTimeout(() => {
                    setTutorials((prev) => prev.filter((tutorial) => tutorial._id !== id))
                    toast.success("Tutorial deleted!")
                  }, 600)
                } else {
                  // Real API call for production
                  axios
                    .delete(`https://globallern-server.vercel.app/tutorials/${id}`)
                    .then((res) => {
                      if (res.data.success) {
                        toast.success("Tutorial deleted!")
                        fetchMyTutorials()
                      }
                    })
                    .catch(() => toast.error("Failed to delete tutorial"))
                }
              }}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-md"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 8000 },
    )
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 tracking-tight">
            My Added Tutorials
          </h2>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
              {tutorials.length} {tutorials.length === 1 ? "Tutorial" : "Tutorials"}
            </span>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-200 border-dashed rounded-full animate-spin"></div>
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 font-medium">Loading your tutorials...</p>
          </div>
        ) : tutorials.length === 0 ? (
          <div className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tutorials added yet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Start by adding your first tutorial to share your knowledge with others!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {tutorials.map((tutor) => (
              <div
                key={tutor._id}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Enhanced Image Section */}
                  <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden group">
                    <img
                      src={tutor.image || "/placeholder.svg?height=300&width=400"}
                      alt={tutor.language}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-md">
                        💻 {tutor.language}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="flex-1 p-6 lg:p-8">
                    <div className="flex flex-col h-full">
                      {/* Header with improved styling */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                            {tutor.language}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>By {tutor.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-yellow-500">⭐</span>
                              <span>{tutor.review} Reviews</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                          <span className="text-lg">💰</span>
                          <span>${tutor.price}</span>
                        </div>
                      </div>

                      {/* Enhanced Description */}
                      <div className="flex-1 mb-6">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base line-clamp-3">
                          {tutor.description}
                        </p>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => setEditingTutor(tutor)}
                          title="Edit"
                          aria-label="Edit tutorial"
                          className="inline-flex items-center space-x-2 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 border-2 border-blue-200 hover:border-blue-300 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 shadow-md"
                        >
                          <FiEdit2 size={18} />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(tutor._id)}
                          title="Delete"
                          aria-label="Delete tutorial"
                          className="inline-flex items-center space-x-2 px-5 py-3 bg-red-50 hover:bg-red-100 text-red-700 border-2 border-red-200 hover:border-red-300 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-105 shadow-md"
                        >
                          <FiTrash2 size={18} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Edit Modal */}
        {editingTutor && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl">✏️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Tutorial</h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    <span className="text-lg">📚</span>
                    <span>Language</span>
                  </label>
                  <input
                    type="text"
                    name="language"
                    value={editingTutor.language}
                    onChange={handleEditChange}
                    placeholder="Language"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 text-lg shadow-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    <span className="text-lg">💰</span>
                    <span>Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={editingTutor.price}
                    onChange={handleEditChange}
                    placeholder="Price"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 text-lg shadow-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    <span className="text-lg">🖼️</span>
                    <span>Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={editingTutor.image}
                    onChange={handleEditChange}
                    placeholder="Image URL"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 text-lg shadow-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    <span className="text-lg">📝</span>
                    <span>Description</span>
                  </label>
                  <textarea
                    name="description"
                    value={editingTutor.description}
                    onChange={handleEditChange}
                    placeholder="Description"
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 resize-none text-lg shadow-sm"
                    rows={5}
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
                <button
                  onClick={() => setEditingTutor(null)}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform hover:scale-105 shadow-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg transform hover:scale-105"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyTutors
