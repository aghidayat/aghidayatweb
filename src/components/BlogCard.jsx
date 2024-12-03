const BlogCard = ({ title, description, link }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline mt-4 block">
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
