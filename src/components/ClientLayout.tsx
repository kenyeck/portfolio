'use client';

import Footer from './Footer';
import Navbar from './Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
