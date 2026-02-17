import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/company/zorka-agency',
    label: 'LinkedIn',
  },
  {
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/channel/UCFHMWFvmDJXjhri6Y2j3wFg',
    label: 'YouTube',
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/zorka.agency',
    label: 'Instagram',
  },
  {
    icon: <FaFacebookF />,
    url: 'https://www.facebook.com/zorka.agency',
    label: 'Facebook',
  },
  {
    icon: <img src="/clutch-co.png" alt="Clutch" className="h-6 w-auto brightness-0 invert" />,
    url: 'https://clutch.co/profile/zorkaagency#reviews',
    label: 'Clutch',
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img
            src="/Zorka_RU_White.png"
            alt="Zorka.Agency Logo"
            className="h-8"
          />

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-secondary text-sm text-center">
            © {currentYear} Zorka.Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
