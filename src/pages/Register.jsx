import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Register = () => {
  const { register, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      await register(email, password);

      await fetch("https://globallern-server.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      toast.success("🎉 Registration successful!");
      navigate("/");
    } catch (err) {
      toast.error("Registration failed: " + err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const result = await googleLogin();
      const user = result.user;

      await fetch("https://globallern-server.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: user.displayName, email: user.email }),
      });

      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google login failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 dark:text-white bg-opacity-90 rounded-3xl shadow-2xl p-10">
        <h2 className="text-center text-4xl font-extrabold text-pink-700 dark:text-pink-400 mb-8">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border-2 border-pink-400 dark:border-pink-500 bg-white dark:bg-gray-800 focus:outline-none focus:border-pink-600 transition"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border-2 border-pink-400 dark:border-pink-500 bg-white dark:bg-gray-800 focus:outline-none focus:border-pink-600 transition"
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            className="w-full p-3 rounded-lg border-2 border-pink-400 dark:border-pink-500 bg-white dark:bg-gray-800 focus:outline-none focus:border-pink-600 transition"
          />

          {error && <p className="text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
        </form>

        <div className="my-6 flex items-center justify-center gap-4 text-pink-700 dark:text-pink-400 font-semibold">
          <hr className="w-14 border-pink-700 dark:border-pink-400" />
          OR
          <hr className="w-14 border-pink-700 dark:border-pink-400" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 border-2 border-pink-500 text-pink-700 dark:text-pink-300 py-3 rounded-xl shadow-lg hover:bg-pink-100 dark:hover:bg-gray-800 transition"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
