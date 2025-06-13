import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-purple-300 mb-3">🌐 Globallearn</h1>
          <p className="text-sm text-gray-300">Empowering language learners worldwide. Find your perfect tutor today and unlock global opportunities.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-purple-200">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
            <li><Link to="/find-tutors" className="hover:text-purple-400 transition">Find Tutors</Link></li>
            <li><Link to="/add-tutorial" className="hover:text-purple-400 transition">Add Tutorial</Link></li>
            <li><Link to="/my-tutorials" className="hover:text-purple-400 transition">My Tutorials</Link></li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-purple-200">Popular Languages</h2>
          <ul className="space-y-2 text-sm">
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
            <li>Mandarin</li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-purple-200">Connect With Us</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-400 text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300 text-xl"><FaLinkedin /></a>
          </div>
          <p className="text-sm text-gray-400">Email: support@globallern.com</p>
          <p className="text-sm text-gray-400">Phone: +880 1234 567890</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {year} Globallearn. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
