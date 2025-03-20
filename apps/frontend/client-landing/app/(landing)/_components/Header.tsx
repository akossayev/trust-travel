'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '../svg-icons/Logo';
import BurgerMenuMobile from '../svg-icons/BurgerMenuMobile';
import ArrowUpDark from '../svg-icons/ArrowUpDark';
import ArrowDownDark from '../svg-icons/ArrowDownDark';

export default function Header() {
  const [isOpenTours, setIsOpenTours] = useState(false);
  const [isOpenOffice, setIsOpenOffice] = useState(false);

  return (
    <header className="py-5 px-[5%] flex items-center justify-between">
      <Link href="/">
        <Logo className="w-[150px] h-[45px] lg:w-[212px] lg:h-[65px]" />
      </Link>
      <BurgerMenuMobile className="w-[24px] h-[24px] block lg:hidden" />
      <ul className="hidden lg:flex items-center gap-8 leading-[100%] text-darklight text-lg">
        <li className="cursor-pointer">Главная</li>
        <li className="cursor-pointer">Фильтр</li>
        <li
          className="flex items-center gap-1 cursor-pointer relative"
          onClick={() => setIsOpenTours(!isOpenTours)}>
          Туры
          {isOpenTours ? (
            <ArrowUpDark className="w-[12px] h-[12px]" />
          ) : (
            <ArrowDownDark className="w-[12px] h-[12px]" />
          )}
          {isOpenTours && (
            <ul className="text-xs lg:text-sm w-[140px] lg:w-[180px] py-2 px-2 absolute left-1/2 top-full transform -translate-x-1/2 mt-2 rounded-[30px] bg-white/50 backdrop-blur-[30px] shadow-sm border-[1px] border-[#CACACA] text-[#747474]">
              <li className="py-2 rounded-[20px] text-center cursor-pointer mt-2 bg-[#FFFFFF]">
                Классические туры
              </li>
              <li className="py-2 rounded-[20px] text-center cursor-pointer mt-2 bg-[#FFFFFF]">
                Тур-программа
              </li>
              <li className="py-2 rounded-[20px] text-center cursor-pointer mt-2 bg-[#FFFFFF]">
                Кастомные туры
              </li>
            </ul>
          )}
        </li>
        <li className="cursor-pointer">Для компании</li>
        <li className="cursor-pointer relative" onClick={() => setIsOpenOffice(!isOpenOffice)}>
          Мой кабинет
          {isOpenOffice && (
            <ul className="text-xs lg:text-sm w-[140px] lg:w-[205px] py-2 px-2 absolute left-1/2 top-full transform -translate-x-1/2 mt-2 rounded-[15px] bg-white/50 backdrop-blur-[30px] shadow-sm border-[1px] border-[#CACACA] text-[#747474]">
              <li className="py-2 rounded-[20px] text-center cursor-pointer mt-2 bg-[#FFFFFF]">
                Войти
              </li>
              <li className="py-2 rounded-[20px] text-center cursor-pointer mt-2 bg-[#FFFFFF]">
                Зарегистрироваться
              </li>
              <li className="py-2 rounded-[20px] text-center cursor-pointer mt-2 bg-[#FFFFFF]">
                Бизнес-аккаунт
              </li>
            </ul>
          )}
        </li>
      </ul>
    </header>
  );
}
