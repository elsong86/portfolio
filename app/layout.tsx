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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <BlobBackground />
        
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 w-full">
          <div className="flex justify-center">
            <Navbar />
          </div>
        </header>

        {/* Main content */}
        <main className="flex justify-center items-center min-h-screen">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
