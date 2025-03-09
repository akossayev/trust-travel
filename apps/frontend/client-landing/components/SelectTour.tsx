import React from 'react';
import Image from 'next/image';
import SelectTourCard from './SelectTourCard';

export default function SelectTour() {
  return (
    <div className="flex flex-col items-center w-full relative">
      <div
        className="flex flex-col items-center justify-between py-7 w-[95%] h-[550px] lg:h-[600px] 2xl:h-[620px] rounded-[30px] bg-center bg-no-repeat overflow-x-hidden"
        style={{ backgroundImage: 'url(/bgMountain.png)' }}>
        <p className="flex flex-col text-foreground text-base font-semibold xs:text-2xl sm3:text-3xl xl:text-[42px] 2xl:text-[52px] 2xl:gap-8 sm:mr-[150px] md:mr-[280px] lg:mr-[55%] xl:mr-[560px] 2xl:mr-[580px] 2xl:mt-[20px]">
          <span>Путешествуйте</span>
          <span>с удовольствием, выбирайте</span>
          <span>TrusTTravel!</span>
        </p>
        <div className="">
          <button className="absolute left-[0] xs:left-[70px] sm2:left-[100px] sm3:left-[120px] sm:left-[30px] lg:left-[50px] xl:left-[70px] 2xl:left-[110px] sm4:left-[300px] top-[580px] sm:top-[480px] lg:top-[470px] xl:top-[460px] 2xl:top-[525px] sm:bg-white/90 border border-[#489FC4] text-[#489FC4] text-[6px] xs:text-lg xl:text-xl 2xl:text-2xl p-0 xs:p-1 pr-1 xs:pr-10 sm:pr-5 xl:pr-7 rounded-[30px] flex items-center gap-1 xs:gap-7 sm:gap-2 cursor-pointer">
            <Image
              src="/arrowButton.svg"
              alt="arrow-button"
              width={20}
              height={10}
              className="xs:w-[40px] sm:w-[30px] lg:w-[40px] xl:w-[50px] 2xl:w-[55px]"
            />
            Выбрать тур
          </button>

          <div className="flex items-center gap-3 2xl:gap-6 ml-[150px] sm3:ml-[170px] sm:ml-[350px] lg:ml-[510px] xl:ml-[730px] 2xl:ml-[820px]">
            <SelectTourCard title1="Активный" title2="отдых" imageUrl="/cardTour.png" />
            <SelectTourCard title1="Активный" title2="отдых" imageUrl="/cardTour.png" />
            <SelectTourCard />
          </div>
        </div>
      </div>
    </div>
  );
}
