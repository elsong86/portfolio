// app/layout.tsx
import './globals.css';
import Header from './components/Header';
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
      <body className="flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Header name="Ellis Song" title="Full Stack Developer" />

        {/* Main content takes up all available space */}
        <main className="flex-1">{children}</main>

        {/* Footer is at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
