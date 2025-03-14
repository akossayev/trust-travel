'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import arrowUpDark from '../../../public/arrow-up-dark.svg';
import arrowDownDark from '../../../public/arrow-down-dark.svg';
import burgerMenuMobile from '../../../public/burger-menu-mobile.svg';

const toursList = ['Классические туры', 'Тур-программа', 'Кастомные туры'];
const officeList = ['Войти', 'Зарегистрироваться', 'Бизнес-аккаунт'];

export default function Header() {
  const [isOpenTour, setIsOpenTour] = useState(false);
  const [isOpenOffice, setIsOpenOffice] = useState(false);
  const [activeTypeTour, setActiveTypeTour] = useState<number | null>(0);

  return (
    <header className="flex justify-between items-center py-5 px-8 w-full lg:px-[60px] 2xl:px-[110px] my-[20px]">
      <Image
        src={logo}
        alt="logo-icon"
        width={160}
        height={160}
        className="max-w-[60%] lg:w-[200px] 2xl:w-[250px] h-auto w-auto"
        loading="lazy"
      />
      <ul className="hidden sm:flex sm:gap-4 lg:gap-10">
        <li className="text-sm lg:text-xl 2xl:text-2xl cursor-pointer">Главная</li>
        <li className="text-sm lg:text-xl 2xl:text-2xl cursor-pointer">Фильтр</li>
        <li
          className="flex items-center gap-1 text-sm lg:text-xl 2xl:text-2xl cursor-pointer"
          onClick={() => setIsOpenTour(!isOpenTour)}>
          Туры
          <Image
            src={isOpenTour ? arrowUpDark : arrowDownDark}
            alt="dropdown-icon"
            width={15}
            height={15}
            loading="lazy"
          />
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
      <Image
        src={burgerMenuMobile}
        alt="burger-menu"
        width={30}
        height={30}
        className="block max-w-[15%] sm:hidden"
        loading="lazy"
      />
    </header>
  );
}
