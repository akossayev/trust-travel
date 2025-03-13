'use client';
import React from 'react';
import { useState } from 'react';
import ToursCards from './ClassicTours';
import Component1 from './Component1';
import Component2 from './Component2';

export default function Tours() {
  const [selectTypeTour, setSelectTypeTour] = useState<number>(0);
  const [example, setExample] = useState(0);

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
    <div className="flex flex-col items-center gap-10 mt-[50px] mb-10 overflow-hidden">
      <h2 className="text-2xl font-medium">Туры</h2>

      <div className="flex flex-col gap-3 border border-[to-bottom,#CACACA,#D7D7D7)] p-5 rounded-[30px] sm:flex-row sm:p-1">
        {typeTour.map((elem) => (
          <button
            key={elem.id}
            className={
              selectTypeTour === elem.id
                ? 'text-foreground py-3 px-4 bg-[#489FC4] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg'
                : 'text-background py-3 px-4 bg-[radial-gradient(#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg'
            }
            onClick={() => test(elem.id)}>
            {elem.name}
          </button>
        ))}
      </div>

      {example === 0 && <ToursCards />}
      {example === 1 && <Component1 />}
      {example === 2 && <Component2 />}
    </div>
  );
}
