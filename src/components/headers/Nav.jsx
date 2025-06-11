import { useState, useContext } from "react";
import { Link, NavLink } from "react-router";

import { signOut } from "firebase/auth";

import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase/Firebase";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth).catch(err => console.log(err.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="block px-4 py-2 hover:bg-blue-100 rounded">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/find-tutors" className="block px-4 py-2 hover:bg-blue-100 rounded">
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-tutorial" className="block px-4 py-2 hover:bg-blue-100 rounded">
          Add Tutorial
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-tutorials" className="block px-4 py-2 hover:bg-blue-100 rounded">
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-booked-tutors" className="block px-4 py-2 hover:bg-blue-100 rounded">
          My Booked Tutors
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-tr from-purple-200 to-sky-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          GlobalLearn
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-gray-700 font-medium">{navLinks}</ul>

        {/* Auth Buttons */}
        <ul className="flex gap-3 text-gray-800 font-medium">
          {user ? (
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="hover:underline">Login</NavLink>
              <NavLink to="/register" className="hover:underline">Register</NavLink>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-medium">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
