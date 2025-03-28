import React from 'react';
import ArrowButtonBlue from '@/public/svg/ArrowButtonBlue';

export default function TourClassicCards() {
  return (
    <div className="flex gap-[10px] lg:gap-[40px] xl:gap-[60px]">
      <div
        className="ml-[580px] sm:ml-0 xs:ml-[630px] xs1:ml-[640px] xs2:ml-[720px] w-[280px] h-[280px] xs:w-[310px] h-[310px] xs2:w-[350px] lg:w-[280px] h-[270px] xl:w-[320px] xl:h-[320px] xs:h-[350px] bg-center bg-cover bg-no-repeat rounded-[40px] pl-[30px] pt-[150px] xs:pt-[130px]"
        style={{ backgroundImage: 'url(/card-tour.png)' }}>
        <p className="text-white text-lg xs:text-xl lg:text-lg lg:mt-[-40px] lx:text-2xl lx:mt-[-15px] xs2:text-2xl xl:text-xl xl:mt-[10px] xs:mt-[0] mt-[-30px] font-semibold">
          Экспресс тур <br /> на Озера Кольсай <br /> и Каинды{' '}
        </p>
        <button className="text-[#489FC4] flex items-center xs2:text-xl lx:text-xl lg:text-lg lg:gap-[15px] lg:pr-[20px] p-1 pr-[20px] xs:pr-[30px] xs:gap-[25px] gap-[15px] lx:gap-[25px] lx:pr-[35px] rounded-[60px] bg-white/90 mt-[20px]">
          <ArrowButtonBlue className="w-[40px] h-[40px] xs2:w-[50px] lg:w-[40px] lg:h-[40px] lx:w-[50px] lx:h-[50px]" />
          Выбрать Тур
        </button>
      </div>
      <div
        className="w-[280px] h-[280px] xs:w-[310px] h-[310px] xs2:w-[350px] lg:w-[280px] h-[270px] xl:w-[320px] xl:h-[320px] xs:h-[350px] bg-center bg-cover bg-no-repeat rounded-[40px] pl-[30px] pt-[150px] xs:pt-[130px]"
        style={{ backgroundImage: 'url(/card-tour.png)' }}>
        <p className="text-white text-lg xs:text-xl lg:text-lg lg:mt-[-40px] lx:text-2xl lx:mt-[-15px] xs2:text-2xl xl:text-xl xl:mt-[10px] xs:mt-[0] mt-[-30px] font-semibold">
          Экспресс тур <br /> на Озера Кольсай <br /> и Каинды{' '}
        </p>
        <button className="text-[#489FC4] flex items-center xs2:text-xl lx:text-xl lg:text-lg lg:gap-[15px] lg:pr-[20px] p-1 pr-[20px] xs:pr-[30px] xs:gap-[25px] gap-[15px] lx:gap-[25px] lx:pr-[35px] rounded-[60px] bg-white/90 mt-[20px]">
          <ArrowButtonBlue className="w-[40px] h-[40px] xs2:w-[50px] lg:w-[40px] lg:h-[40px] lx:w-[50px] lx:h-[50px]" />
          Выбрать Тур
        </button>
      </div>
      <div
        className="w-[280px] h-[280px] xs:w-[310px] h-[310px] xs2:w-[350px] lg:w-[280px] h-[270px] xl:w-[320px] xl:h-[320px] xs:h-[350px] bg-center bg-cover bg-no-repeat rounded-[40px] pl-[30px] pt-[150px] xs:pt-[130px]"
        style={{ backgroundImage: 'url(/card-tour.png)' }}>
        <p className="text-white text-lg xs:text-xl lg:text-lg lg:mt-[-40px] lx:text-2xl lx:mt-[-15px] xs2:text-2xl xl:text-xl xl:mt-[10px] xs:mt-[0] mt-[-30px] font-semibold">
          Экспресс тур <br /> на Озера Кольсай <br /> и Каинды{' '}
        </p>
        <button className="text-[#489FC4] flex items-center xs2:text-xl lx:text-xl lg:text-lg lg:gap-[15px] lg:pr-[20px] p-1 pr-[20px] xs:pr-[30px] xs:gap-[25px] gap-[15px] lx:gap-[25px] lx:pr-[35px] rounded-[60px] bg-white/90 mt-[20px]">
          <ArrowButtonBlue className="w-[40px] h-[40px] xs2:w-[50px] lg:w-[40px] lg:h-[40px] lx:w-[50px] lx:h-[50px]" />
          Выбрать Тур
        </button>
      </div>
    </div>
  );
}
