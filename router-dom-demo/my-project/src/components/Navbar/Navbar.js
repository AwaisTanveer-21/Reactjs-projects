import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h2 className="font-bold text-xl">at-developer</h2>
      <ul className="flex gap-4">
        <li><NavLink to="/" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "text-yellow-400" : ""}>About</NavLink></li>
        <li><NavLink to="/catalog" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Catalog</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Contact</NavLink></li>
        <li><NavLink to="/login" className={({isActive}) => isActive ? "text-yellow-400" : ""}>Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
