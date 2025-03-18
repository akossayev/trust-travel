import React from 'react';
import Image from 'next/image';
import Logo from '../svg-icons/Logo';
import TelegramIcon from '../svg-icons/TelegramIcon';
import InstIcon from '../svg-icons/InstIcon';
import TiktokIcon from '../svg-icons/TiktokIcon';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] p-10 w-full flex flex-col mt-[50px]">
      <div className="flex flex-col gap-7 items-start lg:flex-row lg:gap-[180px]">
        <Logo className="w-[80%] h-auto xs:w-[220px] sm3:w-[280px]" />
        <p className="flex flex-col gap-5 xl:text-lg lg:mt-[20px]">
          <span className="text-base xs:text-xl sm3:text-2xl lg:text-xl">О нас</span>
          <span className="text-base xs:text-xl sm3:text-2xl lg:text-xl">Фильтр</span>
          <span className="text-base xs:text-xl sm3:text-2xl lg:text-xl">Геймификация</span>
        </p>
        <p className="flex flex-col gap-5 mt-[30px] xl:text-lg lg:mt-[20px]">
          <span className="text-base xs:text-xl sm3:text-2xl lg:text-xl">Туры</span>
          <span className="text-base xs:text-xl sm3:text-2xl lg:text-xl">Для компании</span>
          <span className="text-base xs:text-xl sm3:text-2xl lg:text-xl">FAQ</span>
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-[50px] lg:flex-row lg:justify-between lg:mt-[100px]">
        <p className="flex flex-col xl:text-lg">
          <span className="text-xs xs:text-xl sm3:text-2xl lg:text-xl">+7 777 777 77 77</span>
          <span className="text-xs xs:text-xl sm3:text-2xl lg:text-xl">
            trusttravel.contact@gmail.com
          </span>
        </p>
        <div className="flex justify-between px-5 sm3:px-7 lg:gap-[20px]">
          <TelegramIcon className="w-[20%] h-auto xs:w-[60px] sm3:w-[70px] lg:w-[50px]" />
          <InstIcon className="w-[20%] h-auto xs:w-[60px] sm3:w-[70px] lg:w-[50px]" />
          <TiktokIcon className="w-[20%] h-auto xs:w-[60px] sm3:w-[70px] lg:w-[50px]" />
        </div>
      </div>
    </footer>
  );
}
