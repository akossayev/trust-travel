'use client';
import React from 'react';
import { useState } from 'react';
import ClassicTours from './_components/ClassicTours';
import CustomTours from './_components/CustomTours';
import TourProgramm from './_components/TourProgramm';
import { useRouter } from 'next/navigation';

export default function Tours() {
  const [selectTypeTour, setSelectTypeTour] = useState<number>(0);
  const [example, setExample] = useState(0);
  const router = useRouter();
  
  const typeTour = [
    { id: 0, name: 'Классические туры' },
    { id: 1, name: 'Кастомные туры' },
    { id: 2, name: 'Тур-программа' },
  ];

  const test = (index: number) => {
    setSelectTypeTour(index);
    setExample(index);
  };

  return (
    <div className="flex flex-col items-center gap-10 lg:gap-0 mt-[100px] mb-[100px] overflow-hidden lg:mt-[100px]">
      <h2 className="text-2xl font-medium lg:mb-[50px]">Туры</h2>

      <div className="flex flex-col gap-[8px] border border-[to-bottom,#CACACA,#D7D7D7)] p-3 rounded-[30px] sm:flex-row sm:p-1">
        {typeTour.map((elem) => (
          <button
            key={elem.id}
            className={
              selectTypeTour === elem.id
                ? 'text-white text-xs py-3 px-4 bg-[#489FC4] rounded-full w-[180px] xs2:w-[270px] h-[40px] xs3:w-[300px] xs2:h-[60px] xs3:h-[65px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] lg:text-base xl:h-[55px] xl:text-xl xs3:text-xl flex items-center justify-center'
                : 'text-background text-xs py-3 px-4 bg-[radial-gradient(#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[180px] xs2:w-[270px] xs3:w-[300px] h-[40px] xs2:h-[60px] xs3:h-[65px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg lg:text-base sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[55px] xl:text-xl xs3:text-xl flex items-center justify-center'
            }
            onClick={() => test(elem.id)}>
            {elem.name}
          </button>
        ))}
      </div>

      {example == 0 && <ClassicTours />}
      {example === 1 && <CustomTours />}
      {example === 2 && <TourProgramm />}
    </div>
  );
}
