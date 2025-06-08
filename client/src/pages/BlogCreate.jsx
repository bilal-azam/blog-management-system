import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogCreate = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { loading, error, addBlog } = useBlog();

  const handleSubmit = async (data) => {
    await addBlog(data);
    navigate('/dashboard');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Blog Post</h1>

      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <BlogForm
        onSubmit={handleSubmit}
        submitText="Create"
      />
    </div>
  );
};

export default BlogCreate;