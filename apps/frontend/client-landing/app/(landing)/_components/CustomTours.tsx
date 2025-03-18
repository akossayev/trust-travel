import React from 'react';
import Image from 'next/image';

export default function Component1() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="w-[300px] h-[150px] rounded-[30px] bg-[#F6F6F6] pt-8 pl-6 relative overflow-hidden">
            <h2 className="text-lg">Культурные достопримечательности</h2>
            <div className="absolute bottom-0 top-[60] right-[-20] w-24 md:w-32">
              <Image src="/custom-tour-culture-card.png" alt="" width={100} height={50} />
            </div>
          </div>
          <div className="w-[300px] h-[150px] rounded-[30px] bg-[#F6F6F6] pt-8 pl-6 relative overflow-hidden">
            <h2 className="text-lg">Культурные достопримечательности</h2>
            <div className="absolute bottom-0 top-[60] right-[-20] w-24 md:w-32">
              <Image src="/custom-tour-culture-card.png" alt="" width={100} height={50} />
            </div>
          </div>
          <div className="w-[300px] h-[150px] rounded-[30px] bg-[#F6F6F6] pt-8 pl-6 relative overflow-hidden">
            <h2 className="text-lg">Культурные достопримечательности</h2>
            <div className="absolute bottom-0 top-[60] right-[-20] w-24 md:w-32">
              <Image src="/custom-tour-culture-card.png" alt="" width={100} height={50} />
            </div>
          </div>
          <div className="w-[300px] h-[150px] rounded-[30px] bg-[#F6F6F6] pt-8 pl-6 relative overflow-hidden">
            <h2 className="text-lg">Культурные достопримечательности</h2>
            <div className="absolute bottom-0 top-[60] right-[-20] w-24 md:w-32">
              <Image src="/custom-tour-culture-card.png" alt="" width={100} height={50} />
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div
            style={{ backgroundImage: 'url(/card-tour.png)' }}
            className="w-[200px] h-[200px] bg-cover rounded-[40px] pt-[100px] pl-[20px]">
            <span className="text-foreground">
              Экспресс тур <br /> на Озера Кольсай и Каинды
            </span>
          </div>
          <div
            style={{ backgroundImage: 'url(/card-tour.png)' }}
            className="w-[200px] h-[200px] bg-cover rounded-[40px] pt-[100px] pl-[20px]">
            <span className="text-foreground">
              Экспресс тур <br /> на Озера Кольсай и Каинды
            </span>
          </div>
          <div
            style={{ backgroundImage: 'url(/card-tour.png)' }}
            className="w-[200px] h-[200px] bg-cover rounded-[40px] pt-[100px] pl-[20px]">
            <span className="text-foreground">
              Экспресс тур <br /> на Озера Кольсай и Каинды
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-xl">Корзина</h2>
          <ul className="flex items-center gap-5">
            <li className="py-3 px-5 border border-[#489FC4] text-[#489FC4] rounded-[40px] cursor-pointer">
              Природные достопримечательности(1)
            </li>
            <li className="py-3 px-5 border border-[#E7E7E7] rounded-[40px] cursor-pointer">
              Культурные достопримечательности(0)
            </li>
            <li className="py-3 px-5 border border-[#E7E7E7] rounded-[40px] cursor-pointer">
              Шоп-тур(0)
            </li>
            <li className="py-3 px-5 border border-[#E7E7E7] rounded-[40px] cursor-pointer">
              Поесть(0)
            </li>
          </ul>
          <div>
            <div className="w-[200px] h-[150px] rounded-[20px] border-2 border-dashed border-black flex items-center justify-center">
              Выбрать
            </div>
          </div>
        </div>
        <button className="bg-[#489FC4] p-3 text-foreground rounded-[50px] w-[250px]">
          Купить
        </button>
      </div>
    </div>
  );
}
