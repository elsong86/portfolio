// app/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 fixed bottom-0 w-full z-50">
      <div className="mb-4">
        <a
          href="https://github.com/your-username"
          className="text-blue-400 mx-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          className="text-blue-400 mx-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-blue-400 mx-4"
        >
          Email
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ellis Song. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
