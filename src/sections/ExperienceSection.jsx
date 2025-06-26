import { memo, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";

const ExperienceSection = ({ general, language, experiences }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          💼 {general[language].experiences}
        </h2>

        <div className="grid gap-6">
          {visibleExperiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.link}`}
              years={experience.years[language]}
              title={experience.title[language]}
              description={experience.description[language]}
              link={experience.link}
              imageUrl={experience.imageUrl}
            />
          ))}
        </div>

        {/* Tombol Expand/Collapse */}
        {experiences.length > 3 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`py-2 px-4 rounded-md mx-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ease-in-out`}>
              {showAll
                ? general[language].show_less
                : general[language].show_more}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(ExperienceSection);
