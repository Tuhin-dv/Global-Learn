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
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <h2 className="text-4xl md:text-5xl text-center font-extrabold text-indigo-900 dark:text-indigo-400 mb-10">
        🎓 My Booked Tutors
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center text-lg">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-indigo-100 dark:border-indigo-700 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={booking.image}
                alt={booking.language}
                className="h-48 w-full object-cover rounded-t-3xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-2">
                  {booking.language}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base mb-1">
                  By: <span className="font-medium">{booking.name}</span>
                </p>
                <p className="text-indigo-700 dark:text-indigo-200 font-bold text-lg mb-1">
                  💰 ${booking.price}
                </p>
                <p className="text-yellow-500 font-semibold text-md mb-2">
                  ⭐ {booking.review} Reviews
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">
                  {booking.description || "No description available."}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
