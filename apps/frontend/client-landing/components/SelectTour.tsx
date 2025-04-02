'use client';
import React from 'react';
import ArrowButtonBlue from '../public/svg/ArrowButtonBlue';
import ArrowButtonSilver from '../public/svg/ArrowButtonSilver';
import { useRouter } from 'next/navigation';

export default function SelectTour() {
  const router = useRouter();

  return (
    <div className="h-[460px] xs:h-[590px] xs2:h-[630px] xs3:h-[670px] lg:h-[613px] overflow-x-hidden mt-[10px]">
      <div
        className="flex flex-col justify-between w-[95%] h-[380px] xs:h-[510px] xs2:h-[550px] xs3:h-[590px] lg:h-[613px] mx-auto py-[20px] lg:py-[30px] lg:pl-[30px] pl-[20px] rounded-[30px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/bg-Mountain.png)' }}>
        <h2 className="text-white font-semibold leading-[20px] xs:text-xl xs1:text-[22px] xs2:text-2xl lg:text-4xl xl:text-5xl lx:text-[52px] lx:font-bold xs3:text-[27px] xs3:leading-[33px] lg:leading-[50px] xl:leading-[65px] xs:leading-[28px]">
          Путешествуйте <br /> с удовольствием, выбирайте <br /> TrusTTravel!
        </h2>
        <div className="flex flex-col relative sm:flex-row-reverse sm:justify-between sm:items-end sm:static">
          <div className="flex gap-2 absolute bottom-0 left-[45px] xs1:left-[55px] sm:static sm:mr-[-50px]">
            <div className="w-[100px] xs:w-[125px] xs2:w-[140px] lg:w-[180px] lx:w-[208px] h-[115px] xs:h-[130px] xs2:h-[150px] lg:h-[200px] lx:h-[223px] rounded-[20px] bg-[#fff]/50"></div>
            {/* <div className="flex flex-col items-center justify-between py-2 w-[100px] xs:w-[125px] xs2:w-[140px] lg:w-[180px] lx:w-[208px] h-[115px] xs:h-[130px] xs2:h-[150px] lg:h-[200px] lx:h-[223px] rounded-[20px] bg-[#fff]/50">
              <div className="flex items-center justify-between px-5">
                <span className="text-light text-2xl">Активный отдых</span>
                <ArrowButtonSilver className="w-[70px] h-[70px]" />
              </div>
              <div className="bg-dark w-[190px] h-[110px] rounded-[20px]"></div>
            </div> */}
            <div className="w-[100px] xs:w-[125px] xs2:w-[140px] lg:w-[180px] lx:w-[208px] h-[115px] xs:h-[130px] xs2:h-[150px] lg:h-[200px] lx:h-[223px] rounded-[20px] bg-[#fff]/50"></div>
            <div className="w-[100px] xs:w-[125px] xs2:w-[140px] lg:w-[180px] lx:w-[208px] h-[115px] xs:h-[130px] xs2:h-[150px] lg:h-[200px] lx:h-[223px] rounded-[20px] bg-[#fff]/50"></div>
          </div>
          <button
            className="flex items-center gap-[25px] xs:gap-[20px] pr-[25px] pl-[3px] py-[3px] xs:pl-[4px] xs:py-[4px] rounded-[60px] text-lightblue border border-lightblue absolute bottom-[-100px] ml-[30px] xs:ml-[50px] xs:text-lg xs1:pr-[35px] xs1:gap-[30px] xs2:pr-[40px] xs2:gap-[35px] xs3:ml-[80px] sm:static sm:py-5 sm:gap-2 sm:ml-0 sm:h-[50px] sm:border-0 sm:bg-[#fff]/90 sm:text-base lg:text-xl lg:pr-[20px] lg:gap-[15px] lx:h-[60px] lx:pl-[6px] lx:text-[22px] lx:pr-[30px]"
            onClick={() => router.push('/toursPage')}>
            <ArrowButtonBlue className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] xs:w-[50px] xs:h-[50px] lg:w-[40px] lg:h-[40px] lx:w-[50px] lx:h-[50px]" />
            Выбрать Тур
          </button>
        </div>
      </div>
    </div>
  );
}
