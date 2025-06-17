"use client"

import { Link } from "react-router"

function TopRatedTutors() {
  const topTutors = [
    {
      id: 1,
      name: "Emma Johnson",
      language: "English",
      image: "https://i.ibb.co/zHfvQ24x/product-school-z-FBVx-Cl-B2-I8-unsplash.jpg",
      review: 58,
      price: "$20/hr",
      description: "Expert in spoken English and grammar. 5+ years of experience.",
    },
    {
      id: 2,
      name: "Carlos Garcia",
      language: "Spanish",
      image: "https://i.ibb.co/nqKmVm1L/leonardo-toshiro-okubo-j-BSTNen-Qxok-unsplash.jpg",
      review: 45,
      price: "$18/hr",
      description: "Native Spanish speaker helping learners master conversation.",
    },
    {
      id: 3,
      name: "Ayaka Sato",
      language: "Japanese",
      image: "https://i.ibb.co/pvY2yh6L/immo-wegmann-r-Re-G42-Hkqo4-unsplash.jpg",
      review: 39,
      price: "$22/hr",
      description: "Japanese tutor focused on writing, speaking, and JLPT prep.",
    },
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Top Rated Tutors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn from the best educators around the world
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topTutors.map((tutor, i) => (
            <div
              key={tutor.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 hover:-translate-y-2 ${i === 1 ? "lg:scale-105 lg:shadow-xl" : ""
                }`}
              style={{
                animationDelay: `${i * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Featured Badge for middle card */}
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ FEATURED
                  </div>
                </div>
              )}

              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={tutor.image || "/placeholder.svg"}
                  alt={tutor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Language Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    {tutor.language}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {tutor.review}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {tutor.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{tutor.description}</p>
                </div>

                {/* Stats Section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">{tutor.review} reviews</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{tutor.price}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per hour</div>
                  </div>
                </div>

                {/* CTA Button */}
               
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/find-tutors">
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500">
              View All Tutors →
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default TopRatedTutors
