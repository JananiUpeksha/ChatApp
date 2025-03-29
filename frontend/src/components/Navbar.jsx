import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Home</a>
        <div className="space-x-4">
          <a href="/profile" className="text-white">Profile</a>
          <a href="/settings" className="text-white">Settings</a>
          <a href="/login" className="text-white">Login</a>
          <a href="/signup" className="text-white">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
