import React, { useState } from 'react';

const HomePage = () => {
 
  const handleLogout = () => {
    // Clear cookies, localStorage, or call API to logout
    alert("You have been logged out!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">

      {/* Navbar */}
      <nav className="bg-gray-950  py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold text-white hover:text-gray-300">
            <a href="#">MyApp</a>
          </div>
          <div className="space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">Features</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-cover bg-center relative text-center"
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-0.5s">
            Welcome Back, Superstar!
          </h1>
          <p className="text-2xl md:text-3xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            You are now part of something extraordinary. Let's get to work!
          </p>
          <button className="bg-yellow-500 px-6 py-3 text-2xl font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
            Explore Dashboard
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Your Dashboard Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Manage Profile</h3>
            <p className="text-gray-700 mb-6">Update your personal information and settings anytime.</p>
            <button className="bg-indigo-500 py-3 px-6 rounded-lg text-white text-xl font-semibold hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
              Update Now
            </button>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-semibold text-teal-800 mb-4">Your Activities</h3>
            <p className="text-gray-700 mb-6">View your progress, activities, and track your performance.</p>
            <button className="bg-teal-500 py-3 px-6 rounded-lg text-white text-xl font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
              Check Progress
            </button>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">Notifications</h3>
            <p className="text-gray-700 mb-6">Stay updated with important alerts and messages.</p>
            <button className="bg-blue-500 py-3 px-6 rounded-lg text-white text-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              View Alerts
            </button>
          </div>
          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-semibold text-purple-800 mb-4">Settings</h3>
            <p className="text-gray-700 mb-6">Change your settings and configure your account preferences.</p>
            <button className="bg-purple-500 py-3 px-6 rounded-lg text-white text-xl font-semibold hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
              Configure Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-center py-4 mt-10">
        <p className="text-white mb-4">All Rights Reserved &copy; 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
