import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import ThemeProvider from '../components/ThemeProvider';

const rubik = Rubik({
  variable: '--rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Concept 44',
  description: 'Concept 44',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${rubik.variable}`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
