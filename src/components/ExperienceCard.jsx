const ExperienceCard = ({ years, title, description, link, imageUrl }) => {
  return (
    <div className="py-4 flex items-start space-x-4">
      {/* Display the company logo if an imageUrl URL is provided */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${title} logo`}
          className="w-16 h-16 object-contain rounded"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {link ? (
            <a
              className="text-blue-900 dark:text-white hover:text-blue-950 dark:hover:text-gray-400 transition duration-300 ease-in-out"
              href={link}
              target="_blank"
              rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mb-2">{years}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
