import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10"
      >
        <h2 className="text-center text-4xl font-extrabold text-pink-700 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg border-2 border-pink-400 focus:outline-none focus:border-pink-600 transition"
          />
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-lg border-2 border-pink-400 focus:outline-none focus:border-pink-600 transition"
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
          className="w-full mt-6 flex items-center  justify-center gap-3 border-2 border-pink-500 text-pink-700 font-semibold py-3 rounded-xl shadow-lg hover:bg-pink-100 transition"
        >
          Continue with Google <FcGoogle size={24} />
        </button>

        <p className="text-sm text-center mt-6 text-pink-700">
          Don’t have an account?{" "}
          <Link to="/register" className="font-semibold underline hover:text-red-500">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
