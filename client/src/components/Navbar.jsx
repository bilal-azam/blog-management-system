import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
          Blog Management
        </Link>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link 
                to="/blogs" 
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Blogs
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Logout
              </button>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}