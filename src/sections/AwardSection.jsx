import { memo } from "react";

const AwardSection = ({ general, language, awards }) => {
  return (
    <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          🏆 {general[language].awards}
        </h2>
        <ul className="list-disc pl-6">
          {awards.map((award) => (
            <li key={`awards-${award}`} className="mb-4">
              {award}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(AwardSection);
