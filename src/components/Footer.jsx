import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-purple-200 to-sky-200 text-gray-800 dark:bg-gradient-to-r dark:from-purple-800 dark:via-indigo-900 dark:to-gray-900 dark:text-white pt-16 pb-8 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-extrabold text-purple-800 dark:text-purple-300 mb-4 tracking-wide drop-shadow-lg">
            🌐 Globallearn
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Empowering language learners worldwide. Connect with expert tutors and unlock your language journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">🏠 Home</Link></li>
            <li><Link to="/find-tutors" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">🔍 Find Tutors</Link></li>
            <li><Link to="/add-tutorial" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">➕ Add Tutorial</Link></li>
            <li><Link to="/my-tutorials" className="hover:text-purple-600 dark:hover:text-purple-400 transition duration-200">📚 My Tutorials</Link></li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">Popular Languages</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>🇬🇧 English</li>
            <li>🇪🇸 Spanish</li>
            <li>🇫🇷 French</li>
            <li>🇨🇳 Mandarin</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="p-2 rounded-full bg-purple-200/20 dark:bg-purple-300/10 hover:bg-purple-300/30 dark:hover:bg-purple-300/20 transition duration-200 text-xl text-purple-700 dark:text-purple-300">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-purple-200/20 dark:bg-purple-300/10 hover:bg-purple-300/30 dark:hover:bg-purple-300/20 transition duration-200 text-xl text-purple-700 dark:text-purple-300">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-purple-200/20 dark:bg-purple-300/10 hover:bg-purple-300/30 dark:hover:bg-purple-300/20 transition duration-200 text-xl text-purple-700 dark:text-purple-300">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-purple-200/20 dark:bg-purple-300/10 hover:bg-purple-300/30 dark:hover:bg-purple-300/20 transition duration-200 text-xl text-purple-700 dark:text-purple-300">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">📧 support@globallern.com</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">📞 +880 1234 567890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 border-t border-gray-300 dark:border-purple-800 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          © {year} <span className="text-purple-700 dark:text-purple-400 font-medium">Globallearn</span>. Crafted with 💜 for learners worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
