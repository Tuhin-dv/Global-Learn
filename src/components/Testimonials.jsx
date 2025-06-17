import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ali",
    role: "Language Learner",
    text: "Globallern helped me find the perfect French tutor. I improved my speaking skills faster than I expected!",
    image: "https://i.ibb.co/7Y2hJZt/user1.jpg",
  },
  {
    id: 2,
    name: "John Kumar",
    role: "English Tutor",
    text: "I met wonderful students here. The platform is easy to use and very effective for managing tutorials.",
    image: "https://i.ibb.co/SfLL1Ls/user2.jpg",
  },
  {
    id: 3,
    name: "Mina Rahman",
    role: "Parent",
    text: "My daughter gained confidence in speaking Spanish thanks to the personalized tutors we found here!",
    image: "https://i.ibb.co/qpcpVXn/user3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, role, text, image }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 dark:border dark:border-purple-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800 dark:text-purple-200">
                    {name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                "{text}"
              </p>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
