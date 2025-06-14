import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "Learn from native-speaking expert tutors",
  "Book lessons at your convenience",
  "Interactive and real-life based learning",
  "Secure booking and verified reviews",
  "24/7 support and user-friendly platform",
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative mt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700/20 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 p-10 md:p-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
          🚀 Why Choose <span className="text-yellow-400">Globallearn</span>?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition duration-300"
            >
              <CheckCircle className="text-green-400 w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
