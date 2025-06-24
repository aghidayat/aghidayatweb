const projects = [
  {
    title: {
      ID: "Masjidbox",
      EN: "Masjidbox",
    },
    description: {
      ID: "Solusi lengkap untuk memberdayakan masjid Anda. Semua yang Anda butuhkan untuk memperluas hubungan dengan jamaah, di dalam dan di luar tembok masjid Anda. Dari pusat Islam terkecil hingga yang paling berpengaruh, kami membantu memenuhi kebutuhan semua orang.",
      EN: "The all-in-one solution to empower your mosque. Everything you need to expand your relationship with your worshippers, inside and beyond your mosque's walls. From the smallest to the most influential Islamic centres, we help the needs of all.",
    },
    technologies: ["React Native", "Node JS", "Swift", "Kotlin"],
    link: "https://masjidbox.com/",
    imageUrl: "https://masjidbox.com/images/homepage/screens.webp",
    slug: "masjidbox-com",
  },
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
    slug: "samp-app",
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
    slug: "reco",
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
    slug: "read-quran-app",
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
    slug: "allthinc",
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
    slug: "interpreters-travel",
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
    slug: "yoBerbagi-id",
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
    slug: "agroobot",
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
    slug: "futsaloka-id",
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
    slug: "eproc-ykan",
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
    slug: "chachamilktea-member",
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
    slug: "igd-rsud",
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
    slug: "cuti-online",
  },
];

export default projects;