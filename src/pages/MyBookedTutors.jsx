import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [reviewedBookings, setReviewedBookings] = useState(new Set());

  useEffect(() => {
    if (user?.email) {
      fetchBookings(user.email);
    }
  }, [user]);

  const fetchBookings = async (email) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await axios.get(`https://globallern-server.vercel.app/my-bookings?email=${email}`);
      if (res.data.success) {
        setBookings(res.data.bookings || []);

        const reviewedSet = new Set(
          (res.data.bookings || [])
            .filter(b => b.hasReviewed)
            .map(b => b._id.toString())
        );
        setReviewedBookings(reviewedSet);
      } else {
        setErrorMsg("Failed to load bookings");
        toast.error("Failed to load bookings");
      }
    } catch (err) {
      console.error("Booking fetch error:", err);
      setErrorMsg("Failed to load bookings");
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

 const handleReviewClick = async (bookingId) => {
  setUpdatingId(bookingId);
  try {
    const res = await axios.patch(`https://globallern-server.vercel.app/book-now/review/${bookingId}`);
    console.log("Response from server:", res.data);

    if (res.data?.success) {
      // Disable the review button
      setReviewedBookings((prev) => new Set(prev).add(bookingId));

      // Update the review count locally to reflect instantly
      setBookings((prev) =>
        prev.map((b) =>
          b._id === bookingId ? { ...b, review: (b.review ?? 0) + 1 } : b
        )
      );

      toast.success("Review Successful");
    } else {
      toast.error("Review update failed: Invalid response");
    }
  } catch (error) {
    console.error("Review update failed:", error);
    toast.error("Something went wrong");
  } finally {
    setUpdatingId(null);
  }
};


  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-black/40 transition-colors duration-500">
      <h2 className="text-4xl md:text-5xl text-center font-extrabold text-indigo-900 dark:text-indigo-400 mb-10">
        🎓 My Booked Tutors
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center text-lg">
          No bookings found.
        </p>
      ) : (
        <>
          {errorMsg && (
            <p className="text-red-600 dark:text-red-400 text-center mb-4 font-semibold">
              {errorMsg}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="flex flex-col bg-white dark:bg-black/10 rounded-3xl shadow-lg border border-indigo-100 dark:border-indigo-700 hover:shadow-2xl transition-shadow duration-300"
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
                    ⭐ {booking.review ?? 0} Reviews
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                    {booking.description || "No description available."}
                  </p>
                  <button
                    onClick={() => handleReviewClick(booking._id.toString())}
                    disabled={
                      updatingId === booking._id.toString() || reviewedBookings.has(booking._id.toString())
                    }
                    className={`self-start px-4 py-2 rounded-lg font-semibold transition ${
                      updatingId === booking._id.toString() || reviewedBookings.has(booking._id.toString())
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                    }`}
                  >
                    {reviewedBookings.has(booking._id.toString())
                      ? "Reviewed"
                      : updatingId === booking._id.toString()
                      ? "Updating..."
                      : "Add Review"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookedTutors;
