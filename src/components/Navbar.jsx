import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold font-serif">Skill Swap Platform</h1>
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors">Home</Link>
        <Link to="/login" className="text-gray-800 hover:text-blue-500 transition-colors">Login</Link>
        <Link to="/profile" className="text-gray-800 hover:text-blue-500 transition-colors">Profile</Link>
        <Link to="/swap-requests" className="text-gray-800 hover:text-blue-500 transition-colors">Swap Requests</Link>
      </nav>
      <button
        className="md:hidden text-gray-800 hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-2 py-4 px-6">
          <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/login" className="text-gray-800 hover:text-blue-500 transition-colors">Login</Link>
          <Link to="/profile" className="text-gray-800 hover:text-blue-500 transition-colors">Profile</Link>
          <Link to="/swap-requests" className="text-gray-800 hover:text-blue-500 transition-colors">Swap Requests</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
