import { useState } from "react";
import ExperienceCard from "./components/ExperienceCard";

function App() {
  const experiences = [
    {
      years: "2023 - Now",
      title: {
        EN: "PT Ihsan Solusi | Fullstack Developer",
        ID: "PT Ihsan Solusi | Pengembang Fullstack",
      },
      description: {
        EN: "As a Fullstack Developer at PT Ihsan Solusi, I am responsible for designing and developing a comprehensive sharia banking system that adheres to Islamic financial principles. Leveraging Python for the backend and React.js for the frontend, I have built a robust and scalable system that enables efficient and secure banking operations",
        ID: "Sebagai Pengembang Fullstack di PT Ihsan Solusi, saya bertanggung jawab untuk merancang dan mengembangkan sistem perbankan syariah yang komprehensif yang memenuhi prinsip-prinsip keuangan Islam. Menggunakan Python untuk backend dan React.js untuk frontend, saya telah membangun sistem yang kokoh dan skalabel yang memungkinkan operasi perbankan yang efisien dan aman",
      },
    },
    {
      years: "2020 - 2023",
      title: {
        EN: "PT SIRKEL KREASI NUSANTARA | Fullstack Developer",
        ID: "PT SIRKEL KREASI NUSANTARA | Pengembang Fullstack",
      },
      description: {
        EN: "I Work as a Fullstack Developer, I use React.js, Next.js, Node.js, and Tailwind to develop modern web applications. My responsibilities include designing user interfaces, designing databases, managing application performance, and conducting tests to ensure optimal performance and a good user experience. I also keep abreast of the latest technology to create innovative solutions.",
        ID: "Saya bekerja sebagai Pengembang Fullstack, saya menggunakan React.js, Next.js, Node.js, dan Tailwind untuk mengembangkan aplikasi web modern. Tanggung jawab saya termasuk merancang antarmuka pengguna, merancang database, mengelola kinerja aplikasi, dan melakukan pengujian untuk memastikan kinerja optimal dan pengalaman pengguna yang baik. Saya juga tetap up-to-date dengan teknologi terbaru untuk menciptakan solusi inovatif.",
      },
    },
    {
      years: "2017 - 2020",
      title: {
        EN: "PT DATAQUEST LEVERAGE INDONESIA | FULLSTACK Developer",
        ID: "PT DATAQUEST LEVERAGE INDONESIA | PENGEMBANG FULLSTACK",
      },
      description: {
        EN: "I work as a Fullstack Developer, I use Laravel and Bootstrap to develop modern web applications for Learning Management System. My responsibilities include designing databases, managing application performance, and ensuring optimal performance and a good user experience",
        ID: "Saya bekerja sebagai Pengembang Fullstack, saya menggunakan Laravel dan Bootstrap untuk mengembangkan aplikasi web modern untuk Sistem Manajemen Pembelajaran. Tanggung jawab saya termasuk merancang database, mengelola kinerja aplikasi, dan memastikan kinerja optimal dan pengalaman pengguna yang baik",
      },
    },
    {
      years: "2015 - 2017",
      title: {
        EN: "PT PANEN MAYA DIGITAL | FRONTEND DEVELOPER",
        ID: "PT PANEN MAYA DIGITAL | PENGEMBANG FRONTEND",
      },
      description: {
        EN: "I work as frontend developer, implementing responsive web design on every platform, api integration and working with back end team for data integration. Technologies utilized: HTML, CSS, Javascript, PHP",
        ID: "Saya bekerja sebagai pengembang frontend, mengimplementasikan desain web yang responsif pada setiap platform, integrasi API dan bekerja dengan tim backend untuk integrasi data. Teknologi yang digunakan: HTML, CSS, Javascript, PHP",
      },
    },
  ];

  const translations = {
    EN: {
      title: "Portfolio",
      description:
        "Fullstack Developer with 6 years of experience in building robust web applications. Specializing in utilizing Node JS, Express JS, React Js, Next JS, and Tailwind to create efficient and responsive user interfaces. Passionate about Progressive Web Apps (PWAs), Git version control, Docker containerization, and AWS cloud services. Committed to delivering high-quality code and optimal user experiences.",
      contact: "Contact Me",
      email: "Email",
      linkedin: "Linkedin",
      whatsapp: "Whatsapp",
    },
    ID: {
      title: "Portfolio",
      description:
        "Pengembang Fullstack dengan 6 tahun pengalaman dalam membangun aplikasi web yang kokoh. Khusus dalam menggunakan Node JS, Express JS, React Js, Next JS, dan Tailwind untuk menciptakan antarmuka pengguna yang efisien dan responsif. Bersemangat tentang Progressive Web Apps (PWAs), kontrol versi Git, containerisasi Docker, dan layanan cloud AWS. Berkomitmen untuk mengirimkan kode berkualitas tinggi dan pengalaman pengguna yang optimal.",
      contact: "Hubungi Saya",
      email: "Email",
      linkedin: "Linkedin",
      whatsapp: "Whatsapp",
    },
  };

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  function changeLanguage(language) {
    setLanguage(language);
  }

  return (
    <main className={`${darkMode ? "dark" : "light"}`}>
      <header className="py-12 border-b px-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">
              👋 {translations[language].title}
            </h1>
            <h3 className="text-lg mt-2">SOFTWARE ENGINEER</h3>
            <p className="mt-4">{translations[language].description}</p>
          </div>
          <div className="flex flex-row justify-end gap-2">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="h-10 w-20 rounded-md text-lg">
              <option value="EN">🇬🇧 EN</option>
              <option value="ID">🇮🇩 ID</option>
            </select>
            <button
              className="h-10 w-10 text-2xl rounded-md focus:outline-none"
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
                years={experience.years}
                title={experience.title[language]}
                description={experience.description[language]}
              />
            ))}
          </div>
        </div>
      </section>
      <footer className="py-12 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {translations[language].contact}
          </h2>
          <p>
            Feel free to reach out to me at{" "}
            <div className="gap-x-2 flex">
              <a
                target="_blank"
                className="underline"
                href="mailto:adigunawanhidayat29@gmail.com"
                rel="noreferrer">
                {translations[language].email}
              </a>
              |
              <a
                target="_blank"
                className="underline"
                href="https://linkedin.com/in/adigunawanhidayat"
                rel="noreferrer">
                {translations[language].linkedin}
              </a>
              |
              <a
                target="_blank"
                className="underline"
                href="https://wa.me/6289627302553"
                rel="noreferrer">
                {translations[language].whatsapp}
              </a>
            </div>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
