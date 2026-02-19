import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to login");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Niranjan Indoor Plants</title>
        <meta name="description" content="Login to your account to manage orders and view your profile." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1463320726281-696a41370fa3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-md w-full space-y-8 bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl relative z-10">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to continue to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 text-lg"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 text-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-bold rounded-lg text-gray-900 bg-lime-300 hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 disabled:opacity-50 transition-colors duration-200"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-base text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-lime-700 hover:text-lime-600 transition-colors duration-200">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
