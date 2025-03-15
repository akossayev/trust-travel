'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../svg-icons/Logo';
import ArrowUpDark from '../svg-icons/ArrowUpDark';
import ArrowDownDark from '../svg-icons/ArrowDownDark';
import BurgerMenuMobile from '../svg-icons/BurgerMenuMobile';

const toursList = ['Классические туры', 'Тур-программа', 'Кастомные туры'];
const officeList = ['Войти', 'Зарегистрироваться', 'Бизнес-аккаунт'];

export default function Header() {
  const [isOpenTour, setIsOpenTour] = useState(false);
  const [isOpenOffice, setIsOpenOffice] = useState(false);
  const [activeTypeTour, setActiveTypeTour] = useState<number | null>(0);

  return (
    <header className="flex justify-between items-center py-5 px-8 w-full lg:px-[60px] 2xl:px-[110px] my-[20px]">
      <Logo />
      <ul className="hidden sm:flex sm:gap-4 lg:gap-10">
        <li className="text-sm lg:text-xl 2xl:text-2xl cursor-pointer">Главная</li>
        <li className="text-sm lg:text-xl 2xl:text-2xl cursor-pointer">Фильтр</li>
        <li
          className="flex items-center gap-1 text-sm lg:text-xl 2xl:text-2xl cursor-pointer"
          onClick={() => setIsOpenTour(!isOpenTour)}>
          Туры
          {isOpenTour ? <ArrowUpDark /> : <ArrowDownDark />}
        </li>
        <li className="text-sm lg:text-xl 2xl:text-2xl cursor-pointer">Для компании</li>
        <li className="text-sm lg:text-xl 2xl:text-2xl cursor-pointer">Мой кабинет</li>
      </ul>
      {isOpenTour && (
        <ul className="flex flex-col items-center gap-1 absolute left-[900px] top-[100px] w-[220px] h-[160px] p-2 rounded-[30px] bg-white/50 backdrop-blur-[30px] shadow-sm border-[1px] border-[#CACACA] text-[#747474]">
          {toursList.map((elem, index) => (
            <li
              key={index}
              className={`py-1 px-5 rounded-[30px] w-full h-[50px] text-center pt-[10px] cursor-pointer ${activeTypeTour === index ? 'bg-foreground' : ''}`}
              onClick={() => setActiveTypeTour(index)}>
              {elem}
            </li>
          ))}
        </ul>
      )}
      {isOpenOffice && (
        <ul className="flex flex-col">
          <li>Войти</li>
          <li>Зарегистрироваться</li>
          <li>Бизнес-аккаунт</li>
        </ul>
      )}
      <BurgerMenuMobile className="lg:hidden" />
    </header>
  );
}
