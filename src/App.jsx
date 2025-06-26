import { useState } from "react";
import FileCV from "./assets/Resume-Adi-Gunawan-Hidayat-2024.pdf";
import { Helmet } from "react-helmet";
import {
  general,
  experiences,
  projects,
  blogs,
  testimonials,
  awards,
  contact,
} from "./datas";
import ExperienceSection from "./sections/ExperienceSection";
import AwardSection from "./sections/AwardSection";
import FooterSection from "./sections/FooterSection";
import TestimonialSection from "./sections/TestimonialSection";
import BlogSection from "./sections/BlogSection";
import ProjectSection from "./sections/ProjectSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "dark" : "light"
      } transition-colors`}>
      {/* ✅ Helmet SEO Meta Tags */}
      <Helmet>
        <title>
          {general[language].title} - {general[language].subtitle}
        </title>
        <meta name="description" content={general[language].description} />
        <meta name="author" content="Adi Gunawan Hidayat" />
        <meta property="og:title" content="Adi Gunawan Hidayat - Portfolio" />
        <meta
          property="og:description"
          content={general[language].description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aghidayat.github.io/" />
      </Helmet>

      {/* Header */}
      <header className="border-b dark:border-gray-800 py-6 px-4 sm:px-6 shadow-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">{general[language].title}</h1>
            <h2 className="text-xl mt-2">{general[language].subtitle}</h2>
            <p className="mt-4">{general[language].description}</p>
            <div className="mt-5">
              <a
                href={FileCV}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:shadow-md transition-shadow rounded-md border dark:border-gray-500 bg-transparent">
                {general[language].download_cv}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 self-start">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="h-10 px-4 rounded-md border dark:border-gray-700 bg-transparent">
              <option value="EN">🇬🇧 EN</option>
              <option value="ID">🇮🇩 ID</option>
            </select>
            <button
              onClick={toggleDarkMode}
              className="h-10 w-10 flex items-center justify-center rounded-md border dark:border-gray-700 bg-transparent text-xl">
              {darkMode ? "🌙" : "💡"}
            </button>
          </div>
        </div>
      </header>

      {/* Experiences Section */}
      <ExperienceSection
        general={general}
        language={language}
        experiences={experiences}
      />

      {/* Portfolio Section */}
      <ProjectSection
        general={general}
        language={language}
        projects={projects}
      />

      {/* Certifications & Awards Section */}
      <AwardSection general={general} language={language} awards={awards} />

      {/* Blog/Insights Section */}
      <BlogSection general={general} language={language} blogs={blogs} />

      {/* Testimonials Section */}
      <TestimonialSection
        general={general}
        language={language}
        testimonials={testimonials}
      />

      {/* Contact Section */}
      <FooterSection general={general} language={language} contact={contact} />
    </main>
  );
}

export default App;
