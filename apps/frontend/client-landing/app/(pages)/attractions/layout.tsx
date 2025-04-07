import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AttractionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
