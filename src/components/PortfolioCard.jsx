const PortfolioCard = ({
  title,
  description,
  technologies,
  link,
  imageUrl = null,
}) => {
  return (
    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description.length > 200
          ? `${description.substring(0, 200)}...`
          : description}
      </p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
          View Project
        </a>
      )}
    </div>
  );
};

export default PortfolioCard;
