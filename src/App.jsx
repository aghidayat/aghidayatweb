import { useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import PortfolioCard from "./components/PortfolioCard";
import BlogCard from "./components/BlogCard";
import TestimonialCard from "./components/TestimonialCard";
import Pagination from "./components/Pagination";

function App() {
  const translations = {
    EN: {
      title: "Adi Gunawan Hidayat",
      description:
        "A passionate Fullstack Developer with over 6 years of experience creating powerful web applications. Skilled in leveraging modern technologies like Node.js, Express.js, React.js, and Tailwind, I deliver solutions that combine efficiency with elegance. My expertise spans Progressive Web Apps (PWAs), Git version control, Docker, and AWS cloud services. I thrive on crafting exceptional user experiences and writing clean, high-quality code that makes an impact.",
      contact: "🤙 Let's Connect!",
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      contact_me: "I’d love to hear from you! Feel free to reach out:",
      youtube: "Youtube",
    },
    ID: {
      title: "Adi Gunawan Hidayat",
      description:
        "Seorang Pengembang Fullstack yang bersemangat dengan lebih dari 6 tahun pengalaman menciptakan aplikasi web yang andal. Terampil menggunakan teknologi modern seperti Node.js, Express.js, React.js, dan Tailwind untuk menghasilkan solusi yang efisien dan elegan. Keahlian saya meliputi Progressive Web Apps (PWAs), kontrol versi Git, Docker, dan layanan cloud AWS. Saya menikmati menciptakan pengalaman pengguna yang luar biasa dan menulis kode berkualitas tinggi yang memberikan dampak.",
      contact: "🤙 Hubungi Saya!",
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      contact_me: "Saya akan senang mendengar dari Anda! Silakan hubungi:",
      youtube: "Youtube",
    },
  };

  const experiences = [
    {
      ID: {
        years: "2023 - Sekarang",
        title: "PT Ihsan Solusi | Pengembang Aplikasi Fullstack",
        description:
          "Sebagai pengembang aplikasi fullstack di PT Ihsan Solusi, saya bertanggung jawab untuk merancang dan mengembangkan sistem perbankan syariah yang komprehensif yang memenuhi prinsip-prinsip keuangan Islam. Menggunakan Python untuk backend dan React.js untuk frontend, saya telah membangun sistem yang kokoh dan skalabel yang memungkinkan operasi perbankan yang efisien dan aman.",
      },
      EN: {
        years: "2023 - Present",
        title: "PT Ihsan Solusi | Fullstack Application Developer",
        description:
          "As a fullstack application developer at PT Ihsan Solusi, I am responsible for designing and developing a comprehensive sharia banking system that adheres to Islamic financial principles. Utilizing Python for the backend and React.js for the frontend, I have built a robust and scalable system that enables efficient and secure banking operations.",
      },
    },
    {
      ID: {
        years: "2020 - 2023",
        title: "PT SIRKEL KREASI NUSANTARA | Pengembang Aplikasi Fullstack",
        description:
          "Saya bekerja sebagai pengembang aplikasi fullstack, menggunakan React.js, Next.js, Node.js, dan Tailwind untuk mengembangkan aplikasi web modern. Tanggung jawab saya mencakup mendesain antarmuka pengguna, mendesain database, mengoptimalkan kinerja aplikasi, dan melakukan pengujian untuk memastikan kinerja yang optimal dan pengalaman pengguna yang memuaskan. Saya juga selalu memperbarui pengetahuan saya dengan teknologi terkini untuk menciptakan solusi inovatif.",
      },
      EN: {
        years: "2020 - 2023",
        title: "PT SIRKEL KREASI NUSANTARA | Fullstack Application Developer",
        description:
          "I worked as a fullstack application developer, utilizing React.js, Next.js, Node.js, and Tailwind to develop modern web applications. My responsibilities included designing user interfaces, designing databases, optimizing application performance, and conducting tests to ensure optimal performance and a satisfying user experience. I also stayed up-to-date with the latest technology to create innovative solutions.",
      },
    },
    {
      ID: {
        years: "2017 - 2020",
        title:
          "PT DATAQUEST LEVERAGE INDONESIA | Pengembang Aplikasi Fullstack",
        description:
          "Saya bekerja sebagai pengembang aplikasi fullstack, menggunakan Laravel dan Bootstrap untuk mengembangkan aplikasi web modern untuk Sistem Manajemen Pembelajaran. Tanggung jawab saya mencakup mendesain database, mengoptimalkan kinerja aplikasi, dan memastikan kinerja yang optimal serta pengalaman pengguna yang memuaskan.",
      },
      EN: {
        years: "2017 - 2020",
        title:
          "PT DATAQUEST LEVERAGE INDONESIA | Fullstack Application Developer",
        description:
          "I worked as a fullstack application developer, utilizing Laravel and Bootstrap to develop modern web applications for Learning Management System. My responsibilities included designing databases, optimizing application performance, and ensuring optimal performance and a satisfying user experience.",
      },
    },
    {
      ID: {
        years: "2015 - 2017",
        title: "PT PANEN MAYA DIGITAL | Pengembang Frontend",
        description:
          "Saya bekerja sebagai pengembang frontend, mengimplementasikan desain web yang responsif pada setiap platform, mengintegrasikan API, dan bekerja sama dengan tim backend untuk mengintegrasikan data. Teknologi yang digunakan: HTML, CSS, JavaScript, PHP.",
      },
      EN: {
        years: "2015 - 2017",
        title: "PT PANEN MAYA DIGITAL | Frontend Developer",
        description:
          "I worked as a frontend developer, implementing responsive web design on every platform, integrating APIs, and collaborating with the backend team for data integration. Technologies utilized: HTML, CSS, JavaScript, PHP.",
      },
    },
  ];

  const projects = [
    {
      ID: {
        title: "SampApp",
        description:
          "SampApp adalah platform e-learning gamifikasi bagi pengguna Indonesia untuk memahami cara mengonsumsi dan membuang barang plastik serta tanggung jawab pengemasan.",
        technologies: ["React Native", "Android", "Ios"],
        link: "https://vel.earth/sampapp",
      },
      EN: {
        title: "SampApp",
        description:
          "SampApp is a gamified e-learning platform for Indonesian users to understand how to consume and dispose of plastic goods and packaging responsibility",
        technologies: ["React Native", "Android", "Ios"],
        link: "https://vel.earth/sampapp",
      },
    },
    {
      ID: {
        title: "RECO",
        description:
          "RECO memberdayakan para pemulung informal di seluruh Indonesia dan mempekerjakan mereka di RECO MRF dan Pabrik dengan Upah yang Adil, Lingkungan Kerja yang Aman dan Peluang untuk meningkatkan kompetensi mereka dan bekerja di posisi manajemen.",
        technologies: ["React Native", "Android", "Ios"],
        link: "https://recovered.id/",
      },
      EN: {
        title: "RECO",
        description:
          "RECO empowering informal wastepickers around Indonesia and employ them in RECO MRFs and Factories with Fair Wages, Safe Work Environment and Chances to increase their competencies and work in management position.",
        technologies: ["React Native", "Android", "Ios"],
        link: "https://recovered.id/",
      },
    },
    {
      ID: {
        title: "Read Quran App",
        description:
          "Mengembangkan aplikasi mobile untuk membaca dan memahami Al-Quran lebih menyenangkan.",
        technologies: ["Javascript", "HTML"],
        link: "https://aghidayat-quran.vercel.app/",
      },
      EN: {
        title: "Read Quran App",
        description:
          "Developed a mobile app for reading and understanding the Quran in a more engaging way.",
        technologies: ["Javascript", "HTML"],
        link: "https://aghidayat-quran.vercel.app/",
      },
    },
  ];

  const blogs = [
    {
      title: "Designing Scalable Systems: A Technical Guide",
      description:
        "As software applications grow, system designers need to plan for scalability to handle increasing users and data",
      link: "https://medium.com/@gargg/designing-scalable-systems-a-technical-guide-c15f0c700c23",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*G4GUpnrr3ElOXnVhAqn5Ig.png",
    },
    {
      title: "High-Level System Architecture of Booking.com",
      description:
        "Serving millions of users worldwide, Booking.com has a dynamic system architecture to meet ever-changing customer expectations and integrate technological innovations",
      link: "https://medium.com/@sahintalha1/high-level-system-architecture-of-booking-com-06c199003d94",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jlMN0nRazHLOTl7x__K5kg.png",
    },
    {
      title: "Top 10 Microservices Design Patterns you should know",
      description:
        "A microservice is a small, independently deployable component of a larger application that focuses on a specific functionality",
      link: "https://medium.com/@sylvain.tiset/top-10-microservices-design-patterns-you-should-know-1bac6a7d6218",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*X19whxEh-bn79rj7",
    },
  ];

  const testimonials = [
    {
      description: "Excellent specialist, Great Client, Should be 5 stars",
      name: "Dmitry Kochkurov",
      from: "I.W. Interpreters Worldwide Ltd | upwork.com",
    },
    {
      description:
        "Berkerjasama dengan Sdr. Adi Gunawan Hidayat sangat menyenangkan, Bekerja dengan mengutamakan Profesional, Sangat terbuka dengan ide dan masukan, Sabar dalam menerima Revisi, Serta bisa Improvisasi untuk memaksimalkan Aplikasi",
      name: "Riyan Padhini",
      from: "Direktur Operasional at PT. LAWANG BERKAH KREASI",
    },
  ];

  const awards = [
    "AWS Certified Solutions Architect – Associate (2023)",
    "React Advanced Certification (2022)",
    "West Java Province Student Skills Competition Finalists (2015)",
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "dark" : "light"
      } transition-colors`}>
      <header className="border-b py-6 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">
              {translations[language].title}
            </h1>
            <h2 className="text-xl mt-2">Software Engineer</h2>
            <p className="mt-4">{translations[language].description}</p>
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
              {darkMode ? "🌙" : "🌞"}
            </button>
          </div>
        </div>
      </header>

      {/* Experiences Section */}
      <section className="py-12 px-4 sm:px-6 border-b">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">💼 My Experiences</h2>
          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                years={experience[language].years}
                title={experience[language].title}
                description={experience[language].description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 px-4 sm:px-6 border-b">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">📂 My Projects</h2>
          <Pagination items={projects} itemsPerPage={3}>
            {(project, index) => (
              <PortfolioCard
                key={index}
                title={project[language].title}
                description={project[language].description}
                technologies={project[language].technologies}
                link={project[language].link}
              />
            )}
          </Pagination>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-12 px-4 sm:px-6 border-b">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            🏆 Certifications & Awards
          </h2>
          <ul className="list-disc pl-6">
            {awards.map((award, index) => (
              <li key={index} className="mb-4">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="py-12 px-4 sm:px-6 border-b">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">📝 Blog & Insights</h2>
          <Pagination items={blogs} itemsPerPage={3}>
            {(blog, index) => (
              <BlogCard
                key={index}
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
      <section className="py-12 px-4 sm:px-6 border-b">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">🌟 Testimonials</h2>
          <Pagination items={testimonials} itemsPerPage={3}>
            {(testimonial, index) => (
              <TestimonialCard
                key={index}
                description={testimonial.description}
                name={testimonial.name}
                from={testimonial.from}
              />
            )}
          </Pagination>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-950 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-2xl font-bold mb-6 md:mb-0">
            {translations[language].contact}
          </h2>
          <div className="space-y-2 md:text-left">
            <p>{translations[language].contact_me}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="mailto:adigunawanhidayat29@gmail.com"
                className="underline">
                {translations[language].email}
              </a>
              <a
                href="https://linkedin.com/in/adigunawanhidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].linkedin}
              </a>
              <a
                href="https://wa.me/6289627302553"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].whatsapp}
              </a>
              <a
                href="https://www.youtube.com/@aghidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].youtube}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
