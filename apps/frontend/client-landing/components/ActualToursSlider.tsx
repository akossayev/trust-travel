import React from 'react';
import Image from 'next/image';

export default function ActualToursSlider() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden relative">
      <h2 className="my-[50px] text-xl lg:text-2xl">Актуальные туры</h2>

      <div className="flex items-center gap-5">
        <Image
          src="/slide1.png"
          alt="slide1"
          width={250}
          height={0}
          className="h-[240px] ml-[-130px] sm2:ml-[-110px] sm3:ml-[-90px] rounded-[40px] lg:ml-0 lg:w-[220px] lg:h-[290px] xl:w-[280px] xl:h-[350px]"
        />
        <Image
          src="/slide2.png"
          alt="slide2"
          width={250}
          height={0}
          className="h-[300px] rounded-[30px] lg:w-[280px] lg:h-[380px] xl:w-[340px] xl:h-[440px]"
        />
        <Image
          src="/slide3.png"
          alt="slide3"
          width={250}
          height={0}
          className="h-[280px] rounded-[35px] lg:w-[230px] lg:h-[330px] xl:w-[290px] xl:h-[390px]"
        />
        <Image
          src="/slide4.png"
          alt="slide4"
          width={250}
          height={0}
          className="lg:h-[350px] xl:w-[310px] xl:h-[410px]"
        />
      </div>

      <div className="flex gap-[200px] sm2:gap-[240px] sm3:gap-[260px] sm:gap-[400px] md:gap-[480px] lg:gap-[770px] xl:gap-[1000px] absolute top-[250px] lg:top-[280px] xl:top-[310px] ">
        <Image
          src="/arrowLeftAdaptive.png"
          alt=""
          width={80}
          height={10}
          className="cursor-pointer lg:hidden"
        />
        <Image
          src="/arrowRightAdaptive.png"
          alt=""
          width={80}
          height={10}
          className="cursor-pointer lg:hidden"
        />
        <Image
          src="/arrowLeft.png"
          alt=""
          width={80}
          height={10}
          className="cursor-pointer hidden lg:block"
        />
        <Image
          src="/arrowRight.png"
          alt=""
          width={80}
          height={10}
          className="cursor-pointer hidden lg:block"
        />
      </div>

      <button className="mt-[30px] bg-[#489FC4] text-foreground px-[70px] py-4 flex items-center rounded-[30px]">
        Подробнее о всех турах
      </button>
    </div>
  );
}
