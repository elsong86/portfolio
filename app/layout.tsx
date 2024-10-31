import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BlobBackground from './components/BlobBackground';

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
      <body className="flex flex-col min-h-screen">
        <BlobBackground />
        {/* Sticky Wrapper */}
        <div className="sticky top-0 z-50">
          {/* Absolute Navbar positioned on top */}
          <header className="absolute top-0 left-0 w-full flex justify-center">
            <Navbar />
          </header>
        </div>

        {/* Main content */}
        <main className="flex-1">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
