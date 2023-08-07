import { useState } from "react";
import { useEffect } from "react";
import ExperienceCard from "./components/ExperienceCard";

function App() {
  const [experiences, setExperiences] = useState([]);

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

  return (
    <>
      <header className="bg-white-500 text-white py-12 border-b-2 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-black">
            👋 Adi Gunawan Hidayat
          </h1>
          <h3 className="text-lg text-black mt-2">SOFTWARE ENGINEER</h3>
          <p className="mt-4 text-black">
            Fullstack Developer with 6 years of experience in building robust
            web applications. Specializing in utilizing Node JS, Express JS,
            React Js, Next JS, and Tailwind to create efficient and responsive
            user interfaces. Passionate about Progressive Web Apps (PWAs), Git
            version control, Docker containerization, and AWS cloud services.
            Committed to delivering high-quality code and optimal user
            experiences.
          </p>
        </div>
      </header>
      <section className="py-12 border-b-2 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">🧰 My Experiences</h1>
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
      <footer className="py-12 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">🤙 Contact Me</h2>
          <p className="text-gray-700">
            Feel free to reach out to me at{" "}
            <div className="gap-x-2 flex">
              <a
                target="_blank"
                className="text-blue-500 underline"
                href="mailto:adigunawanhidayat29@gmail.com"
                rel="noreferrer">
                Email
              </a>
              |
              <a
                target="_blank"
                className="text-blue-500 underline"
                href="https://linkedin.com/in/adigunawanhidayat"
                rel="noreferrer">
                Linkedin
              </a>
            </div>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
