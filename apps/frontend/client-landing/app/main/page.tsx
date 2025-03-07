import React from 'react';
import Header from '@/components/Header';
import SelectTour from '@/components/SelectTour';
import ChooseTours from '@/components/ChooseTours';
import ActualToursSlider from '@/components/ActualToursSlider';
import RegisterButton from '@/components/RegisterButton';
import Tours from '@/components/Tours';
import OffersText from '@/components/OffersText';
import Partness from '@/components/Partness';
import Footer from '@/components/Footer';
import OftenQuestions from '@/components/OftenQuestions';

export default function MainPage() {
  return (
    <div className="flex flex-col items-center bg-[#fff]">
      <Header />
      <SelectTour />
      <ChooseTours />
      <ActualToursSlider />
      <RegisterButton />
      <Tours />
      <OffersText />
      <Partness />
      {/* <OftenQuestions /> */}
      <Footer />
    </div>
  );
}
