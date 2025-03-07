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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-8 px-12 w-full ">
      <Image
        src="/logo.svg"
        alt="logo"
        width={150}
        height={200}
        className="max-w-full sm:w-[200px]"
      />
      <ul className="hidden sm:flex gap-6 ">
        {navList.map((elem) => (
          <li
            key={elem.id}
            className="flex items-center cursor-pointer text-sm md:text-base"
            onClick={() => elem.hasDropdown && setIsOpen(!isOpen)}>
            {elem.name}
            {elem.hasDropdown && (
              <Image
                src={isOpen ? 'dropUpBlack.svg' : 'dropDownBlack.svg'}
                alt="dropdown"
                width={15}
                height={15}
                className="ml-1"
              />
            )}
          </li>
        ))}
      </ul>
      <Image
        src="/burgerMenu.svg"
        alt="logo"
        width={50}
        height={50}
        className="block sm:hidden cursor-pointer"
      />
    </header>
  );
}
