'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const choiseTours = [
  { id: 1, name: 'Город', button: 'Алматы' },
  { id: 2, name: 'Тип тура', button: 'Водный' },
  { id: 3, name: 'Дата', button: 'Любое' },
  { id: 4, name: 'Кол-во людей', button: 'Взрослые' },
];

export default function ChooseTours() {
  const [clickButton, setClickButton] = useState(false);

  return (
    <div className="mt-[120px] sm:mt-[30px] xl:gap-10 flex flex-col sm:items-center gap-5 bg-gradient-to-r from-[#489FC4] via-[#6FABC5] to-[#489FC4] w-[95%] xl:w-[90%] rounded-[40px] sm:rounded-[30px] py-8 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          className={
            !clickButton
              ? 'w-[90%] h-[50px] sm:w-[150px] xl:w-[250px] sm:h-[40px] rounded-[40px] bg-foreground text-[#747474] text-sm xl:text-lg'
              : 'w-[90%] h-[50px] sm:w-[150px] xl:w-[250px] sm:h-[40px] rounded-[40px] bg-transparent text-foreground border border-foreground text-sm xl:text-lg'
          }
          onClick={() => setClickButton(false)}>
          Подбор туров
        </button>
        <button
          className={
            clickButton
              ? 'w-[90%] h-[50px] sm:w-[300px] xl:w-[400px] sm:h-[40px] rounded-[40px] bg-foreground text-[#747474] text-xs xl:text-lg'
              : 'w-[90%] h-[50px] sm:w-[300px] xl:w-[400px] sm:h-[40px] rounded-[40px] bg-transparent text-foreground text-xs border border-foreground xl:text-lg'
          }
          onClick={() => setClickButton(true)}>
          Подбор достопримечательностей
        </button>
      </div>

      <div className="w-full flex">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-[12%] md:gap-10 lg:gap-[20px] w-full sm:px-3">
          {choiseTours.map((elem, index) => (
            <div className="flex sm:gap-[50%] md:gap-[70px] lg:gap-[150px]" key={elem.id}>
              <div className="w-full flex flex-col items-start gap-2 sm:gap-0 ml-[20px] sm:ml-0">
                <span className="text-foreground xl:text-2xl">{elem.name}</span>
                <button className="flex justify-between items-center w-[90%] h-[56px] px-7 sm:px-0 bg-foreground sm:bg-transparent text-[#1E1E1E] sm:text-foreground rounded-[40px] sm:gap-2 xl:text-2xl">
                  {elem.button}
                  <Image
                    src="/dropDownBlack.svg"
                    alt="arrow-down"
                    width={20}
                    height={10}
                    className="block sm:hidden"
                  />
                  <Image
                    src="/dropDownLight.svg"
                    alt="arrow-down"
                    width={10}
                    height={10}
                    className="hidden sm:block"
                  />
                </button>
              </div>
              {index < choiseTours.length - 1 && (
                <div className="hidden border border-foreground sm:block md:h-[80px]"></div>
              )}
            </div>
          ))}
        </div>
        <Image
          src="/searchIcon.svg"
          alt="arrow-down"
          width={50}
          height={10}
          className="hidden lg:block xl:w-[70px] "
        />
      </div>

      <button className="w-[80%] h-[45px] sm:hidden ml-[25px] mt-[30px] flex items-center justify-center gap-2 bg-white/50 rounded-[30px] text-foreground">
        Найти
        <Image src="/Search.svg" alt="arrow-down" width={30} height={10} />
      </button>
    </div>
  );
}
