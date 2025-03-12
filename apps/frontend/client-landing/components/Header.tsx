'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import arrowUpDark from '@/public/arrow-up-dark.svg';
import arrowDownDark from '@/public/arrow-down-dark.svg';
import burgerMenuMobile from '@/public/burger-menu-mobile.svg';

const navList = [
  { id: 1, name: 'Главная' },
  { id: 2, name: 'Фильтр' },
  { id: 3, name: 'Туры', hasDropdown: true },
  { id: 4, name: 'Для компании' },
  { id: 5, name: 'Мой кабинет' },
];

const toursList = [
  { id: 1, name: 'Классические туры' },
  { id: 2, name: 'Тур-программа' },
  { id: 3, name: 'Кастомные туры' },
];

const officeList = [
  { id: 1, name: 'Войти' },
  { id: 1, name: 'Зарегистрироваться' },
  { id: 1, name: 'Бизнес-аккаунт' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-5 px-8 w-full lg:px-[60px] 2xl:px-[110px] my-[20px]">
      <Image
        src={logo}
        alt="logo"
        width={160}
        height={0}
        className="max-w-[60%] lg:w-[200px] 2xl:w-[250px]"
      />
      <ul className="hidden sm:flex sm:gap-4 lg:gap-10">
        {navList.map((elem) => (
          <li
            key={elem.id}
            className="flex items-center gap-1 text-sm lg:text-xl 2xl:text-2xl cursor-pointer"
            onClick={() => elem.hasDropdown && setIsOpen(!isOpen)}>
            {elem.name}
            {elem.hasDropdown && (
              <Image
                src={isOpen ? arrowUpDark : arrowDownDark}
                alt="dropdown"
                width={15}
                height={15}
                loading="lazy"
              />
            )}
          </li>
        ))}
      </ul>
      <Image
        src={burgerMenuMobile}
        alt="logo"
        width={30}
        height={0}
        className="block max-w-[15%] sm:hidden"
        loading="lazy"
      />
    </header>
  );
}
