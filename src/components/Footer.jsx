import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-extrabold text-purple-200 mb-4 tracking-wide drop-shadow-lg">
            🌐 Globallearn
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering language learners worldwide. Connect with expert tutors and unlock your language journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-100 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-purple-400 transition duration-200">🏠 Home</Link></li>
            <li><Link to="/find-tutors" className="hover:text-purple-400 transition duration-200">🔍 Find Tutors</Link></li>
            <li><Link to="/add-tutorial" className="hover:text-purple-400 transition duration-200">➕ Add Tutorial</Link></li>
            <li><Link to="/my-tutorials" className="hover:text-purple-400 transition duration-200">📚 My Tutorials</Link></li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-lg font-semibold text-purple-100 mb-4">Popular Languages</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🇬🇧 English</li>
            <li>🇪🇸 Spanish</li>
            <li>🇫🇷 French</li>
            <li>🇨🇳 Mandarin</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-purple-100 mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200 text-xl"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200 text-xl"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200 text-xl"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200 text-xl"><FaLinkedinIn /></a>
          </div>
          <p className="text-sm text-gray-400">📧 support@globallern.com</p>
          <p className="text-sm text-gray-400">📞 +880 1234 567890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          © {year} <span className="text-purple-300 font-medium">Globallearn</span>. Crafted with 💜 for learners worldwide.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
