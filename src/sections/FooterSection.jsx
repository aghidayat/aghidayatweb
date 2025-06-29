import { memo } from "react";
import pkg from "../../package.json";

const FooterSection = ({ general, language, contact }) => {
  return (
    <footer className="py-12 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-2xl font-bold mb-6 md:mb-0">
          {general[language].contact}
        </h2>
        <div className="space-y-2 md:text-left">
          <p>{general[language].contact_me}</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a href={contact.mailto} className="underline">
              {general[language].email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline">
              {general[language].linkedin}
            </a>
            <a
              href={contact.youtube}
              target="_blank"
              rel="noreferrer"
              className="underline">
              {general[language].youtube}
            </a>
            <a
              href={contact.upwork}
              target="_blank"
              rel="noreferrer"
              className="underline">
              {general[language].upwork}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="underline">
              {general[language].github}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="underline">
              {general[language].whatsapp}
            </a>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="mt-5 text-center text-sm">
        © {new Date().getFullYear()} Adi Gunawan Hidayat — v{pkg.version}
      </div>
    </footer>
  );
};

export default memo(FooterSection);
