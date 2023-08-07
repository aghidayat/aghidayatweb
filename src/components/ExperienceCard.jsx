const ExperienceCard = ({ years, title, description }) => {
  return (
    <div className="bg-white py-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{years}</p>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default ExperienceCard;
