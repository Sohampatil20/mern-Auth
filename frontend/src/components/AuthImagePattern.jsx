import { useState } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-black p-12 relative overflow-hidden">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <div className="hyperspeed-bg"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-8">{subtitle}</p>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-8 py-4 border-2 border-indigo-500 rounded-lg bg-transparent text-indigo-500 font-semibold text-lg uppercase transform transition duration-300 hover:border-indigo-300 hover:text-indigo-300 hover:scale-105">
            Sign In
          </button>
          <button className="px-8 py-4 border-2 border-purple-500 rounded-lg bg-transparent text-purple-500 font-semibold text-lg uppercase transform transition duration-300 hover:border-purple-300 hover:text-purple-300 hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
