import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


const LanguageDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useContext(AuthContext); // ✅ Get logged-in user

  useEffect(() => {
    fetch(`http://localhost:5000/tutorials/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTutorial(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = () => {
    if (!user?.email) {
      alert('Please log in to book a tutorial.');
      return;
    }

    const bookingData = {
      tutorialId: tutorial._id,
      name: tutorial.name,
      language: tutorial.language,
      image: tutorial.image,
      price: tutorial.price,
      review: tutorial.review,
      email: user.email,
    };

    axios
      .post('http://localhost:5000/book-now', bookingData)
      .then((res) => {
        console.log('📦 Booked successfully:', res.data);
        setBookingSuccess(true);
      })
      .catch((err) => {
        console.error('❌ Booking error:', err);
      });
  };

  if (loading)
    return (
      <p className="text-center text-lg mt-10 text-indigo-700"><span className="loading loading-spinner loading-xl"></span></p>
    );

  if (!tutorial)
    return (
      <p className="text-center mt-10 text-red-600 text-lg font-semibold">
        No details found.
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 bg-white shadow-2xl rounded-2xl">
      <div className="flex flex-col items-center text-center">
        <img
          src={tutorial.image}
          alt={tutorial.language}
          className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-indigo-800 mt-4">{tutorial.language}</h2>
        <p className="mt-2 text-gray-600 text-lg">
          <span className="font-semibold text-gray-800">Created by:</span> {tutorial.name}
        </p>
        <p className="mt-1 text-purple-700 font-semibold text-xl">
          💰 Price: ${tutorial.price}
          
        </p>
        <p className="mt-2 text-sm text-gray-500 italic">
          Enhance your fluency with expert-led tutorials
        </p>

        <button
          onClick={handleBooking}
          className="mt-6 bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900 text-white px-8 py-2 rounded-full shadow hover:opacity-90 transition"
          disabled={bookingSuccess}
        >
          🚀 {bookingSuccess ? 'Booked' : 'Book Now'}
        </button>

        {bookingSuccess && (
          <p className="text-green-600 font-medium mt-3">Successfully booked!</p>
        )}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/find-tutors"
          className="inline-block text-indigo-700 hover:underline transition"
        >
          🔙 Back to Tutors
        </Link>
      </div>
    </div>
  );
};

export default LanguageDetails;
