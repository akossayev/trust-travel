import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChooseTours from '@/components/ChooseTours';

export default function SightPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ChooseTours />
      <main>{children}</main>
      <Footer />
    </>
  );
}
