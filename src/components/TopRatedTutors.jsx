import React from 'react'
import { motion } from "framer-motion";

function TopRatedTutors() {
    const topTutors = [
        {
            id: 1,
            name: "Emma Johnson",
            language: "English",
            image: "https://i.ibb.co/1nRvSvk/tutor1.jpg",
            review: 58,
            price: "$20/hr"
        },
        {
            id: 2,
            name: "Carlos Garcia",
            language: "Spanish",
            image: "https://i.ibb.co/2s9YkqZ/tutor2.jpg",
            review: 45,
            price: "$18/hr"
        },
        {
            id: 3,
            name: "Ayaka Sato",
            language: "Japanese",
            image: "https://i.ibb.co/wg1MzDt/tutor3.jpg",
            review: 39,
            price: "$22/hr"
        },
    ];
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">🌟 Top Rated Tutors</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {topTutors.map((tutor, i) => (
                        <motion.div
                            key={tutor.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
                        >
                            <img
                                src={tutor.image}
                                alt={tutor.name}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-xl font-semibold">{tutor.name}</h3>
                            <p className="text-sm text-gray-500">{tutor.language}</p>
                            <p className="font-bold mt-2">{tutor.price}</p>
                            <p className="text-yellow-500">⭐ {tutor.review} Reviews</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopRatedTutors