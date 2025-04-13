import React from 'react';
import OffersText from '@/app/(landing)/_components/OffersText';
import ActualToursSlider from '@/app/(landing)/_components/ActualToursSlider';
import RegisterButton from '@/app/(landing)/_components/RegisterButton';
import Tours from '@/app/(landing)/_components/Tours';
import Partness from '@/app/(landing)/_components/Partness';
import OftenQuestions from '@/app/(landing)/_components/OftenQuestions';

const LandingRoot = () => {
  return (
    <React.Fragment>
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
