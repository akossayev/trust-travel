import React from "react";
import Image from "next/image";
import CulturePage from "../../../../public/custom-tour-culture-card.png";
import ShoppingPage from "../../../../public/shopping.png";
import NaturePage from "../../../../public/nature.png";
import FoodPage from "../../../../public/food.png";

import Card1 from "../../../../public/card1.png";
import Card2 from "../../../../public/card2.png";
import Card3 from "../../../../public/card3.png";
import Card4 from "../../../../public/card5.png";

export default function CustomTour() {
  const arrayButtons = [
    { id: 1, title: "Природные достопримечательсности", count: 0 },
    { id: 2, title: "Культурные достопримечательсности", count: 0 },
    { id: 3, title: "Шоп-тур", count: 0 },
    { id: 4, title: "Поесть", count: 0 },
  ];

  return (
    <div className="flex flex-col items-center gap-[20px] w-full max-w-[1300px] lg:px-[50px] lg:mt-[50px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-[60px] w-full">
        <div className="flex lg:flex-col items-center gap-[20px]">
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] border-[3px] border-[#489FC4] ">
            Природные достопримечательности
            <Image
              src={NaturePage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] ">
            Культурные достопримечательности
            <Image
              src={CulturePage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] ">
            Шоп-тур
            <Image
              src={ShoppingPage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
          <div className="bg-[#F6F6F6] flex flex-col justify-between p-[20px] text-sm lg:text-base relative w-[235px] h-[145px] lg:w-[270px] rounded-[20px] ">
            Поесть
            <Image
              src={FoodPage}
              alt=""
              width={100}
              height={50}
              className="absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[20px] lg:mt-0 gap-[15px] lg:gap-[20px] lg:grid-cols-3">
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            {/*<Image src={Card1} alt="" width={240} height={235} className="rounded-[30px] h-full" />*/}
            <div
              className={
                "relative bg-[url('/card6.png')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
              }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Экспресс тур на зимние озера Кольсай и Каинды
              </div>
            </div>
          </div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            <div
                className={
                  "relative bg-[url('/card7.jpg')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
                }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Весенний тур на озера Кольсай и Каинды
              </div>
            </div>
          </div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            <div
                className={
                  "relative bg-[url('/card8.jpg')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
                }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Тур в Чарынский каньон — Гранд-Каньон Казахстана
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:w-full gap-[20px] px-[20px] lg:px-0 mt-[10px] lg:mt-[20px]">
        <h2 className="mr-[200px] lg:text-xl">Корзина</h2>

        <ul className="flex flex-col lg:flex-row justify-center gap-[10px]">
          {arrayButtons.map((elem) => (
            <li
              key={elem.id}
              className="border border-[to-bottom,#CACACA,#D7D7D7)] text-xs lg:text-sm py-[10px] px-[15px] rounded-[40px]"
            >
              {elem.title} <span>({elem.count})</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center w-full gap-[10px] mt-[20px] lg:mt-0">
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            <div
                className={
                  "relative bg-[url('/card1.png')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
                }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Экспресс тур в Боровое (Бурабай)
              </div>
            </div>
          </div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            <div
                className={
                  "relative bg-[url('/card2.png')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
                }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Тур на Большое Алматинское озеро
              </div>
            </div>
          </div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            <div
                className={
                  "relative bg-[url('/card3.png')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
                }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Путешествие в Боровое: Жумбактас и горные пейзажи
              </div>
            </div>
          </div>
          <div className="bg-[#ccc]/50 w-[130px] h-[130px] lg:w-[240px] lg:h-[235px] rounded-[30px]">
            <div
                className={
                  "relative bg-[url('/card5.png')] w-[240px] h-[235px] bg-cover bg-center rounded-[30px]"
                }
            >
              <div className={"absolute text-[20px] leading-[100%] font-extrabold text-white w-[180px] bottom-[29px] left-[23px]"}>
                Тур к озёрам Кольсай и Каинды
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-[#489FC4] text-light py-[10px] rounded-[40px] w-[75%] lg:w-[30%] mt-[30px]">
        Купить
      </button>
    </div>
  );
}
