import { useState } from "react";
import { useEffect } from "react";
import ExperienceCard from "./components/ExperienceCard";

function App() {
  const [experiences, setExperiences] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fetchExperiences() {
      const response = await fetch(
        "https://aghidayat.github.io/aghidayatweb/experiences.json",
      );
      const data = await response.json();
      setExperiences(data);
    }
    fetchExperiences();
  }, []);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <main className={`${darkMode ? "dark" : "light"}`}>
      <header className="py-12 border-b px-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">👋 Adi Gunawan Hidayat</h1>
            <h3 className="text-lg mt-2">SOFTWARE ENGINEER</h3>
            <p className="mt-4">
              Fullstack Developer with 6 years of experience in building robust
              web applications. Specializing in utilizing Node JS, Express JS,
              React Js, Next JS, and Tailwind to create efficient and responsive
              user interfaces. Passionate about Progressive Web Apps (PWAs), Git
              version control, Docker containerization, and AWS cloud services.
              Committed to delivering high-quality code and optimal user
              experiences.
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className="p-2 focus:outline-none h-10 w-10 text-2xl"
              onClick={toggleDarkMode}>
              {!darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </header>
      <section className="py-12 border-b px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">💼 My Experiences</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                years={experience?.years}
                title={experience?.title}
                description={experience?.description}
              />
            ))}
          </div>
        </div>
      </section>
      <footer className="py-12 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-semibold">🤙 Contact Me</h2>
          <p>
            Feel free to reach out to me at{" "}
            <div className="gap-x-2 flex">
              <a
                target="_blank"
                className="underline"
                href="mailto:adigunawanhidayat29@gmail.com"
                rel="noreferrer">
                Email
              </a>
              |
              <a
                target="_blank"
                className="underline"
                href="https://linkedin.com/in/adigunawanhidayat"
                rel="noreferrer">
                Linkedin
              </a>
              {/* |
              <a
                target="_blank"
                className="underline"
                href="https://wa.me/6289627302553"
                rel="noreferrer">
                Whatsapp
              </a> */}
            </div>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
