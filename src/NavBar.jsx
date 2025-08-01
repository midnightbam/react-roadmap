// src/components/NavBar.jsx
import React from 'react';


const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b bg-white">
      <div className="text-2xl font-bold text-gray-900 tracking-tight select-none">
        hh<span className="text-primary">.</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-6 py-2 rounded-full text-sm border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 font-medium transition">Log in</button>
        <button className="px-6 py-2 rounded-full text-sm bg-black text-white font-medium hover:bg-gray-800 transition shadow">Sign up</button>
      </div>
    </nav>
  );
};

export default NavBar;
