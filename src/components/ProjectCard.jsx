const ProjectCard = ({ years, title, description }) => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="mb-2">{years}</p>
      <p className="">{description}</p>
    </div>
  );
};

export default ProjectCard;
