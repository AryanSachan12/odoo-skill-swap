import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-slate-800">Skill Swap</h1>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-slate-700 hover:text-slate-900 transition-colors font-medium relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/login" className="text-slate-700 hover:text-slate-900 transition-colors font-medium relative group">
          Login
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/profile" className="text-slate-700 hover:text-slate-900 transition-colors font-medium relative group">
          Profile
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/swap-requests" className="text-slate-700 hover:text-slate-900 transition-colors font-medium relative group">
          Swap Requests
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      
      <button
        className="md:hidden text-slate-700 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-100"
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
        <nav className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 flex flex-col space-y-4 py-6 px-6">
          <Link to="/" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Home</Link>
          <Link to="/login" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Login</Link>
          <Link to="/profile" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Profile</Link>
          <Link to="/swap-requests" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Swap Requests</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
