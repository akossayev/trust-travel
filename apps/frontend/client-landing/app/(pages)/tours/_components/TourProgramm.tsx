import React from 'react';
import Image from 'next/image';
import CustomTourImage from '../../../../public/custom-tour-culture-card.png';
import Card1 from '../../../../public/card1.png';
import Card2 from '../../../../public/card2.png';
import Card3 from '../../../../public/card3.png';
import Card4 from '../../../../public/card4.png';
import Card5 from '../../../../public/card5.png';

export default function TourProgramm() {
  return (
    <div className="px-[20px] lg:px-[50px] lg:mt-[80px] w-full flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row lg:gap-0 lg:justify-between lg:items-center gap-[30px]">
        <div className="flex lg:flex-col gap-[15px] lg:gap-[5px] ml-[0px] flex-nowrap lg:items-center">
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[185px] lg:h-[105px] lg:mb-[-50px]  rounded-[20px] lg:rounded-[40px] flex-shrink-0">
            <p className="ml-[20px] mt-[10px]">Знакомство с Казахстаном!</p>
          </div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[210px] lg:h-[130px] rounded-[20px] lg:rounded-[40px] flex-shrink-0">
            <p className="ml-[20px] mt-[20px]">Знакомство с Казахстаном!</p>
          </div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[240px] lg:h-[150px] rounded-[20px] lg:rounded-[40px] flex-shrink-0">
            <p className="ml-[20px] mt-[30px]">
              Знакомство с <br /> Казахстаном!
            </p>
          </div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[210px] lg:h-[130px] rounded-[20px] lg:rounded-[40px] flex-shrink-0">
            <p className="ml-[20px] mt-[20px]">Знакомство с Казахстаном!</p>
          </div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[185px] lg:h-[105px] lg:mt-[-50px]  rounded-[20px] lg:rounded-[40px] flex-shrink-0">
            <p className="ml-[20px] mt-[10px]">Знакомство с Казахстаном!</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3  gap-[15px] ml-[10px]">
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px]">
            <Image
              src={Card1}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px]">
            {' '}
            <Image
              src={Card2}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px]">
            {' '}
            <Image
              src={Card3}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block">
            {' '}
            <Image
              src={Card2}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block">
            {' '}
            <Image
              src={Card5}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block">
            {' '}
            <Image
              src={Card2}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block">
            {' '}
            <Image
              src={Card4}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block">
            {' '}
            <Image
              src={Card3}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block">
            {' '}
            <Image
              src={Card5}
              alt=""
              width={100}
              height={50}
              className="rounded-[20px] w-full h-full"
            />
          </div>
        </div>
      </div>

      <button className="bg-[#489FC4] text-light w-[80%] lg:w-[22%] py-[10px] rounded-[50px] ml-[10%] lg:ml-0 text-xs mt-[70px]">
        Купить
      </button>
    </div>
  );
}
