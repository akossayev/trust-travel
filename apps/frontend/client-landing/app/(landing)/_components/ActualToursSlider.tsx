'use client';
import React from 'react';
import Image from 'next/image';

import slideTour from '../../../public/card1.png';
import slideTour2 from '../../../public/card2.png';
import slideTour3 from '../../../public/card3.png';
import slideTour4 from '../../../public/card5.png';

import ArrowSliderLeftDark from '../../../public/svg/ArrowSliderLeftDark';
import ArrowSliderRightDark from '../../../public/svg/ArrowSliderRightDark';
import ArrowSliderLeftLight from '../../../public/svg/ArrowSliderLeftLight';
import ArrowSliderRightLight from '../../../public/svg/ArrowSliderRightLight';
import { useState } from 'react';

export default function ActualToursSlider() {
  const [slides, setSlides] = useState([slideTour, slideTour2, slideTour3, slideTour4]);

  const handleNext = () => {
    setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
  };

  const handlePrev = () => {
    setSlides((prevSlides) => [prevSlides[prevSlides.length - 1], ...prevSlides.slice(0, -1)]);
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden relative">
      <h2 className="my-[50px] text-base lg:text-2xl">Актуальные туры</h2>

      <div className="flex items-center gap-5">
        <div className="relative group w-[250px] rounded-[30px] h-[240px] ml-[270px] sm2:ml-[-110px] sm3:ml-[-90px] md:ml-0 rounded-[40px] lg:ml-0 lg:w-[220px] lg:h-[290px] xl:w-[330px] xl:h-[400px] 2xl:w-[360px] 2xl:h-[430px]">
          <Image
            src={slides[0]}
            alt="slide1"
            className="w-full h-full cursor-pointer rounded-[30px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration 300 py-[10%] rounded-[30px] top-0 left-0 flex flex-col justify-between w-full h-full items-center">
            <h2 className="text-white lg:text-lg">
              Экспресс тур <br />
              на Озера Кольсай и Каинды
            </h2>
            <button className="text-white bg-[#489FC4] rounded-[60px] w-[180px] lg:w-[240px] lg:h-[45px] h-[35px] text-sm lg:text-base">
              Подробнее
            </button>
          </div>
        </div>
        <div className="relative group w-[250px] rounded-[30px] h-[300px] rounded-[40px] lg:w-[280px] lg:h-[380px] xl:w-[390px] xl:h-[490px] 2xl:w-[420px] 2xl:h-[520px]">
          <Image
            src={slides[1]}
            alt="slide2"
            className="w-full h-full cursor-pointer rounded-[30px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration 300 py-[10%] rounded-[35px] top-0 left-0 flex flex-col justify-between w-full h-full items-center">
            <h2 className="text-white lg:text-xl">
              Экспресс тур <br />
              на Озера Кольсай и Каинды
            </h2>
            <button className="text-white bg-[#489FC4] rounded-[60px] w-[180px] lg:w-[300px] lg:h-[50px] lg:text-lg h-[35px] text-sm">
              Подробнее
            </button>
          </div>
        </div>
        <div className="relative group w-[250px] rounded-[30px] h-[280px] rounded-[35px] lg:w-[230px] lg:h-[330px] xl:w-[340px] xl:h-[440px] 2xl:w-[370px] 2xl:h-[470px]">
          <Image
            src={slides[2]}
            alt="slide3"
            className="w-full h-full cursor-pointer rounded-[30px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration 300 py-[10%] rounded-[35px] top-0 left-0 flex flex-col justify-between w-full h-full items-center">
            <h2 className="text-white lg:text-lg">
              Экспресс тур <br />
              на Озера Кольсай и Каинды
            </h2>
            <button className="text-white bg-[#489FC4] rounded-[60px] w-[180px] lg:w-[250px] lg:h-[45px] lg:text-lg h-[35px] text-sm">
              Подробнее
            </button>
          </div>
        </div>
        <div className="relative group w-[250px] rounded-[30px] h-[250px] lg:h-[350px] xl:w-[360px] xl:h-[460px] 2xl:w-[390px] 2xl:h-[490px]">
          <Image
            src={slides[3]}
            alt="slide4"
            className="w-full h-full cursor-pointer rounded-[30px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration 300 py-[10%] rounded-[35px] top-0 left-0 flex flex-col justify-between w-full h-full items-center">
            <h2 className="text-white lg:text-xl">
              Экспресс тур <br />
              на Озера Кольсай и Каинды
            </h2>
            <button className="text-white bg-[#489FC4] rounded-[60px] w-[180px] lg:w-[270px] lg:h-[45px] h-[35px] text-sm lg:text-lg">
              Подробнее
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full absolute top-[250px] lg:top-[280px] sm:justify-around sm:gap-[75%] 2xl:gap-[65%] xl:top-[330px] ">
        <ArrowSliderLeftDark
          className="w-[80px] h-[80px] cursor-pointer lg:hidden"
          onClick={handlePrev}
        />
        <ArrowSliderRightDark
          className="w-[80px] h-[80px] cursor-pointer lg:hidden"
          onClick={handleNext}
        />
        <ArrowSliderLeftLight
          className="w-[90px] h-[90px] cursor-pointer hidden lg:block"
          onClick={handlePrev}
        />
        <ArrowSliderRightLight
          className="w-[90px] h-[90px] cursor-pointer hidden lg:block"
          onClick={handleNext}
        />
      </div>

      <button className="mt-[30px] bg-[#489FC4] text-sm xs:text-base xs2:text-lg text-white px-[55px] xs:px-[70px] xs1:px-[75px] xs2:px-[80px] xs3:px-[100px] py-4 flex items-center rounded-[30px]">
        Подробнее о всех турах
      </button>
    </div>
  );
}
