// app/components/Header.tsx
import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header className="bg-gray-800 text-white p-6 text-center sticky top-0 z-50">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-xl mt-2">{title}</p>
      
      {/* Navigation Links */}
      <nav className="mt-4">
        <a href="#aboutme" className='text-blue-400 mx-4'>
          About Me
        </a>
        <a href="#projects" className="text-blue-400 mx-4">
          Projects
        </a>
        <a href="#experience" className="text-blue-400 mx-4">
          Experience
        </a>
        <a href="#skills" className="text-blue-400 mx-4">
          Skills
        </a>
        <a href="#blog" className="text-blue-400 mx-4">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;
