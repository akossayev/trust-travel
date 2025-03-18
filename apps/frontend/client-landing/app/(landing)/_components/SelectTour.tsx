'use client';
import React from 'react';
import Image from 'next/image';
import SkeletonActiveLesiureCard from './SkeletonActiveLesiureCard';
import ArrowButtonBlue from '../svg-icons/ArrowButtonBlue';
import ArrowButtonSilver from '../svg-icons/ArrowButtonSilver';

export default function SelectTour() {
  const toursCard = [
    { id: 1, title: 'Активный отдых', imgSrc: '' },
    { id: 2, title: 'Активный отдых', imgSrc: '' },
    { id: 3, title: 'Активный отдых', imgSrc: '' },
  ];

  return (
    <div className="mx-5 h-[600px] sm2:h-[650px] lg:h-[750px] sm3:h-[700px] overflow-hidden">
      <div
        className="w-full bg-no-repeat h-[80%] lg:h-[95%] bg-cover rounded-[30px] py-[30px] px-[20px] flex flex-col justify-between "
        style={{ backgroundImage: 'url(/bg-Mountain.png)' }}>
        <h1 className="text-xl sm2:text-2xl sm3:text-[26px] lg:text-4xl xl:text-[54px] text-foreground font-semibold">
          Путешествуйте <br /> с удовольствием, выбирайте <br />
          TrusTTravel!
        </h1>
        <div className="flex flex-col items-center relative lg:static lg:flex-row-reverse lg:items-end lg:justify-between">
          <div className="flex gap-3 ml-[55%] lg:m-0 lg:mr-[-8%]">
            <SkeletonActiveLesiureCard />
            <SkeletonActiveLesiureCard />
            <SkeletonActiveLesiureCard />
          </div>
          <button className="text-[#489FC4] text-lg border border-[#489FC4] rounded-[30px] sm3:rounded-[35px] py-[3px] px-[3px] flex items-center gap-[40px] pr-[50px] absolute top-[210px] sm2:top-[220px]  sm2:gap-[50px] sm2:pr-[60px] sm3:text-xl sm:top-[280px] lg:static lg:bg-white/90 lg:gap-[15px] lg:pr-[25px]">
            <ArrowButtonBlue className="w-[50px] h-[50px] sm3:w-[60px] sm3:h-[60px] lg:w-[45px] lg:h-[45px]" />{' '}
            Выбрать тур
          </button>
        </div>
      </div>
    </div>
  );
}
