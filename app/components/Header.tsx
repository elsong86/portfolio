// app/components/Header.tsx
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Connect from './Connect'; // Import the Connect component

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-transparent text-white py-4 fixed top-0 w-full z-50 flex justify-center items-center space-x-8">
      {/* Navbar */}
      <Navbar />

      {/* Connect Accordion */}
      <Connect />
    </header>
  );
};

export default Header;
