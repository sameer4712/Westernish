"use client";
import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md">
          <button className="flex items-center text-black font-bold text-lg mb-6 hover:opacity-70">
            <span className="mr-2">←</span> Go Back
          </button>

          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center lg:text-left">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your firstname"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your lastname"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3A5B22] hover:bg-green-800 text-white font-medium py-3 rounded-lg transition"
            >
              Signup
            </button>
            <div className="text-center text-gray-500 text-sm">Or</div>
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <span className="text-sm font-medium">Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-100 overflow-hidden">
        <div className="relative w-[520px] h-[520px]">
          <div className="absolute top-0 left-0 w-56 h-36 bg-blue-100 rounded-3xl shadow-lg flex items-center justify-center text-4xl">
            👋💻
          </div>
          <div className="absolute top-14 right-0 w-56 h-44 bg-yellow-100 rounded-3xl shadow-lg flex items-center justify-center text-4xl">
            😊💻
          </div>
          <div className="absolute bottom-20 left-10 w-48 h-32 bg-purple-100 rounded-3xl shadow-lg flex items-center justify-center text-3xl">
            📹👩‍💼
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-32 bg-black rounded-3xl shadow-lg flex items-center justify-center text-yellow-400 font-semibold">
            job search 🔍
          </div>
        </div>
      </div>
    </div>
  );
}
