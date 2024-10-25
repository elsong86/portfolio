import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of Ellis Song',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add the Devicon CDN link in the head */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        {/* Sticky and Centered Navbar */}
        <header className="sticky top-0 z-50 w-full bg-white flex justify-center">
          <Navbar />
        </header>
        {/* Main content takes up all available space */}
        <main className="flex-1">{children}</main>
        {/* Footer is at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
