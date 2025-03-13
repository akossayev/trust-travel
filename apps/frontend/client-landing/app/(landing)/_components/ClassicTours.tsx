import React from 'react';
import Image from 'next/image';
import arrowButtonBlue from '@/public/arrow-button-blue.svg';

// http://localhost:9000/bucketName/object_key

const toursCards = [
  { id: 1, imgSrc: '/card-tour.png' },
  { id: 2, imgSrc: '/card-tour.png' },
  { id: 3, imgSrc: '/card-tour.png' },
];

export default function TourCard() {
  return (
    <div className="flex gap-[60px]">
      {toursCards.map((elem) => (
        <div
          key={elem.id}
          className="flex flex-col items-start gap-3 w-[300px] h-[300px] sm2:w-[330px] sm2:h-[330px] bg-no-repeat bg-center bg-cover rounded-[30px] pt-[120px] p-8 sm:w-[180px] sm:h-[180px] sm:pt-[30px] sm:p-3 lg:w-[250px] lg:h-[250px] lg:pt-[80px] lg:p-6 xl:w-[350px] xl:h-[350px] xl:pt-[150px]"
          style={{ backgroundImage: 'url(/card-tour.png)' }}>
          <span className="text-foreground text-base font-semibold sm2:text-lg sm:text-base lg:text-lg xl:text-2xl">
            Экспресс тур <br />
            на Озера Кольсай <br /> и Каинды
          </span>
          <button className="flex gap-7 items-center p-1 pr-[20px] bg-white/90 text-[#489FC4] rounded-[30px] w-[200px] h-[50px] sm2:w-[220px] sm2:h-[60px] sm2:text-lg sm2:gap-5 sm:w-[120px] sm:h-[30px] sm:text-xs sm:gap-1 lg:w-[170px] lg:h-[40px] lg:text-sm lg:gap-4 xl:w-[250px] xl:h-[60px] xl:text-lg xl:gap-8">
            <Image
              src={arrowButtonBlue}
              alt="arrow-button-blue"
              width={40}
              height={40}
              loading="lazy"
              className="sm2:w-[50px] sm:w-[20px] lg:w-[35px] xl:w-[50px]"
            />
            Выбрать Тур
          </button>
        </div>
      ))}
    </div>
  );
}
