import { useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import PortfolioCard from "./components/PortfolioCard";
import BlogCard from "./components/BlogCard";
import TestimonialCard from "./components/TestimonialCard";
import Pagination from "./components/Pagination";
import FileCV from "./assets/Resume-Adi-Gunawan-Hidayat-2024.pdf";

function App() {
  const translations = {
    EN: {
      title: "Adi Gunawan Hidayat",
      subtitle: "Software Engineer",
      description:
        "A passionate Fullstack Developer with over 6 years of experience creating powerful web applications. Skilled in leveraging modern technologies like Node.js, Express.js, React.js, and Tailwind, I deliver solutions that combine efficiency with elegance. My expertise spans Progressive Web Apps (PWAs), Git version control, Docker, and AWS cloud services. I thrive on crafting exceptional user experiences and writing clean, high-quality code that makes an impact.",
      contact: "🤙 Let's Connect!",
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      contact_me: "I’d love to hear from you! Feel free to reach out:",
      youtube: "Youtube",
      upwork: "Upwork",
      github: "Github",
      experiences: "Experiences",
      download_cv: "Download CV",
    },
    ID: {
      title: "Adi Gunawan Hidayat",
      subtitle: "Pengembang Perangkat Lunak",
      description:
        "Seorang Pengembang Fullstack yang bersemangat dengan lebih dari 6 tahun pengalaman menciptakan aplikasi web yang andal. Terampil menggunakan teknologi modern seperti Node.js, Express.js, React.js, dan Tailwind untuk menghasilkan solusi yang efisien dan elegan. Keahlian saya meliputi Progressive Web Apps (PWAs), kontrol versi Git, Docker, dan layanan cloud AWS. Saya menikmati menciptakan pengalaman pengguna yang luar biasa dan menulis kode berkualitas tinggi yang memberikan dampak.",
      contact: "🤙 Hubungi Saya!",
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      contact_me: "Saya akan senang mendengar dari Anda! Silakan hubungi:",
      youtube: "Youtube",
      upwork: "Upwork",
      github: "Github",
      experiences: "Pengalaman Bekerja",
      download_cv: "Unduh CV",
    },
  };

  const experiences = [
    {
      years: {
        ID: "2023 - Sekarang",
        EN: "2023 - Present",
      },
      title: {
        ID: "PT. Ihsan Solusi Informatika | Pengembang Aplikasi Fullstack",
        EN: "PT. Ihsan Solusi Informatika | Fullstack Application Developer",
      },
      description: {
        ID: "Sebagai pengembang aplikasi fullstack di PT. Ihsan Solusi Informatika, saya bertanggung jawab untuk merancang dan mengembangkan sistem perbankan syariah yang komprehensif yang memenuhi prinsip-prinsip keuangan Islam. Menggunakan Python untuk backend dan React.js untuk frontend, saya telah membangun sistem yang kokoh dan skalabel yang memungkinkan operasi perbankan yang efisien dan aman.",
        EN: "As a fullstack application developer at PT. Ihsan Solusi Informatika, I am responsible for designing and developing a comprehensive sharia banking system that adheres to Islamic financial principles. Utilizing Python for the backend and React.js for the frontend, I have built a robust and scalable system that enables efficient and secure banking operations.",
      },
      link: "https://ihsansolusi.co.id/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQGRO8-FXsQ0wQ/company-logo_200_200/company-logo_200_200/0/1688541140181/ihsan_solusi_informatika_logo?e=1750291200&v=beta&t=w8gTv-JwthMPeFYXvCLjwKdkc7pAG7RZHpEd5nUCfsI",
    },
    {
      years: {
        ID: "2020 - 2023",
        EN: "2020 - 2023",
      },
      title: {
        ID: "PT Sirkel Kreasi Nusantara | Pengembang Aplikasi Fullstack",
        EN: "PT Sirkel Kreasi Nusantara | Fullstack Application Developer",
      },
      description: {
        ID: "Saya bekerja sebagai pengembang aplikasi fullstack, menggunakan React.js, Next.js, Node.js, dan Tailwind untuk mengembangkan aplikasi web modern. Tanggung jawab saya mencakup mendesain antarmuka pengguna, mendesain database, mengoptimalkan kinerja aplikasi, dan melakukan pengujian untuk memastikan kinerja yang optimal dan pengalaman pengguna yang memuaskan. Saya juga selalu memperbarui pengetahuan saya dengan teknologi terkini untuk menciptakan solusi inovatif.",
        EN: "I worked as a fullstack application developer, utilizing React.js, Next.js, Node.js, and Tailwind to develop modern web applications. My responsibilities included designing user interfaces, designing databases, optimizing application performance, and conducting tests to ensure optimal performance and a satisfying user experience. I also stayed up-to-date with the latest technology to create innovative solutions.",
      },
      link: "http://sirkel.id/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C510BAQE4aBRNpVLN9w/company-logo_100_100/company-logo_100_100/0/1630634639346/sirkeleducation_logo?e=1750291200&v=beta&t=vWw060kQ78Jthw76nkCeGFXXrayls9eEHC-L7J4cLqk",
    },
    {
      years: {
        ID: "2017 - 2020",
        EN: "2017 - 2020",
      },
      title: {
        ID: "PT Dataquest Leverage Indonesia | Pengembang Aplikasi Fullstack",
        EN: "PT Dataquest Leverage Indonesia | Fullstack Application Developer",
      },
      description: {
        ID: "Saya bekerja sebagai pengembang aplikasi fullstack, menggunakan Laravel dan Bootstrap untuk mengembangkan aplikasi web modern untuk Sistem Manajemen Pembelajaran. Tanggung jawab saya mencakup mendesain database, mengoptimalkan kinerja aplikasi, dan memastikan kinerja yang optimal serta pengalaman pengguna yang memuaskan.",
        EN: "I worked as a fullstack application developer, utilizing Laravel and Bootstrap to develop modern web applications for Learning Management System. My responsibilities included designing databases, optimizing application performance, and ensuring optimal performance and a satisfying user experience.",
      },
      link: "https://dataquest.co.id/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQHwX5mTuFnDIQ/company-logo_100_100/company-logo_100_100/0/1631320215901?e=1750291200&v=beta&t=5LszdD8gKCnffq3V0r5rJEwPqiTLmXpHeXXrAKjvTUU",
    },
    {
      years: {
        ID: "2015 - 2017",
        EN: "2015 - 2017",
      },
      title: {
        ID: "PT. Panenmaya Digital Consultant | Pengembang Frontend",
        EN: "PT. Panenmaya Digital Consultant | Frontend Developer",
      },
      description: {
        ID: "Saya bekerja sebagai pengembang frontend, mengimplementasikan desain web yang responsif pada setiap platform, mengintegrasikan API, dan bekerja sama dengan tim backend untuk mengintegrasikan data. Teknologi yang digunakan: HTML, CSS, JavaScript, PHP.",
        EN: "I worked as a frontend developer, implementing responsive web design on every platform, integrating APIs, and collaborating with the backend team for data integration. Technologies utilized: HTML, CSS, JavaScript, PHP.",
      },
      link: "https://panenmaya.com/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEIu5c4XX8CAg/company-logo_100_100/company-logo_100_100/0/1631335441236?e=1750291200&v=beta&t=8G95Z2be-0wCSvfGdvVnr6rGRSxkPKq_o9a1AyM8c9Y",
    },
  ];

  const projects = [
    {
      title: {
        ID: "SampApp",
        EN: "SampApp",
      },
      description: {
        ID: "SampApp adalah platform e-learning gamifikasi bagi pengguna Indonesia untuk memahami cara mengonsumsi dan membuang barang plastik serta tanggung jawab pengemasan.",
        EN: "SampApp is a gamified e-learning platform for Indonesian users to understand how to consume and dispose of plastic goods and packaging responsibility",
      },
      technologies: ["React Native", "Android", "Ios"],
      link: "https://vel.earth/sampapp",
      imageUrl: "https://vel.earth/landing/images/webp/hero-banner.webp",
    },
    {
      title: {
        ID: "RECO",
        EN: "RECO",
      },
      description: {
        ID: "RECO memberdayakan para pemulung informal di seluruh Indonesia dan mempekerjakan mereka di RECO MRF dan Pabrik dengan Upah yang Adil, Lingkungan Kerja yang Aman dan Peluang untuk meningkatkan kompetensi mereka dan bekerja di posisi manajemen.",
        EN: "RECO empowering informal wastepickers around Indonesia and employ them in RECO MRFs and Factories with Fair Wages, Safe Work Environment and Chances to increase their competencies and work in management position.",
      },
      technologies: ["React Native", "Android", "Ios"],
      link: "https://recovered.id/",
      imageUrl: "https://recovered.id/staging/images/webp/ipst-toisapu.webp",
    },
    {
      title: {
        ID: "Read Quran App",
        EN: "Read Quran App",
      },
      description: {
        ID: "Mengembangkan aplikasi mobile untuk membaca dan memahami Al-Quran lebih menyenangkan.",
        EN: "Developed a mobile app for reading and understanding the Quran in a more engaging way.",
      },
      technologies: ["Javascript", "HTML"],
      link: "https://aghidayat-quran.vercel.app/",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/ec675f17-d448-40f5-a91a-9c5607a44512",
    },
    {
      title: {
        ID: "Allthinc",
        EN: "Allthinc",
      },
      description: {
        ID: "Membuat desain tidak pernah semudah ini!. Dengan AI (Kecerdasan Allthinc) Anda dapat mulai membuat desain Anda sendiri dan mulai menjual dengan desain Anda, Coba Sekarang",
        EN: "Creating Design has never been easier!. With ai (allthinc intelligence) you can start creating your own design and start selling with your design, Try Now",
      },
      technologies: ["React JS"],
      link: "https://allthinc.com/",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/fad7df67-a189-40a4-a480-da646de23e91",
    },
    {
      title: {
        ID: "Interpreters.travel",
        EN: "Interpreters.travel",
      },
      description: {
        ID: "Professional interpreters at exhibitions, conferences, negotiations",
        EN: "Professional interpreters at exhibitions, conferences, negotiations",
      },
      technologies: ["React JS"],
      link: "https://www.interpreters.travel/en/",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/a0693ebe-12fb-42d3-be1e-2aa821a0bf58",
    },
    {
      title: {
        ID: "YoBerbagi.id",
        EN: "YoBerbagi.id",
      },
      description: {
        ID: "Sebuah platform Sistem Manajemen Pembelajaran (LMS) yang dikustomisasi untuk memfasilitasi pembelajaran online dan pelatihan, menawarkan antarmuka yang user-friendly, manajemen kursus, dan fitur interaktif.",
        EN: "A customized Learning Management System (LMS) platform designed to facilitate online learning and training, offering a user-friendly interface, course management, and interactive features.",
      },
      technologies: ["Laravel"],
      link: "https://yoberbagi.id/",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/d4a46937-60b6-4abe-a3a2-23ab79efa4c7",
    },
    {
      title: {
        ID: "AGROOBOT",
        EN: "AGROOBOT",
      },
      description: {
        ID: "AGROOBOT adalah Perusahaan Berbasis Teknologi yang berfokus pada pengembangan platform dengan berbagai layanan untuk memberdayakan pertanian dan meningkatkan kesejahteraan petani dengan sistem pertanian berkelanjutan",
        EN: "AGROOBOT is a Technology-Based Company focused on developing a platform with various services to empower agriculture and improve farmers' welfare through sustainable agriculture systems",
      },
      technologies: ["React Js", "Typescript", "Node JS"],
      link: "http://agroobot.co.id/",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/503a9532-aea5-492b-9ef3-dfd02cb5b76c",
    },
    {
      title: {
        ID: "Futsaloka",
        EN: "Futsaloka",
      },
      description: {
        ID: "platform manajemen pemesanan olahraga dan komunitas olahraga yang komprehensif yang memungkinkan pengguna untuk memesan dan mengelola fasilitas olahraga, melacak ketersediaan, dan menghasilkan laporan rinci. Platform ini juga memungkinkan pengelolaan jadwal fasilitas, ketersediaan, dan harga dengan mulus, sehingga pengalaman pemesanan menjadi lebih efisien.",
        EN: "a comprehensive Sport Booking Management and Sport Community Platform that enables users to effortlessly book and manage sports facilities, track availability, and generate detailed reports. The platform also allows for seamless management of facility schedules, availability, and pricing, ensuring a smooth and efficient booking experience.",
      },
      technologies: ["Codeigniter", "React Native"],
      imageUrl:
        "https://cdn.dribbble.com/users/2378750/screenshots/6288225/futsaloka-20.png",
    },
    {
      title: {
        ID: "E-Procurement YKAN",
        EN: "E-Procurement YKAN",
      },
      description: {
        ID: "Sistem E-Procurement YKAN: Platform pengadaan digital yang menyederhanakan proses pembelian untuk transaksi yang efisien dan transparan.",
        EN: "A digital procurement platform streamlining purchasing processes for efficient and transparent transactions.",
      },
      technologies: ["Codeigniter"],
      link: "https://procurement.ykan.or.id/",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/e9f0be3a-de7f-4ca2-b29d-76f5e8e8d395",
    },
    {
      title: {
        ID: "Chachamilktea Member-App",
        EN: "Chachamilktea Member-App",
      },
      description: {
        ID: "Application for managing members to get information about member like point, name, address and etc",
        EN: "Application for managing members to get information about member like point, name, address and etc",
      },
      technologies: ["Laravel"],
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtlQFYRb3U87kkISClG7WjrLRmYepgayAAg&s",
    },
    {
      title: {
        ID: "Aplikasi IGD RSUD",
        EN: "Emergency Room Application at RSUD",
      },
      description: {
        ID: "Aplikasi yang memudahkan Perawat dan Dokter melakukan pencatatan pemeriksaan dengan data yang saling terintegrasi. Fitur utama: Triage, Assessment Dokter, Assessment Perawat, Rencana Pelayanan dan lain-lain.",
        EN: "An application that makes it easier for Nurses and Doctors to record examinations with integrated data. The main fiture: Triage, Doctor Assessment, Nurse Assessment, Service Plan, etc.",
      },
      technologies: ["React Native", "Android", "iOS"],
      link: "https://play.google.com/store/apps/details?id=com.igdapp&hl=id",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/631b90dd-6ef1-4198-be9b-b86627a79661",
    },
    {
      title: {
        ID: "Cuti Online",
        EN: "Online Leave",
      },
      description: {
        ID: "Aplikasi untuk memudahkan Pegawai Mengajukan Cuti bisa melalui Aplikasi di Smartphone kapanpun dan dimanapun ✓ Pengajuan Cuti Fitur yang sangat memudahkan Pegawai untuk mengajukan Cuti melalui Aplikasi di Smartphone ✓ Approval Fitur ini sangat memudahkan Atasan untuk memberikan persetujuan dengan informasi detail yang di dapatkan ✓ Status Cuti Pegawai bisa memeriksa posisi status pengajuan nya",
        EN: "Application to make it easier for employees to apply for leave via the application on their smartphone anytime and anywhere ✓ Leave Submission A feature that makes it very easy for employees to apply for leave via the application on their smartphone ✓ Approval This feature makes it very easy for superiors to provide approval with detailed information obtained ✓ Leave Status Employees can check the status of their application",
      },
      technologies: ["React Native", "Android", "iOS"],
      link: "https://play.google.com/store/apps/details?id=com.cutiapp&hl=id",
      imageUrl:
        "https://www.upwork.com/att/download/portfolio/persons/uid/626775236958453760/profile/projects/files/c50fa3ae-8f81-4cec-a5a8-b7e51e6b8b04",
    },
  ];

  const blogs = [
    {
      title: "A Beginner’s Guide to System Design",
      description:
        "It was December of last year when the thought first occurred to me. I had been working at Google for nearly 3.5 years and it was high time for me to try out new opportunities and learn from them",
      link: "https://medium.com/@sentalkssane/a-beginners-guide-to-system-design-76d64689788b",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*W7FPF0ywvPDMSEXr",
    },
    {
      title: "Designing Scalable Systems: A Technical Guide",
      description:
        "As software applications grow, system designers need to plan for scalability to handle increasing users and data",
      link: "https://medium.com/@gargg/designing-scalable-systems-a-technical-guide-c15f0c700c23",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*G4GUpnrr3ElOXnVhAqn5Ig.png",
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
      description: {
        ID: "Bekerja dengan Pak Adi adalah pengalaman yang sangat menyenangkan. Ia mampu merealisasikan desain yang telah disepakati dengan sangat baik, cepat, dan tepat. Kemampuannya dalam slicing dan menangani bug patut diacungi jempol. Pak Adi juga sangat responsif terhadap perubahan, bahkan dalam situasi yang dinamis. Selain itu, beliau pribadi yang ramah, terbuka, dan enak diajak berdiskusi. Kolaborasi dengannya selalu terasa lancar dan produktif.",
        EN: "Working with Mr. Adi has been a truly pleasant experience. He consistently translates approved designs into implementation with great accuracy and speed. His slicing skills and ability to handle bugs are impressive. He's also highly responsive to changes, even in dynamic situations. On top of that, he's friendly, open, and easy to talk to. Collaborating with him is always smooth and productive.",
      },
      name: "Alfan Pratama",
      from: {
        ID: "UI/UX Designer di Veritas Edukasi Lingkungan",
        EN: "UI/UX Designer at Veritas Edukasi Lingkungan",
      },
    },
    {
      description: {
        ID: "Adi selalu menyelesaikan pekerjaan dengan cepat dan hasilnya pun selalu memuaskan. Komunikasinya juga sangat bagus, selalu responsif, dan memahami kebutuhan dengan detail. Sangat senang bisa bekerja sama dengannya!",
        EN: "Adi always completes work quickly and the results are always satisfying. His communication is excellent, always responsive, and understands needs in detail. Very happy to work with him!",
      },
      name: "Ridhan Thirafi Abadi",
      from: {
        ID: "CEO & Founder di Sirkel.id",
        EN: "CEO & Founder at Sirkel.id",
      },
    },
    {
      description: {
        ID: "Spesialis yang luar biasa, Klien yang hebat, Harusnya 5 bintang",
        EN: "Excellent specialist, Great Client, Should be 5 stars",
      },
      name: "Dmitry Kochkurov",
      from: {
        ID: "I.W. Interpreters Worldwide Ltd | upwork.com",
        EN: "I.W. Interpreters Worldwide Ltd | upwork.com",
      },
    },
    {
      description: {
        ID: "Bekerjasama dengan Adi Gunawan Hidayat sangat menyenangkan, Bekerja dengan mengutamakan Profesional, Sangat terbuka dengan ide dan masukan, Sabar dalam menerima Revisi, Serta bisa Improvisasi untuk memaksimalkan Aplikasi",
        EN: "Working with Adi Gunawan Hidayat is very enjoyable. He works with a focus on professionalism, is very open to ideas and feedback, patient with revisions, and capable of improvising to maximize the application.",
      },
      name: "Riyan Padhini",
      from: {
        ID: "Direktur Operasional di PT. LAWANG BERKAH KREASI",
        EN: "Operational Director at PT. LAWANG BERKAH KREASI",
      },
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
      <header className="border-b dark:border-gray-800 py-6 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">
              {translations[language].title}
            </h1>
            <h2 className="text-xl mt-2">{translations[language].subtitle}</h2>
            <p className="mt-4">{translations[language].description}</p>
            <div className="mt-5">
              <a
                href={FileCV}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:shadow-md transition-shadow rounded-md border dark:border-gray-500 bg-transparent">
                {translations[language].download_cv}
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
            💼 {translations[language].experiences}
          </h2>
          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
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
            {(project, index) => (
              <PortfolioCard
                key={index}
                title={project.title[language]}
                description={project.description[language]}
                technologies={project.technologies}
                link={project.link}
                imageUrl={project.imageUrl}
              />
            )}
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
            {awards.map((award, index) => (
              <li key={index} className="mb-4">
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
      <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">🌟 Testimonials</h2>
          <Pagination items={testimonials} itemsPerPage={3}>
            {(testimonial, index) => (
              <TestimonialCard
                key={index}
                description={testimonial.description[language]} // Use the selected language for the description
                name={testimonial.name} // Name remains the same
                from={testimonial.from[language]} // Use the selected language for the "from" field
              />
            )}
          </Pagination>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 px-4 sm:px-6">
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
              {/* <a
                href="https://wa.me/6289627302553"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].whatsapp}
              </a> */}
              <a
                href="https://www.youtube.com/@aghidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].youtube}
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01a9461874fc31127d"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].upwork}
              </a>
              <a
                href="https://github.com/aghidayat"
                target="_blank"
                rel="noreferrer"
                className="underline">
                {translations[language].github}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
