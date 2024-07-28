import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const links = [
        { path: '/', text: 'Home' },
        { path: '/projects', text: 'Projects' },
        { path: '/resume', text: 'Resume' },
        { path: '/blog', text: 'Blog' },
        { path: '/publications', text: 'Publications' },
        { path: '/contact', text: 'Contact' },
    ];
    
    return (
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-around">
            {links.map((link, index) => (
              <div key={index}>
                <Link key={index} href={link.path} className="hover:underline">
                    {link.text}
                </Link>
              </div>
            ))}
          </nav>
        </header>
      );
}

export default Header; 