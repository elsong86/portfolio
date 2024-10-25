// app/layout.tsx
import './globals.css';
import { DM_Sans } from 'next/font/google'; // Import the fonts from next/font/google
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of Ellis Song',
};

// Use the imported fonts
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Regular 400, Medium 500, Bold 700
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}> {/* Apply the Inter font globally */}
      <head>
        {/* Other head elements like the Devicon CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </head>
      <body className="font-light"> {/* Apply the Pacifico font in specific areas */}
        {children}
      </body>
    </html>
  );
}
