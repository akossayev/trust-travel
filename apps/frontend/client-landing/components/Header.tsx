'use client';
import { useState } from 'react';
import Image from 'next/image';

const navList = [
  { id: 1, name: 'Главная' },
  { id: 2, name: 'Фильтр' },
  { id: 3, name: 'Туры', hasDropdown: true },
  { id: 4, name: 'Для компании' },
  { id: 5, name: 'Мой кабинет' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="flex justify-between items-center py-5 px-8 w-full lg:px-[60px] 2xl:px-[110px]">
      <Image
        src="/logo.svg"
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
                src={isOpen ? 'dropUpBlack.svg' : 'dropDownBlack.svg'}
                alt="dropdown"
                width={15}
                height={15}
              />
            )}
          </li>
        ))}
      </ul>
      <Image
        src="/burgerMenu.svg"
        alt="logo"
        width={30}
        height={0}
        className="block max-w-[15%] sm:hidden"
      />
    </header>
  );
}
