import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2 md:px-0">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Welcome to Skill Swap Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Connect with talented individuals, offer your skills, and find the perfect
          match for your learning journey. Browse public profiles, send swap requests,
          and grow together!
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <a
            href="/swap-requests"
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition-colors text-center"
          >
            Explore Skill Swaps
          </a>
          <a
            href="/profile"
            className="w-full md:w-auto bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg shadow hover:bg-gray-300 transition-colors text-center"
          >
            Edit Your Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
