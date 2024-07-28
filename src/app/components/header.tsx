import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div>
                    <Link href="/blog">Blog</Link>
                </div>
                <div>
                    <Link href="/projects">Projects</Link>
                </div>
                <div>
                    <Link href="/resume">Resume</Link>
                </div>
                <div>
                    <Link href="/contact">Contact</Link>
                </div>
                </nav>
        </header>
    )
}

export default Header; 