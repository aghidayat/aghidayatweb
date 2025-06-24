import { useCallback, useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import PortfolioCard from "./components/PortfolioCard";
import BlogCard from "./components/BlogCard";
import TestimonialCard from "./components/TestimonialCard";
import Pagination from "./components/Pagination";
import FileCV from "./assets/Resume-Adi-Gunawan-Hidayat-2024.pdf";
import { Helmet } from "react-helmet";
import {
  general,
  experiences,
  projects,
  blogs,
  testimonials,
  awards,
} from "./datas";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeLanguage = (lang) => setLanguage(lang);

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
        <meta property="og:title" content="Adi Gunawan Hidayat Portfolio" />
        <meta
          property="og:description"
          content={general[language].description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aghidayat.github.io/" />
      </Helmet>

      {/* Header */}
      <header className="border-b dark:border-gray-800 py-6 px-4 sm:px-6">
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
      <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            💼 {general[language].experiences}
          </h2>
          <div className="grid gap-6">
            {experiences.map((experience) => (
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
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">📂 Projects</h2>
          <Pagination items={projects} itemsPerPage={3}>
            {renderProject}
          </Pagination>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            🏆 Certifications & Awards
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

      {/* Blog/Insights Section */}
      <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">📝 Blog & Insights</h2>
          <Pagination items={blogs} itemsPerPage={3}>
            {(blog) => (
              <BlogCard
                key={`blog-${blog.link}`}
                title={blog.title}
                description={blog.description}
                link={blog.link}
                imageUrl={blog.imageUrl}
              />
            )}
          </Pagination>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">🌟 Testimonials</h2>
          <Pagination items={testimonials} itemsPerPage={3}>
            {(testimonial) => (
              <TestimonialCard
                key={`testimonial-${testimonial.name}`}
                description={testimonial.description[language]}
                name={testimonial.name}
                from={testimonial.from[language]}
              />
            )}
          </Pagination>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-2xl font-bold mb-6 md:mb-0">
            {general[language].contact}
          </h2>
          <div className="space-y-2 md:text-left">
            <p>{general[language].contact_me}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="mailto:adigunawanhidayat29@gmail.com"
                className="underline">
                {general[language].email}
              </a>
              <a
                href="https://linkedin.com/in/adigunawanhidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {general[language].linkedin}
              </a>
              <a
                href="https://www.youtube.com/@aghidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {general[language].youtube}
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01a9461874fc31127d"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {general[language].upwork}
              </a>
              <a
                href="https://github.com/aghidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {general[language].github}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
