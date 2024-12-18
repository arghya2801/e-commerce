import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Log in to your account
          </h2>
          <form action="" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#78009c] hover:bg-[#6c5ce7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#78009c]"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="font-medium px-2 text-[#78009c] hover:text-[#6c5ce7]"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
