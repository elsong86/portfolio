import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const links = [
        { path: 'https://github.com/elsong86', text: 'Github' }, 
        { path: 'https://www.linkedin.com/in/ellissong', text: 'LinkedIn'}
    ]

    return (
        <footer className="bg-gray-800 text-white p-4">
        <nav className="flex justify-around">
          {links.map((link, index) => (
            <div key={index}>
              <Link key={index} href={link.path} className="hover:underline">
                  {link.text}
              </Link>
            </div>
          ))}
        </nav>
      </footer>
    )
}

export default Footer;