import React, { createContext, useContext, useState } from 'react';
import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../utils/api';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getBlogs();
      setBlogs(data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get single blog
  const fetchBlog = async (id) => {
    try {
      setLoading(true);
      const data = await getBlog(id);
      setCurrentBlog(data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create blog
  const addBlog = async (blogData) => {
    try {
      setLoading(true);
      const data = await createBlog(blogData);
      setBlogs([data, ...blogs]);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update blog
  const editBlog = async (id, blogData) => {
    try {
      setLoading(true);
      const data = await updateBlog(id, blogData);
      setBlogs(blogs.map((blog) => (blog._id === id ? data : blog)));
      setCurrentBlog(data);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const removeBlog = async (id) => {
    try {
      setLoading(true);
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        currentBlog,
        loading,
        error,
        fetchBlogs,
        fetchBlog,
        addBlog,
        editBlog,
        removeBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);