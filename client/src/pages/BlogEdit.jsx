import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentBlog: blog, loading, error, fetchBlog, editBlog } = useBlog();

  useEffect(() => {
    fetchBlog(id);
  }, [id]);

  const handleSubmit = async (data) => {
    await editBlog(id, data);
    navigate(`/blogs/${id}`);
  };

  if (loading) return <LoadingSpinner />;
  if (!blog) return <div>Blog not found</div>;
  if (user?._id !== blog.author?._id) return <div>Not authorized</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Blog Post</h1>

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
        defaultValues={{ title: blog.title, content: blog.content }}
        submitText="Update"
      />
    </div>
  );
};

export default BlogEdit;