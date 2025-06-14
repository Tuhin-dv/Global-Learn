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
            price: "$20/hr"
        },
        {
            id: 2,
            name: "Carlos Garcia",
            language: "Spanish",
            image: "https://i.ibb.co/nqKmVm1L/leonardo-toshiro-okubo-j-BSTNen-Qxok-unsplash.jpg",
            review: 45,
            price: "$18/hr"
        },
        {
            id: 3,
            name: "Ayaka Sato",
            language: "Japanese",
            image: "https://i.ibb.co/pvY2yh6L/immo-wegmann-r-Re-G42-Hkqo4-unsplash.jpg",
            review: 39,
            price: "$22/hr"
        },
    ];
    return (
        <div>
            <div className="max-w-7xl mt-20 mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">
                    🌟 Top Rated Tutors
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {topTutors.map((tutor, i) => (
                        <motion.div
                            key={tutor.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative">
                                <img
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="w-full h-56 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                                    {tutor.language}
                                </span>
                            </div>

                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{tutor.name}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>💲 Price: <span className="font-semibold">{tutor.price}</span></span>
                                    <span>⭐ {tutor.review} Reviews</span>
                                </div>
                                <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition duration-200">
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TopRatedTutors