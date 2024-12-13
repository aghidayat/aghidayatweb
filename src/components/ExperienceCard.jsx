const ExperienceCard = ({ years, title, description, link }) => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">
        {link ? (
          <a
            className="text-blue-900 hover:text-blue-950 transition duration-300 ease-in-out"
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
      <p className="">{description}</p>
    </div>
  );
};

export default ExperienceCard;
