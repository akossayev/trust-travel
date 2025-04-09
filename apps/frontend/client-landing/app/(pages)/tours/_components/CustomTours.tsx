import React from 'react';
import Image from 'next/image';
import CustomTourImage from '../../../../public/custom-tour-culture-card.png';

export default function CustomTour() {
  const arrayButtons = [
    { id: 1, title: 'Природные достопримечательсности', count: 0 },
    { id: 2, title: 'Культурные достопримечательсности', count: 0 },
    { id: 3, title: 'Шоп-тур', count: 0 },
    { id: 4, title: 'Поесть', count: 0 },
  ];

  return (
    <div className="flex flex-col items-center gap-[20px] w-full lg:px-[50px] lg:mt-[50px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full">
        <div className="flex lg:flex-col items-center gap-[20px]">
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] ">
            Природные достопримечательности
            <Image
              src={CustomTourImage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] ">
            Природные достопримечательности
            <Image
              src={CustomTourImage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] ">
            Природные достопримечательности
            <Image
              src={CustomTourImage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[20px] lg:mt-0 gap-[15px] lg:gap-[20px] lg:grid-cols-3">
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[180px] lg:h-[180px] rounded-[30px]"></div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[180px] lg:h-[180px] rounded-[30px]"></div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[180px] lg:h-[180px] rounded-[30px]"></div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:w-full gap-[20px] px-[20px] lg:px-0 mt-[10px] lg:mt-[20px]">
        <h2 className="mr-[200px] lg:text-xl">Корзина</h2>

        <ul className="flex flex-col lg:flex-row justify-center gap-[10px]">
          {arrayButtons.map((elem) => (
            <li
              key={elem.id}
              className="border border-[to-bottom,#CACACA,#D7D7D7)] text-xs lg:text-sm py-[10px] px-[15px] rounded-[40px]">
              {elem.title} <span>({elem.count})</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center w-full gap-[10px] mt-[20px] lg:mt-0">
          <div className="bg-[#ccc]/50 w-[150px] h-[150px] lg:w-[185px] lg:h-[185px] rounded-[40px]"></div>
          <div className="bg-[#ccc]/50 w-[150px] h-[150px] lg:w-[185px] lg:h-[185px] rounded-[40px]"></div>
          <div className="bg-[#ccc]/50 w-[150px] h-[150px] lg:w-[185px] lg:h-[185px] rounded-[40px]"></div>
          <div className="bg-[#ccc]/50 w-[150px] h-[150px] lg:w-[185px] lg:h-[185px] rounded-[40px]"></div>
        </div>
      </div>

      <button className="bg-[#489FC4] text-light py-[10px] rounded-[40px] w-[75%] lg:w-[30%] mt-[30px]">
        Купить
      </button>
    </div>
  );
}
