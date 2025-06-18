import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const LanguageDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://globallern-server.vercel.app/tutorials/${id}`)
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
      toast.error('Please log in to book a tutorial.');
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
      .post('https://globallern-server.vercel.app/book-now', bookingData)
      .then((res) => {
        console.log('📦 Booked successfully:', res.data);
        setBookingSuccess(true);
        toast.success('Successfully booked!');
      })
      .catch((err) => {
        console.error('❌ Booking error:', err);
        toast.error('Booking failed. Try again.');
      });
  };

  if (loading)
    return (
      <p className="text-center text-lg mt-10 text-indigo-700">
        <span className="loading loading-spinner loading-xl"></span>
      </p>
    );

  if (!tutorial)
    return (
      <p className="text-center mt-10 text-red-600 text-lg font-semibold">
        No details found.
      </p>
    );

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto p-8 my-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
        {/* Header Section */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Professional Image */}
            <div className="flex-shrink-0">
              <img
                src={tutorial.image || "/placeholder.svg"}
                alt={tutorial.language}
                className="w-32 h-32 object-cover border border-gray-300 dark:border-gray-600 shadow-sm"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tutorial.language} Language Tutorial
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Instructor:</span>
                    <span className="text-sm">{tutorial.name}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
                    Enhance your fluency with expert-led tutorials designed for professional development
                  </p>
                </div>

                {/* Price Section */}
                <div className="text-right">
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-6 py-4 inline-block">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Session Price</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">${tutorial.price}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">per hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
            <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Instruction</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Professional certified instructors</p>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
            <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Schedule</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Book sessions at your convenience</p>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
            <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Track your learning progress</p>
          </div>
        </div>

        {/* Action Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ready to Start Learning?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join thousands of professionals improving their language skills
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {bookingSuccess && (
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 px-4 py-2 text-green-700 dark:text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium text-sm">Successfully booked!</span>
                </div>
              )}

              <button
                onClick={handleBooking}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={bookingSuccess}
              >
                {bookingSuccess ? "Booking Confirmed" : "Book Tutorial"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
         <Link to="/find-tutors">
          <button className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tutors
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetails;
