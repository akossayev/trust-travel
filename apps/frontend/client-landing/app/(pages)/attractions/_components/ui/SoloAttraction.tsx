import React from 'react';
import Image from 'next/image';
import CardTour from '../../../../../public/card-tour.png';
import Heart from '@/public/svg/Heart';
import ArrowButtonBlue from '@/public/svg/ArrowButtonBlue';

export default function SoloAttraction() {
  return (
    <div className="flex flex-col items-center mt-[40px] border border-[#B4B4B4] mx-[20px] rounded-[40px] xs:rounded-[50px] py-[15px] lg:flex-row lg:justify-between xl:w-[80%] lx:w-[75%] lx2:w-[70%]">
      <div>
        <Image
          src={CardTour}
          alt="card-tour"
          width={250}
          height={160}
          className="w-[250px] h-[160px] xs:w-[300px] xs:h-[226px] lg:w-[326px] lg:h-[330px] lg:ml-[15px]"
        />
      </div>
      <div className="flex flex-col items-center lg:w-[70%]">
        <div className="flex flex-col items-center">
          <div className="my-[15px] flex items-center justify-between w-[90%]">
            <span className="text-sm leading-[20px] xs:text-base xs2:text-lg xs3:text-xl">
              Экспресс тур <br /> на Озера Кольсай и Каинды
            </span>
            <Heart className="xs2:w-[30px] xs2:h-[30px]" />
          </div>
          <p className="w-[90%] text-xs leading-[20px] xs:text-sm xs2:text-base xs3:text-lg">
            Экспресс-тур на озёра Кольсай и Каинды – это захватывающее путешествие к жемчужинам
            природы Казахстана. Всего за один день вы сможете насладиться видами живописных горных
            озёр, увидеть знаменитый «затопленный лес» озера Каинды и окунуться в атмосферу
            величественных Тянь-Шанских гор.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center mt-[10px] lg:flex-row lg:gap-[120px] lg:mt-[50px] xl:gap-[130px] lx:gap-[140px]">
          <button className="border border-[#3771C8] py-[15px] px-[73px] xs:px-[93px] xs2:px-[110px] xs3:px-[125px] lg:px-[50px] rounded-[40px] text-sm xs:text-base xs2:text-lg xs3:text-xl">
            Цена: 25 000 тг
          </button>
          <button className="flex items-center border border-[#489FC4] rounded-[60px] pl-[5px] py-[5px] xs2:py-[4px] pr-[112px] lg:gap-[25px] lg:pr-[70px] gap-[35px] xs:gap-[62px] xs:pr-[130px] text-[#489FC4] text-sm xs:text-base xs2:text-lg xs2:gap-[77px] xs3:gap-[95px] xs3:pr-[165px] xs2:pr-[146px] xs3:text-xl">
            <ArrowButtonBlue className="w-[40px] h-[40px] xs:w-[42px] xs:h-[42px] xs2:w-[50px] xs2:h-[50px] " />
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
}
