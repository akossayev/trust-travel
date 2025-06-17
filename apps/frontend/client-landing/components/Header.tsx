'use client';
import React from 'react';
import Logo from '@/icons/Logo';
import Menu from '@/icons/mobile/Menu';
import ArrowDown from '@/icons/ArrowDown';
import ArrowUp from '@/icons/ArrowUp';
import { useState } from 'react';

export default function Header() {
  const [openTours, setOpenTours] = useState<boolean>(false);
  return (
    <header className="px-3 py-5 flex items-center justify-between">
      <Logo />
      <ul className="hidden sm:flex sm:items-center sm:gap-4">
        <li>Главная</li>
        <li>Фильтр</li>
        <li
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setOpenTours(!openTours)}>
          Туры {openTours ? <ArrowUp /> : <ArrowDown />}
        </li>
        <li>Для компании</li>
        <li>Для компании</li>
      </ul>
      <Menu className="sm:hidden" />
    </header>
  );
}
