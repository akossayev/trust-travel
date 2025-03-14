import React from 'react';
import Image from 'next/image';
import slideTour from '@/public/slide-tour.png';
import arrowSliderLeftDark from '@/public/arrow-slider-left-dark.svg';
import arrowSliderRightDark from '@/public/arrow-slider-right-dark.svg';
import arrowSliderLeftLight from '@/public/arrow-slider-left-light.svg';
import arrowSliderRightLight from '@/public/arrow-slider-right-light.svg';

export default function ActualToursSlider() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden relative">
      <h2 className="my-[50px] text-xl lg:text-2xl">Актуальные туры</h2>

      <div className="flex items-center gap-5">
        <Image
          src={slideTour}
          alt="slide1"
          className="w-[250px] h-[240px] ml-[-130px] sm2:ml-[-110px] sm3:ml-[-90px] rounded-[40px] lg:ml-0 lg:w-[220px] lg:h-[290px] xl:w-[330px] xl:h-[400px] 2xl:w-[360px] 2xl:h-[430px]"
          loading="lazy"
        />
        <Image
          src={slideTour}
          alt="slide2"
          className="w-[250px] h-[300px] rounded-[30px] lg:w-[280px] lg:h-[380px] xl:w-[390px] xl:h-[490px] 2xl:w-[420px] 2xl:h-[520px] "
          loading="lazy"
        />
        <Image
          src={slideTour}
          alt="slide3"
          className="w-[250px] h-[280px] rounded-[35px] lg:w-[230px] lg:h-[330px] xl:w-[340px] xl:h-[440px] 2xl:w-[370px] 2xl:h-[470px]"
          loading="lazy"
        />
        <Image
          src={slideTour}
          alt="slide4"
          className="w-[250px] h-[250px] lg:h-[350px] xl:w-[360px] xl:h-[460px] 2xl:w-[390px] 2xl:h-[490px]"
          loading="lazy"
        />
      </div>

      <div className="flex gap-[200px] sm2:gap-[240px] sm3:gap-[260px] sm:gap-[400px] md:gap-[480px] lg:gap-[770px] xl:gap-[1200px] absolute top-[250px] lg:top-[280px] xl:top-[330px] ">
        <Image
          src={arrowSliderLeftDark}
          alt="arrow-left"
          width={80}
          height={80}
          className="w-[80px] h-[80px] cursor-pointer lg:hidden"
          loading="lazy"
        />
        <Image
          src={arrowSliderRightDark}
          alt="arrow-right"
          width={80}
          height={80}
          className="w-[80px] h-[80px] cursor-pointer lg:hidden"
          loading="lazy"
        />
        <Image
          src={arrowSliderLeftLight}
          alt="arrow-left"
          width={80}
          height={80}
          className="w-[80px] h-[80px] cursor-pointer hidden lg:block"
          loading="lazy"
        />
        <Image
          src={arrowSliderRightLight}
          alt="arrow-right"
          width={80}
          height={80}
          className="w-[80px] h-[80px] cursor-pointer hidden lg:block"
          loading="lazy"
        />
      </div>

      <button className="mt-[30px] bg-[#489FC4] text-foreground px-[70px] py-4 flex items-center rounded-[30px]">
        Подробнее о всех турах
      </button>
    </div>
  );
}
