'use client';
import { useState } from 'react';
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
  const [activeTypeOffice, setActiveTypeOffice] = useState<number | null>(null);

  return (
    <header className="w-full py-5 px-10 flex justify-between items-center lg:px-[60px] 2xl:px-[110px] my-[20px] relative">
      <Logo className="w-[50%] h-auto sm:w-[150px] lg:w-[200px]" />
      <ul className="hidden sm:flex sm:gap-4 lg:gap-10">
        <li className="text-sm cursor-pointer lg:text-lg">Главная</li>
        <li className="text-sm cursor-pointer lg:text-lg">Фильтр</li>
        <li
          className="relative flex items-center gap-1 center text-sm cursor-pointer lg:text-lg"
          onClick={() => setIsOpenTour(!isOpenTour)}>
          Туры {isOpenTour ? <ArrowUpDark /> : <ArrowDownDark />}
          {isOpenTour && (
            <ul className="text-xs lg:text-sm w-[140px] lg:w-[180px] py-2 px-2 absolute left-1/2 top-full transform -translate-x-1/2 mt-2 rounded-[30px] bg-white/50 backdrop-blur-[30px] shadow-sm border-[1px] border-[#CACACA] text-[#747474]">
              {toursList.map((elem, index) => (
                <li
                  key={index}
                  className={`py-2 rounded-[20px] text-center cursor-pointer mt-2 ${
                    activeTypeTour === index ? 'bg-[#FFFFFF]' : ''
                  }`}
                  onClick={() => setActiveTypeTour(index)}>
                  {elem}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="text-sm cursor-pointer lg:text-lg">Для компании</li>
        <li
          className="relative flex items-center gap-1 center text-sm cursor-pointer lg:text-lg"
          onClick={() => setIsOpenOffice(!isOpenOffice)}>
          Мой кабинет
          {isOpenOffice && (
            <ul className="text-xs lg:text-sm w-[140px] lg:w-[205px] py-2 px-2 absolute left-1/2 top-full transform -translate-x-1/2 mt-2 rounded-[15px] bg-white/50 backdrop-blur-[30px] shadow-sm border-[1px] border-[#CACACA] text-[#747474]">
              {officeList.map((elem, index) => (
                <li
                  key={index}
                  className={`py-2 rounded-[20px] text-center cursor-pointer mt-2 ${
                    activeTypeOffice === index ? 'bg-[#FFFFFF]' : ''
                  }`}
                  onClick={() => setActiveTypeOffice(index)}>
                  {elem}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      <BurgerMenuMobile className="w-[10%] h-auto sm:hidden" />
    </header>
  );
}
