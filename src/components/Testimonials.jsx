"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Ali",
    role: "Language Learner",
    text: "Globallern helped me find the perfect French tutor. I improved my speaking skills faster than I expected!",
    image: "https://i.ibb.co/x8RD46VN/compressed-alex-mccarthy-RGKd-WJOUFH0-unsplash.jpg",
    rating: 5,
    location: "New York, USA",
  },
  {
    id: 2,
    name: "John Kumar",
    role: "English Tutor",
    text: "I met wonderful students here. The platform is easy to use and very effective for managing tutorials.",
    image: "https://i.ibb.co/F4sk2Qvk/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg",
    rating: 5,
    location: "London, UK",
  },
  {
    id: 3,
    name: "Mina Rahman",
    role: "Parent",
    text: "My daughter gained confidence in speaking Spanish thanks to the personalized tutors we found here!",
    image: "https://i.ibb.co/DHJF6Gy7/joshua-rondeau-Zn-HRNtw-Xg6-Q-unsplash.jpg",
    rating: 5,
    location: "Toronto, Canada",
  },
]

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
         
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how Globallern has transformed learning experiences worldwide
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Happy Students</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">4.9</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Languages</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-500 hover:-translate-y-2 ${
                index === 1 ? "lg:scale-105 lg:shadow-xl" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
            
             

              {/* Featured Badge for middle card */}
              {index === 1 && (
                <div className="absolute -top-3 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ FEATURED
                  </div>
                </div>
              )}

              {/* Rating Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-gradient-to-r from-purple-400 to-pink-400 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                />
              ))}
            </div>
            <div className="text-left pr-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Join 10,000+ learners</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Start your journey today</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonial
