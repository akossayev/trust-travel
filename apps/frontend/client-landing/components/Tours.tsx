import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import Image from 'next/image';

export default function Tours() {
  return (
    <div className="flex flex-col items-center gap-10 mt-[50px] mb-10 overflow-hidden">
      <h2 className="text-2xl font-medium">Туры</h2>

      <div className="flex flex-col gap-3 border border-[radial-gradient(circle,#CACACA,#D7D7D7)] p-5 rounded-[30px] sm:flex-row sm:p-1">
        <Button className="text-foreground py-3 px-4 bg-[#489FC4] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg">
          Классические туры
        </Button>
        <Button className="text-background py-3 px-4 bg-[radial-gradient(circle,#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg">
          Кастомные туры
        </Button>
        <Button className="text-background py-3 px-4 bg-[radial-gradient(circle,#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[230px] h-[50px] sm2:w-[260px] sm2:h-[65px] sm2:text-lg sm:w-[150px] sm:h-[40px] sm:text-xs lg:w-[190px] xl:w-[250px] xl:h-[50px] xl:text-lg">
          Тур-программа
        </Button>
      </div>

      <div className="flex gap-3">
        <div
          className="flex flex-col items-start gap-3 w-[300px] h-[300px] sm2:w-[330px] sm2:h-[330px] bg-no-repeat bg-center bg-cover rounded-[30px] pt-[120px] p-8 ml-[620px] sm1:ml-[640px] sm2:ml-[700px] sm:w-[180px] sm:h-[180px] sm:ml-0 sm:pt-[30px] sm:p-3 lg:w-[250px] lg:h-[250px] lg:pt-[80px] lg:p-6 xl:w-[350px] xl:h-[350px] xl:pt-[150px]"
          style={{ backgroundImage: 'url(/cardTour.png)' }}>
          <span className="text-foreground text-base font-semibold sm2:text-lg sm:text-base lg:text-lg xl:text-2xl">
            Экспресс тур <br />
            на Озера Кольсай <br /> и Каинды
          </span>
          <button className="flex gap-7 items-center p-1 pr-[20px] bg-white/90 text-[#489FC4] rounded-[30px] w-[200px] h-[50px] sm2:w-[220px] sm2:h-[60px] sm2:text-lg sm2:gap-5 sm:w-[120px] sm:h-[30px] sm:text-xs sm:gap-1 lg:w-[170px] lg:h-[40px] lg:text-sm lg:gap-4 xl:w-[250px] xl:h-[60px] xl:text-lg xl:gap-8">
            <Image
              src="/arrowButton.svg"
              alt=""
              width={40}
              height={0}
              loading="lazy"
              className="sm2:w-[50px] sm:w-[20px] lg:w-[35px] xl:w-[50px]"
            />
            Выбрать Тур
          </button>
        </div>

        <div
          className="flex flex-col items-start gap-3 w-[300px] h-[300px] sm2:w-[330px] sm2:h-[330px] bg-no-repeat bg-center bg-cover rounded-[30px] pt-[120px] p-8 sm:w-[180px] sm:h-[180px] sm:pt-[30px] sm:p-3 lg:w-[250px] lg:h-[250px] lg:pt-[80px] lg:p-6 xl:w-[350px] xl:h-[350px] xl:pt-[150px]"
          style={{ backgroundImage: 'url(/cardTour.png)' }}>
          <span className="text-foreground text-base font-semibold sm2:text-lg sm:text-base lg:text-lg xl:text-2xl">
            Экспресс тур <br />
            на Озера Кольсай <br /> и Каинды
          </span>
          <button className="flex gap-7 items-center p-1 pr-[20px] bg-white/90 text-[#489FC4] rounded-[30px] w-[200px] h-[50px] sm2:w-[220px] sm2:h-[60px] sm2:text-lg sm2:gap-5 sm:w-[120px] sm:h-[30px] sm:text-xs sm:gap-1 lg:w-[170px] lg:h-[40px] lg:text-sm lg:gap-4 xl:w-[250px] xl:h-[60px] xl:text-lg xl:gap-8">
            <Image
              src="/arrowButton.svg"
              alt=""
              width={40}
              height={0}
              loading="lazy"
              className="sm2:w-[50px] sm:w-[20px] lg:w-[35px] xl:w-[50px]"
            />
            Выбрать Тур
          </button>
        </div>

        <div
          className="flex flex-col items-start gap-3 w-[300px] h-[300px] sm2:w-[330px] sm2:h-[330px] bg-no-repeat bg-center bg-cover rounded-[30px] pt-[120px] p-8 sm:w-[180px] sm:h-[180px] sm:pt-[30px] sm:p-3 lg:w-[250px] lg:h-[250px] lg:pt-[80px] lg:p-6 xl:w-[350px] xl:h-[350px] xl:pt-[150px]"
          style={{ backgroundImage: 'url(/cardTour.png)' }}>
          <span className="text-foreground text-base font-semibold sm2:text-lg sm:text-base lg:text-lg xl:text-2xl">
            Экспресс тур <br />
            на Озера Кольсай <br /> и Каинды
          </span>
          <button className="flex gap-7 items-center p-1 pr-[20px] bg-white/90 text-[#489FC4] rounded-[30px] w-[200px] h-[50px] sm2:w-[220px] sm2:h-[60px] sm2:text-lg sm2:gap-5 sm:w-[120px] sm:h-[30px] sm:text-xs sm:gap-1 lg:w-[170px] lg:h-[40px] lg:text-sm lg:gap-4 xl:w-[250px] xl:h-[60px] xl:text-lg xl:gap-8">
            <Image
              src="/arrowButton.svg"
              alt=""
              width={40}
              height={0}
              loading="lazy"
              className="sm2:w-[50px] sm:w-[20px] lg:w-[35px] xl:w-[50px]"
            />
            Выбрать Тур
          </button>
        </div>
      </div>
    </div>
  );
}
