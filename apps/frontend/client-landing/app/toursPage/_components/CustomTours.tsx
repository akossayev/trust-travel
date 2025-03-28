import React from 'react';
import Image from 'next/image';

export default function Component1() {
  return (
    <div className="flex flex-col items-center gap-[50px] w-full px-[80px]">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-10">
          <div className="bg-[#F6F6F6] rounded-[40px] w-[318px] h-[180px] pl-[10%] pt-[10%]">
            <h2>
              Природные <br /> достопримечательности
            </h2>
          </div>
          <div className="bg-[#F6F6F6] rounded-[40px] w-[318px] h-[180px] pl-[10%] pt-[10%]">
            <h2>
              Природные <br /> достопримечательности
            </h2>
          </div>
          <div className="bg-[#F6F6F6] rounded-[40px] w-[318px] h-[180px] pl-[10%] pt-[10%]">
            <h2>
              Природные <br /> достопримечательности
            </h2>
          </div>
        </div>

        <div className="flex gap-10 mr-[3%]">
          <div className="bg-[#000] w-[240px] h-[235px] rounded-[40px]"></div>
          <div className="bg-[#000] w-[240px] h-[235px] rounded-[40px]"></div>
          <div className="bg-[#000] w-[240px] h-[235px] rounded-[40px]"></div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[30px] w-full">
        <h2 className="text-2xl">Корзина</h2>
        <ul className="flex items-center gap-5">
          <li className="text-[#489FC4] border border-[#489FC4] rounded-[40px] py-[10px] px-[30px]">
            Природные достопримечательности(1)
          </li>
          <li className="text-dark border border-[#E7E7E7] rounded-[40px] py-[10px] px-[30px]">
            Культурные достопримечательности(0)
          </li>
          <li className="text-dark border border-[#E7E7E7] rounded-[40px] py-[10px] px-[30px]">
            Шоп-тур(0)
          </li>
          <li className="text-dark border border-[#E7E7E7] rounded-[40px] py-[10px] px-[30px]">
            Поесть(0)
          </li>
        </ul>
        <div className="flex items-center gap-[20px]">
          <div className="bg-[#000] w-[240px] h-[235px] rounded-[40px]"></div>
          <div className="relative w-[240px] h-[235px] border-2 border-dashed border-black rounded-[30px] flex items-center justify-center">
            <span className="text-black">Выбрать</span>
            <button className="absolute top-5 right-5 text-black text-xl">X</button>
          </div>
          <div className="relative w-[240px] h-[235px] border-2 border-dashed border-black rounded-[30px] flex items-center justify-center">
            <span className="text-black">Выбрать</span>
            <button className="absolute top-5 right-5 text-black text-xl">X</button>
          </div>
        </div>
      </div>
      <button className="w-[320px] h-[50px] rounded-[50px] bg-[#489FC4] text-white">Купить</button>
    </div>
  );
}
