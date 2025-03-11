import React from 'react';
import SelectTour from '@/components/SelectTour';
import OffersText from '@/components/OffersText';
import ChooseTours from '@/components/ChooseTours';
import ActualToursSlider from '@/components/ActualToursSlider';
import RegisterButton from '@/components/RegisterButton';
import Tours from '@/components/Tours';
import Partness from '@/components/Partness';
import OftenQuestions from '@/components/OftenQuestions';

const LandingRoot = () => {
  return (
    <React.Fragment>
      <SelectTour />
      <ChooseTours />
      <ActualToursSlider />
      <RegisterButton />
      <Tours />
      <OffersText />
      <Partness />
      <OftenQuestions />
    </React.Fragment>
  );
};

export default LandingRoot;
