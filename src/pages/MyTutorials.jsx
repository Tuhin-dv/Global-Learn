import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const MyTutors = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const [editingTutor, setEditingTutor] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state added

  useEffect(() => {
    fetchMyTutorials();
  },[user]);

  const fetchMyTutorials = () => {
    setLoading(true);
    if (user?.email) {
      axios
        .get(`http://localhost:5000/my-tutors?email=${user.email}`)
        .then((res) => {
          if (res.data.success) {
            setTutorials(res.data.tutorials);
          }
        })
        .catch((err) => console.error("Error fetching tutorials:", err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTutor((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const { _id, ...updatedFields } = editingTutor;

    axios
      .patch(`http://localhost:5000/tutorials/${_id}`, updatedFields)
      .then((res) => {
        if (res.data.success) {
          toast.success("Tutorial updated successfully!");
          fetchMyTutorials();
          setEditingTutor(null);
        }
      })
      .catch(() => {
        toast.error("Failed to update tutorial");
      });
  };

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col">
          <span className="text-base font-medium">Are you sure you want to delete?</span>
          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                axios
                  .delete(`http://localhost:5000/tutorials/${id}`)
                  .then((res) => {
                    if (res.data.success) {
                      toast.success("Tutorial deleted!");
                      fetchMyTutorials();
                    }
                  })
                  .catch(() => toast.error("Failed to delete tutorial"));
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-purple-50 via-indigo-100 to-gray-100">
      <h2 className="text-4xl md:text-5xl text-center font-extrabold text-indigo-900 mb-10">
        ✏️ My Added Tutorials ({tutorials.length})
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : tutorials.length === 0 ? (
        <p className="text-gray-500 text-2xl text-center">No tutorials added yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutor) => (
            <div
              key={tutor._id}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition relative"
            >
              <img
                src={tutor.image}
                alt={tutor.language}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-xl mt-2 font-semibold text-indigo-800">{tutor.language}</h3>
              <p className="text-gray-600">By: {tutor.name}</p>
              <p className="text-indigo-600 font-bold">${tutor.price}</p>
              <p className="text-yellow-500">⭐ {tutor.review} Reviews</p>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => setEditingTutor(tutor)}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(tutor._id)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingTutor && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">Edit Tutorial</h3>
            <input
              type="text"
              name="language"
              value={editingTutor.language}
              onChange={handleEditChange}
              placeholder="Language"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="text"
              name="price"
              value={editingTutor.price}
              onChange={handleEditChange}
              placeholder="Price"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="text"
              name="image"
              value={editingTutor.image}
              onChange={handleEditChange}
              placeholder="Image URL"
              className="w-full p-2 mb-3 border rounded"
            />
            <textarea
              name="description"
              value={editingTutor.description}
              onChange={handleEditChange}
              placeholder="Description"
              className="w-full p-2 mb-3 border rounded"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTutor(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTutors;
