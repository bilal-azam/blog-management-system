import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { getMe, loginUser, registerUser } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is authenticated on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await getMe();
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (err) {
        localStorage.removeItem('token');
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Register user
  const register = async (formData) => {
    try {
      const { token, ...userData } = await registerUser(formData);
      localStorage.setItem('token', token);
      setUser(userData);
      setIsAuthenticated(true);
      setError(null);
      return userData;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      const { token, ...userData } = await loginUser(formData);
      localStorage.setItem('token', token);
      setUser(userData);
      setIsAuthenticated(true);
      setError(null);
      return userData;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        error,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);