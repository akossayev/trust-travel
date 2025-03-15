import React from 'react';
import Image from 'next/image';
import Logo from '../svg-icons/Logo';
import TelegramIcon from '../svg-icons/TelegramIcon';
import InstIcon from '../svg-icons/InstIcon';
import TiktokIcon from '../svg-icons/TiktokIcon';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] p-10 w-full flex flex-col mt-[50px]">
      <div className="flex flex-col gap-7 items-start xl:flex-row xl:gap-[150px]">
        <Logo />
        <p className="flex flex-col gap-5 xl:text-lg">
          <span>О нас</span>
          <span>Фильтр</span>
          <span>Геймификация</span>
        </p>
        <p className="flex flex-col gap-5 mt-[30px] xl:mt-0 xl:text-lg">
          <span>Туры</span>
          <span>Для компании</span>
          <span>FAQ</span>
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-[50px] xl:flex-row xl:justify-between">
        <p className="flex flex-col xl:text-lg">
          <span>+7 777 777 77 77</span>
          <span>trusttravel.contact@gmail.com</span>
        </p>
        <div className="flex gap-[60px] px-3">
          <TelegramIcon />
          <InstIcon />
          <TiktokIcon />
        </div>
      </div>
    </footer>
  );
}
