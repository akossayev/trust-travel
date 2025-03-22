'use client';
import React from 'react';
import { useState } from 'react';
import ClassicTours from '../../tours/_components/ClassicTours';
import CustomTours from '../../tours/_components/CustomTours';
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
    <div className="flex flex-col items-center gap-10 mt-[100px] mb-[100px] overflow-hidden xl:mt-[150px]">
      <h2 className="text-2xl font-medium">Туры</h2>

      <div className="flex flex-col gap-3 border border-[to-bottom,#CACACA,#D7D7D7)] p-5 rounded-[30px] sm:flex-row sm:p-1">
        {typeTour.map((elem) => (
          <button
            key={elem.id}
            className={
              selectTypeTour === elem.id
                ? 'text-white py-3 px-4 bg-[#489FC4] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg'
                : 'text-background py-3 px-4 bg-[radial-gradient(#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg'
            }
            onClick={() => test(elem.id)}>
            {elem.name}
          </button>
        ))}
      </div>

      {example === 0 && <ClassicTours />}
      {example === 1 && <CustomTours />}

      <button
        className="px-10 py-3 rounded-[30px] text-lg bg-[#489FC4] text-white"
        onClick={() => router.push('/tours')}>
        Подробнее о всех турах
      </button>
    </div>
  );
}
