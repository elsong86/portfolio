// app/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ellis Song. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
