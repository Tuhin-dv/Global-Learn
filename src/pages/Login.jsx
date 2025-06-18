import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error("Login failed: " + err.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;

      const savedUser = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: "student",
      };

      await fetch("https://globallern-server.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(savedUser),
      });

      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google login failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 dark:text-white rounded-3xl shadow-2xl p-10"
      >
        <h2 className="text-center text-4xl font-extrabold text-pink-700 dark:text-pink-400 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full p-3 rounded-lg border-2 border-pink-400 dark:border-pink-500 bg-white dark:bg-gray-800 focus:outline-none focus:border-pink-600 transition"
          />
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            required
            className="w-full p-3 rounded-lg border-2 border-pink-400 dark:border-pink-500 bg-white dark:bg-gray-800 focus:outline-none focus:border-pink-600 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white font-bold py-3 rounded-xl shadow-lg"
          >
            Login
          </motion.button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-6 flex items-center justify-center gap-3 border-2 border-pink-500 text-pink-700 dark:text-pink-300 py-3 rounded-xl shadow-lg hover:bg-pink-100 dark:hover:bg-gray-800 transition"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        <p className="text-sm text-center mt-6 text-pink-700 dark:text-pink-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold underline hover:text-red-500"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
