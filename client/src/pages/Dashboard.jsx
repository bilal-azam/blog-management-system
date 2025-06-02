import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
  const { user } = useAuth();
  const { blogs, loading, error, fetchBlogs } = useBlog();

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Dashboard</h1>
        <Link
          to="/blogs/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Create New Blog
        </Link>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs
          .filter((blog) => blog.author._id === user?._id)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>

      {blogs.filter((blog) => blog.author._id === user?._id).length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">You haven't created any blogs yet.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;