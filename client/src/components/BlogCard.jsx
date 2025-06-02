import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <Link to={`/blogs/${blog._id}`} className="block">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-primary">
              {blog.title}
            </h3>
          </Link>
          <span className="text-sm text-gray-500">
            {format(new Date(blog.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-2">{blog.content}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-gray-500">By {blog.author?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;