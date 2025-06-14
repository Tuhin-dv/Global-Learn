import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/my-bookings?email=${user.email}`)
        .then((res) => {
          setBookings(res.data.bookings || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Booking fetch error:", err);
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-indigo-900 mb-6">
        🎓 My Booked Tutors
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="p-4 border border-indigo-200 rounded-xl shadow bg-white"
            >
              <img
                src={booking.image}
                alt={booking.language}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-indigo-800">
                {booking.language}
              </h3>
              <p className="text-sm text-gray-500 mt-1">By: {booking.name}</p>
              <p className="text-indigo-700 font-bold mt-2">
                💰 ${booking.price}
              </p>
              <p className="text-yellow-500">⭐ {booking.review} Reviews</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
