'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Avatar from '../../../public/avatar.png';
import CardTourImage from '../../../public/card-tour.png';

export default function PersonalCabinet() {
  const [activeButton, setActiveButton] = useState<'profile' | 'tours'>('profile');

  const userInfo = [
    { id: 1, label: 'Имя', value: 'Зикирова Мерей' },
    { id: 2, label: 'Ник-нейм', value: 'mermer' },
    { id: 3, label: 'Почта', value: 'mermer@gmail.com' },
    { id: 4, label: 'Телефон', value: '8 777 777 77 77' },
    { id: 5, label: 'Ваш пароль', value: '********' },
  ];

  return (
    <div className="flex flex-col gap-[20px] px-[30px] lg:px-[5%]">
      <div className="flex flex-col lg:flex-row gap-[7px]">
        <button
          className={`rounded-[50px] w-full lg:w-[200px] h-[40px] ${activeButton === 'profile' ? 'bg-[#489FC4] text-light' : 'bg-[#E8E8E8] text-[#747474]'}`}
          onClick={() => setActiveButton('profile')}>
          Личные данные
        </button>
        <button
          className={`rounded-[50px] w-full lg:w-[200px] h-[40px] ${activeButton === 'tours' ? 'bg-[#489FC4] text-light' : 'bg-[#E8E8E8] text-[#747474]'}`}
          onClick={() => setActiveButton('tours')}>
          Туры
        </button>
      </div>

      {activeButton == 'profile' && (
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:mt-[10px] lg:mb-[50px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="bg-black w-[260px] h-[260px] rounded-[30px]"></div>
            <form>
              <ul className="flex flex-col gap-[5px] items-start">
                {userInfo.map((elem) => (
                  <li key={elem.id} className="flex gap-[10px] font-medium">
                    {elem.label}:<span className="font-normal">{elem.value}</span>
                  </li>
                ))}
              </ul>

              {userInfo.map((elem) => (
                <div key={elem.id} className="hidden flex flex-col gap-[5px]">
                  <label className="">{elem.label}</label>
                  <input
                    type="text"
                    placeholder={elem.value}
                    className="border border-[#E7E7E7] rounded-[40px] h-[50px] pl-[20px]"
                  />
                </div>
              ))}

              <button className="mt-[20px] bg-[#489FC4] text-light rounded-[50px] w-full h-[40px]">
                Изменить
              </button>
              <button className="hidden mt-[20px] bg-[#489FC4] text-light rounded-[50px] w-full h-[40px]">
                Сохранить
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-[20px] mt-[70px] lg:mt-0 w-[30%]">
            <div className="bg-[#ccc]/50 w-full h-[280px] rounded-[10px]"></div>
            <div className="bg-[#ccc]/50 w-full h-[80px] rounded-[20px]"></div>
          </div>
        </div>
      )}

      {activeButton == 'tours' && (
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            <h2>Туры выбранные мной</h2>
            <div className="flex gap-[10px] flex-nowrap">
              <div className="bg-[#ccc]/50 w-[235px] h-[150px] rounded-[40px] flex-shrink-0"></div>
              <div className="bg-[#ccc]/50 w-[235px] h-[150px] rounded-[40px] flex-shrink-0"></div>
              <div className="bg-[#ccc]/50 w-[235px] h-[150px] rounded-[40px] flex-shrink-0"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2>Завершенные туры</h2>
            <div className="flex gap-[10px] flex-nowrap">
              <div className="bg-[#ccc]/50 w-[235px] h-[150px] rounded-[40px] flex-shrink-0"></div>
              <div className="bg-[#ccc]/50 w-[235px] h-[150px] rounded-[40px] flex-shrink-0"></div>
              <div className="bg-[#ccc]/50 w-[235px] h-[150px] rounded-[40px] flex-shrink-0"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
