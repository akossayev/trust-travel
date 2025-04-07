import React from 'react';
import Header from '@/components/Header';
import SelectTour from '@/components/SelectTour';
import ChooseTours from '@/components/ChooseTours';
import Footer from '@/components/Footer';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SelectTour />
      <ChooseTours />
      <main>{children}</main>
      <Footer />
    </>
  );
}
