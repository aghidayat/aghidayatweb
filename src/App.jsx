import { useState } from "react";
import ExperienceCard from "./components/ExperienceCard";

function App() {
  const experiences = [
    {
      years: "2023 - NOW",
      title: "PT Ihsan Solusi | Fullstack Developer",
      description:
        "As a Fullstack Developer at PT Ihsan Solusi, I am responsible for designing and developing a comprehensive sharia banking system that adheres to Islamic financial principles. Leveraging Python for the backend and React.js for the frontend, I have built a robust and scalable system that enables efficient and secure banking operations",
    },
    {
      years: "2020 - 2023",
      title: "PT SIRKEL KREASI NUSANTARA | Fullstack Developer",
      description:
        "I Work as a Fullstack Developer, I use React.js, Next.js, Node.js, and Tailwind to develop modern web applications. My responsibilities include designing user interfaces, designing databases, managing application performance, and conducting tests to ensure optimal performance and a good user experience. I also keep abreast of the latest technology to create innovative solutions.",
    },
    {
      years: "2017 - 2020",
      title: "PT DATAQUEST LEVERAGE INDONESIA | FULLSTACK Developer",
      description:
        "I work as a Fullstack Developer, I use Laravel and Bootstrap to develop modern web applications for Learning Management System. My responsibilities include designing databases, managing application performance, and ensure optimal performance and a good user experience",
    },
    {
      years: "2015 - 2017",
      title: "PT PANEN MAYA DIGITAL | FRONTEND DEVELOPER",
      description:
        "I work as frontend developer, implementing responsive web design on every platform, api integration and working with back end team for data integration. Technologies utilized: HTML, CSS, Javascript, PHP",
    },
  ];

  const [darkMode, setDarkMode] = useState(false);

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
              |
              <a
                target="_blank"
                className="underline"
                href="https://wa.me/6289627302553"
                rel="noreferrer">
                Whatsapp
              </a>
            </div>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
