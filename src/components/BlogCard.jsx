import { memo } from "react";

const BlogCard = ({ title, description, link, imageUrl }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full border dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition duration-500 ease-in-out">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
          loading="lazy"
        />
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}...</p>
    </a>
  );
};

export default memo(BlogCard);
