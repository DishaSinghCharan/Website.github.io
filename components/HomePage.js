// components/HomePage.js
"use client";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to FAM4U!
        </h1>
        <p className="text-gray-600 mb-6">
          FAM4U is here to connect people through understanding and
          companionship. Explore, connect, and make a difference in someone's
          life today.
        </p>
        <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
}
