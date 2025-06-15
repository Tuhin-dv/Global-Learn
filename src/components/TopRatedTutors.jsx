import React from 'react'
import { motion } from "framer-motion";

function TopRatedTutors() {
  const topTutors = [
    {
      id: 1,
      name: "Emma Johnson",
      language: "English",
      image: "https://i.ibb.co/zHfvQ24x/product-school-z-FBVx-Cl-B2-I8-unsplash.jpg",
      review: 58,
      price: "$20/hr",
      description: "Expert in spoken English and grammar. 5+ years of experience."
    },
    {
      id: 2,
      name: "Carlos Garcia",
      language: "Spanish",
      image: "https://i.ibb.co/nqKmVm1L/leonardo-toshiro-okubo-j-BSTNen-Qxok-unsplash.jpg",
      review: 45,
      price: "$18/hr",
      description: "Native Spanish speaker helping learners master conversation."
    },
    {
      id: 3,
      name: "Ayaka Sato",
      language: "Japanese",
      image: "https://i.ibb.co/pvY2yh6L/immo-wegmann-r-Re-G42-Hkqo4-unsplash.jpg",
      review: 39,
      price: "$22/hr",
      description: "Japanese tutor focused on writing, speaking, and JLPT prep."
    },
  ];

  return (
    <div className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          🌟 Top Rated Tutors
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {topTutors.map((tutor, i) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-purple-200"
            >
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md animate-pulse">
                  {tutor.language}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">{tutor.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tutor.description}
                </p>
                <div className="flex items-center justify-between text-gray-600 text-sm pt-2">
                  <span>💲 <span className="font-semibold">{tutor.price}</span></span>
                  <span>⭐ {tutor.review} Reviews</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopRatedTutors
