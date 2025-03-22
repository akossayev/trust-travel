'use client';
import React from 'react';
import Image from 'next/image';
import slideTour from '../../../public/slide-tour.png';
import slideTour2 from '../../../public/slideTour2.png';
import slideTour3 from '../../../public/slideTour3.png';
import ArrowSliderLeftDark from '../../../public/svg/ArrowSliderLeftDark';
import ArrowSliderRightDark from '../../../public/svg/ArrowSliderRightDark';
import ArrowSliderLeftLight from '../../../public/svg/ArrowSliderLeftLight';
import ArrowSliderRightLight from '../../../public/svg/ArrowSliderRightLight';
import { useState } from 'react';

export default function ActualToursSlider() {
  const [slides, setSlides] = useState([slideTour, slideTour2, slideTour3, slideTour]);

  const handleNext = () => {
    setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
  };

  const handlePrev = () => {
    setSlides((prevSlides) => [prevSlides[prevSlides.length - 1], ...prevSlides.slice(0, -1)]);
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden relative">
      <h2 className="my-[50px] text-xl lg:text-2xl">Актуальные туры</h2>

      <div className="flex items-center gap-5">
        <Image
          src={slides[0]}
          alt="slide1"
          className="w-[250px] h-[240px] ml-[-130px] sm2:ml-[-110px] sm3:ml-[-90px] rounded-[40px] lg:ml-0 lg:w-[220px] lg:h-[290px] xl:w-[330px] xl:h-[400px] 2xl:w-[360px] 2xl:h-[430px]"
          loading="lazy"
        />
        <Image
          src={slides[1]}
          alt="slide2"
          className="w-[250px] h-[300px] rounded-[30px] lg:w-[280px] lg:h-[380px] xl:w-[390px] xl:h-[490px] 2xl:w-[420px] 2xl:h-[520px] "
          loading="lazy"
        />
        <Image
          src={slides[2]}
          alt="slide3"
          className="w-[250px] h-[280px] rounded-[35px] lg:w-[230px] lg:h-[330px] xl:w-[340px] xl:h-[440px] 2xl:w-[370px] 2xl:h-[470px]"
          loading="lazy"
        />
        <Image
          src={slides[3]}
          alt="slide4"
          className="w-[250px] h-[250px] lg:h-[350px] xl:w-[360px] xl:h-[460px] 2xl:w-[390px] 2xl:h-[490px]"
          loading="lazy"
        />
      </div>

      <div className="flex justify-between w-full absolute top-[250px] lg:top-[280px] lg:justify-around lg:gap-[75%] xl:top-[330px] ">
        <ArrowSliderLeftDark
          className="w-[100px] h-[100px] cursor-pointer lg:hidden"
          onClick={handlePrev}
        />
        <ArrowSliderRightDark
          className="w-[100px] h-[100px] cursor-pointer lg:hidden"
          onClick={handleNext}
        />
        <ArrowSliderLeftLight
          className="w-[80px] h-[80px] cursor-pointer hidden lg:block"
          onClick={handlePrev}
        />
        <ArrowSliderRightLight
          className="w-[80px] h-[80px] cursor-pointer hidden lg:block"
          onClick={handleNext}
        />
      </div>

      <button className="mt-[30px] bg-[#489FC4] text-white px-[70px] py-4 flex items-center rounded-[30px]">
        Подробнее о всех турах
      </button>
    </div>
  );
}
