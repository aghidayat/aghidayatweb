import { memo, useCallback } from "react";
import Pagination from "../components/Pagination";
import PortfolioCard from "../components/PortfolioCard";

const ProjectSection = ({ general, language, projects }) => {
  const renderProject = useCallback(
    (project) => (
      <PortfolioCard
        key={`project-${project.slug}`}
        title={project.title[language]}
        description={project.description[language]}
        technologies={project.technologies}
        link={project.link}
        imageUrl={project.imageUrl}
      />
    ),
    [language],
  );

  return (
    <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          📂 {general[language].projects}
        </h2>
        <Pagination items={projects} itemsPerPage={3}>
          {renderProject}
        </Pagination>
      </div>
    </section>
  );
};

export default memo(ProjectSection);
