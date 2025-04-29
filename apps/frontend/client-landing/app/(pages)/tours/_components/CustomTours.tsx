'use client';

import React from 'react';
import Image from 'next/image';

import CulturePage from '../../../../public/custom-tour-culture-card.png';
import ShoppingPage from '../../../../public/shopping.png';
import NaturePage from '../../../../public/nature.png';
import FoodPage from '../../../../public/food.png';

export default function CustomTour() {
  const arrayButtons = [
    { id: 1, title: 'Природные достопримечательсности', count: 1 },
    { id: 2, title: 'Культурные достопримечательсности', count: 0 },
    { id: 3, title: 'Шоп-тур', count: 0 },
    { id: 4, title: 'Поесть', count: 0 },
  ];

  return (
      <div className="flex flex-col items-center gap-5 w-full max-w-[1300px] px-4 lg:px-[50px] lg:mt-[50px]">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-[60px] w-full">
          {/* Category cards */}
            {/* Category cards */}
            <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-2 lg:flex lg:flex-col lg:gap-4 lg:w-[270px]">
                {[
                    { title: 'Природные достопримечательности', img: NaturePage, highlight: true },
                    { title: 'Культурные достопримечательности', img: CulturePage },
                    { title: 'Шоп-тур', img: ShoppingPage },
                    { title: 'Поесть', img: FoodPage },
                ].map((item, i) => (
                    <div
                        key={i}
                        className={`relative flex flex-col justify-between rounded-[20px] p-4 h-[145px] sm:h-[160px] w-full bg-[#F6F6F6] ${
                            item.highlight ? 'border-[3px] border-[#489FC4]' : ''
                        }`}
                    >
                        <div className="text-sm sm:text-base font-medium leading-snug pr-[50px]">
                            {item.title}
                        </div>
                        <Image
                            src={item.img}
                            alt=""
                            width={80}
                            height={80}
                            className="absolute bottom-2 right-2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain"
                        />
                    </div>
                ))}
            </div>


            {/* Tour cards */}
          <div className="mt-5 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {[
              { title: 'Экспресс тур на озера Кольсай и Каинды', img: '/card6.png' },
              { title: 'Весенний тур на озера Кольсай и Каинды', img: '/card7.jpg' },
              { title: 'Тур в Чарынский каньон — Гранд-Каньон Казахстана', img: '/card8.jpg' },
            ].map((card, index) => (
                <div key={index} className="bg-[#ccc]/50 rounded-[30px] w-full h-[130px] lg:w-[240px] lg:h-[235px]">
                  <div
                      className="relative w-full h-full bg-cover bg-center rounded-[30px]"
                      style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <div className="absolute text-[14px] sm:text-[16px] lg:text-[20px] font-extrabold text-white w-[180px] bottom-[20px] left-[20px]">
                      {card.title}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Basket section */}
        <div className="flex flex-col items-center lg:items-start lg:w-full gap-5 mt-5 w-full">
          <h2 className="text-lg lg:text-xl">Корзина</h2>

          {/* Scrollable buttons */}
          <ul className="flex gap-3 overflow-x-auto whitespace-nowrap w-full px-1 scrollbar-hide">
            {arrayButtons.map((elem) => (
                <li
                    key={elem.id}
                    className="flex-shrink-0 border border-[#CACACA] text-sm py-2 px-4 rounded-full bg-white"
                >
                  {elem.title} <span>({elem.count})</span>
                </li>
            ))}
          </ul>

          {/* Tour list below корзина */}
          <div className="flex overflow-x-auto gap-4 w-full scrollbar-hide">
            {[
              { title: 'Экспресс тур в Боровое (Бурабай)', img: '/card1.png' },
              { title: 'Тур на Большое Алматинское озеро', img: '/card2.png' },
              { title: 'Путешествие в Боровое: Жумбактас и горные пейзажи', img: '/card3.png' },
              { title: 'Тур к озёрам Кольсай и Каинды', img: '/card5.png' },
            ].map((card, index) => (
                <div key={index} className="min-w-[240px] h-[235px] rounded-[30px]">
                  <div
                      className="relative w-full h-full bg-cover bg-center rounded-[30px]"
                      style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <div className="absolute text-[16px] lg:text-[20px] font-extrabold text-white w-[180px] bottom-[20px] left-[20px]">
                      {card.title}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Buy button */}
        <button className="bg-[#489FC4] text-white py-2 rounded-full w-[90%] sm:w-[75%] lg:w-[30%] mt-6">
          Купить
        </button>
      </div>
  );
}
