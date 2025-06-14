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
        <NavLink to="/" className="block px-4 py-2 hover:text-white hover:bg-indigo-700 rounded transition">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/find-tutors" className="block px-4 py-2 hover:text-white hover:bg-indigo-700 rounded transition">
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-tutorial" className="block px-4 py-2 hover:text-white hover:bg-indigo-700 rounded transition">
          Add Tutorial
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-tutorials" className="block px-4 py-2 hover:text-white hover:bg-indigo-700 rounded transition">
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-booked-tutors" className="block px-4 py-2 hover:text-white hover:bg-indigo-700 rounded transition">
          My Booked Tutors
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white tracking-wide">
          GlobalLearn
        </Link>

        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          {navLinks}
        </ul>

        <ul className="flex gap-3 text-white font-medium items-center">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded text-white transition"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded transition"
              >
                Register
              </NavLink>
            </>
          )}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
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

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900">
          <ul className="space-y-2 text-white font-medium">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
