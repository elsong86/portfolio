import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Header: React.FC = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: '/projects', text: 'Projects' },
    { path: '/resume', text: 'Resume' },
    { path: '/blog', text: 'Blog' },
    { path: '/publications', text: 'Publications' },
    { path: '/contact', text: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/elsong86', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ellissong', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:ellissong@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];
    
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <nav className="flex flex-grow justify-evenly">
        {links.map((link, index) => (
          <Link key={index} href={link.path} className="hover:underline">
            {link.text}
          </Link>
        ))}
      </nav>
      <div className="flex space-x-4">
        {socialLinks.map(({ href, icon: Icon, label }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon size={24} className="hover:text-gray-400" />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header; 