'use client';
import React from 'react';
import { useState } from 'react';
import ArrowDownDark from '../public/svg/ArrowDownDark';
import ArrowDownLight from '../public/svg/ArrowDownLight';
import SearchMobile from '../public/svg/SearchMobile';
import SearchIcon from '../public/svg/SearchIcon';
import { useRouter } from 'next/navigation';

export default function ChooseTours() {
  const [activeButton, setActiveButton] = useState(0);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-5 w-[95%] mx-auto mt-[30px] xs:mt-[20px] rounded-[40px] bg-lightblue h-auto py-8 xs2:py-9 xs3:py-10 bg-gradient-to-r from-[#489FC4] via-[#6FABC5] to-[#489FC4]">
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <button
          className={`lg:text-base text-xs xs:text-sm xs3:text-lg rounded-[60px] w-[260px] h-[45px] xs:w-[300px] xs1:w-[310px] xs2:w-[340px] xs3:w-[390px] lg:w-[250px] xs3:h-[55px] lg:h-[50px] xs:h-[50px] ${activeButton === 0 ? 'text-[#747474] bg-white' : 'border border-white text-white'}`}
          onClick={() => {
            setActiveButton(0), router.push('/');
          }}>
          Подбор туров
        </button>
        <button
          className={`text-xs lg:text-base xs:text-sm xs3:text-lg rounded-[60px] w-[260px] h-[45px] xs:w-[300px] xs1:w-[310px] xs2:w-[340px] xs3:w-[390px] lg:w-[350px] xs3:h-[55px] lg:h-[50px] xs:h-[50px] ${activeButton === 1 ? 'text-[#747474] bg-white' : 'border border-white text-white'}`}
          onClick={() => {
            setActiveButton(1), router.push('/attractionsPage');
          }}>
          Подбор достопримечательностей
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-[95%] items-center gap-2 lg:mt-[30px]">
        <div className="flex flex-col lg:flex-row gap-2 items-center lg:justify-between xl:gap-[40px]">
          <div className="flex items-center gap-[80px]">
            <div className="flex flex-col items-start gap-2 lg:gap-3">
              <span className="text-white text-sm xs:text-base xs3:text-lg lg:text-lg xl:text-xl">
                Город
              </span>
              <button className="w-[260px] h-[50px] xs:w-[300px] xs:h-[55px] xs1:w-[310px] xs2:w-[340px] xs3:w-[390px] lg:w-auto lg:h-auto xs3:h-[60px] text-dark lg:text-white lg:gap-4 text-sm xs:text-base xs3:text-lg lg:text-xl bg-white lg:bg-transparent rounded-[40px] flex items-center justify-between px-6 lg:px-0 xl:text-[22px]">
                Алматы
                <ArrowDownDark className="w-[14px] h-auto block lg:hidden" />
                <ArrowDownLight className="w-[14px] h-auto hidden lg:block" />
              </button>
            </div>
            <div className="hidden lg:block border border-white h-[90px] w-[1px] mr-[30px] xl:mr-0 xl:ml-[40px] lx:ml-[70px] lx2:ml-[90px] 2xl:ml-[110px] lx3:ml-[140px] lx4:ml-[190px]"></div>
          </div>

          <div className="flex items-center gap-[80px]">
            <div className="flex flex-col items-start gap-2 lg:gap-3">
              <span className="text-white text-sm xs:text-base xs3:text-lg lg:text-lg xl:text-xl">
                Тип тура
              </span>
              <button className="w-[260px] h-[50px] xs:w-[300px] xs:h-[55px] xs1:w-[310px] xs2:w-[340px] xs3:w-[390px] lg:w-auto lg:h-auto xs3:h-[60px] text-dark lg:text-white lg:gap-4 text-sm xs:text-base xs3:text-lg lg:text-xl bg-white lg:bg-transparent rounded-[40px] flex items-center justify-between px-6 lg:px-0 xl:text-[22px]">
                Водный
                <ArrowDownDark className="w-[14px] h-auto block lg:hidden" />
                <ArrowDownLight className="w-[14px] h-auto hidden lg:block" />
              </button>
            </div>
            <div className="hidden lg:block border border-white h-[90px] w-[1px] mr-[30px] xl:mr-0 xl:ml-[40px] lx:ml-[70px] lx2:ml-[90px] 2xl:ml-[110px] lx3:ml-[140px] lx4:ml-[190px]"></div>
          </div>

          <div className="flex items-center gap-[80px]">
            <div className="flex flex-col items-start gap-2 lg:gap-3">
              <span className="text-white text-sm xs:text-base xs3:text-lg lg:text-lg xl:text-xl">
                Дата
              </span>
              <button className="w-[260px] h-[50px] xs:w-[300px] xs:h-[55px] xs1:w-[310px] xs2:w-[340px] xs3:w-[390px] lg:w-auto lg:h-auto xs3:h-[60px] text-dark lg:text-white lg:gap-4 text-sm xs:text-base xs3:text-lg lg:text-xl bg-white lg:bg-transparent rounded-[40px] flex items-center justify-between px-6 lg:px-0 xl:text-[22px]">
                Любое
                <ArrowDownDark className="w-[14px] h-auto block lg:hidden" />
                <ArrowDownLight className="w-[14px] h-auto hidden lg:block" />
              </button>
            </div>
            <div className="hidden lg:block border border-white h-[90px] w-[1px] mr-[30px] xl:mr-0 xl:ml-[40px] lx:ml-[70px] lx2:ml-[90px] 2xl:ml-[110px] lx3:ml-[140px] lx4:ml-[190px]"></div>
          </div>

          <div className="flex flex-col items-start gap-2 lg:gap-3">
            <span className="text-white text-sm xs:text-base xs3:text-lg lg:text-lg xl:text-xl">
              Кол-во людей
            </span>
            <button className="w-[260px] h-[50px] xs:w-[300px] xs:h-[55px] xs1:w-[310px] xs2:w-[340px] xs3:w-[390px] lg:w-auto lg:h-auto xs3:h-[60px] text-dark lg:text-white lg:gap-4 text-sm xs:text-base xs3:text-lg lg:text-xl bg-white lg:bg-transparent rounded-[40px] flex items-center justify-between px-6 lg:px-0 xl:text-[22px]">
              Взрослые
              <ArrowDownDark className="w-[14px] h-auto block lg:hidden" />
              <ArrowDownLight className="w-[14px] h-auto hidden lg:block" />
            </button>
          </div>
        </div>

        <button className="bg-[#fff]/50 flex items-center justify-center rounded-[60px] gap-3 text-sm text-white mt-[20px] w-[210px] h-[40px] xs:text-base xs:w-[260px] xs:h-[45px] xs1:w-[270px] xs2:w-[300px] xs3:w-[340px] xs3:h-[50px] xs3:text-lg lg:hidden">
          Найти
          <SearchMobile className="block lg:hidden" />
        </button>
        <button>
          <SearchIcon className="hidden lg:block w-[70px] h-[70px] xl:w-[80px] xl:h-[80px]" />
        </button>
      </div>
    </div>
  );
}
