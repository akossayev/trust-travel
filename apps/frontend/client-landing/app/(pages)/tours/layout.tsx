import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SelectTour from '@/components/SelectTour';
import ChooseTours from '@/components/ChooseTours';

export default function ToursLayout({ children }: { children: React.ReactNode }) {
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
