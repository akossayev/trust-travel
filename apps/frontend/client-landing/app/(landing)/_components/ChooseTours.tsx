'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import ArrowDownDark from '../svg-icons/ArrowDownDark';
import ArrowDownLight from '../svg-icons/ArrowDownLight';
import SearchIcon from '../svg-icons/SearchIcon';
import SearchMobile from '../svg-icons/SearchMobile';

const choiseTours = [
  { id: 1, name: 'Город', button: 'Алматы' },
  { id: 2, name: 'Тип тура', button: 'Водный' },
  { id: 3, name: 'Дата', button: 'Любое' },
  { id: 4, name: 'Кол-во людей', button: 'Взрослые' },
];

export default function ChooseTours() {
  const [clickButton, setClickButton] = useState(false);

  return (
    <div className="my-[30px] lg:my-0 overflow-hidden mx-[10px] max-w-[95%] xl:gap-10 flex flex-col items-center sm:items-center gap-5 bg-gradient-to-r from-[#489FC4] via-[#6FABC5] to-[#489FC4] xl:mx-5 xl:w-full rounded-[40px] sm:rounded-[30px] sm:max-w-[97%] lg:max-w-[98%] py-10 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full ">
        <button
          className={
            !clickButton
              ? 'w-[90%] h-[50px] sm:w-[150px] xl:w-[250px] rounded-[40px] bg-foreground text-[#747474] text-sm xl:text-lg'
              : 'w-[90%] h-[50px] sm:w-[150px] xl:w-[250px] rounded-[40px] bg-transparent text-foreground border border-foreground text-sm xl:text-lg'
          }
          onClick={() => setClickButton(false)}>
          Подбор туров
        </button>
        <button
          className={
            clickButton
              ? 'w-[90%] h-[50px] sm:w-[300px] xl:w-[400px] rounded-[40px] bg-foreground text-[#747474] text-xs xl:text-lg'
              : 'w-[90%] h-[50px] sm:w-[300px] xl:w-[400px] rounded-[40px] bg-transparent text-foreground text-xs border border-foreground xl:text-lg'
          }
          onClick={() => setClickButton(true)}>
          Подбор достопримечательностей
        </button>
      </div>

      <div className="w-full flex items-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-[12%] md:gap-5 lg:gap-[20px] w-full sm:px-3">
          {choiseTours.map((elem, index) => (
            <div
              className="flex sm:gap-[50%] md:gap-[70px] lg:gap-[140px] xl:gap-[200px] 2xl:gap-[250px]"
              key={elem.id}>
              <div className="w-full flex flex-col items-start justify-between gap-2 sm:gap-0 ml-[20px] sm:ml-0">
                <span className="text-foreground text-sm xl:text-2xl">{elem.name}</span>
                <button className="text-sm flex justify-between items-center w-[95%] h-[56px] px-7 sm:px-0 bg-foreground sm:bg-transparent text-[#1E1E1E] sm:text-foreground rounded-[40px] sm:gap-2 xl:text-2xl">
                  {elem.button}
                  <div className="block sm:hidden">
                    <ArrowDownDark />
                  </div>
                  <div className="hidden sm:block">
                    <ArrowDownLight />
                  </div>
                </button>
              </div>
              {index < choiseTours.length - 1 && (
                <div className="hidden border border-foreground sm:block md:h-[80px]"></div>
              )}
            </div>
          ))}
        </div>
        <SearchIcon className="hidden sm:block w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] xl:h-[90px] xl:w-[90px] cursor-pointer" />
      </div>

      <button className="w-[80%] h-[55px] sm:hidden mt-[30px] flex items-center justify-center gap-2 bg-white/50 rounded-[30px] text-foreground cursor-pointer">
        Найти
        <SearchMobile />
      </button>
    </div>
  );
}
