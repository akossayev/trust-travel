import React from 'react';
import Image from 'next/image';
import Avatar from '../../../public/avatar.png';

export default function PersonalCabinet() {
  const userInfo = [
    { id: 1, label: 'Фио', value: 'Зикирова Мерей' },
    { id: 2, label: 'Ник-нейм', value: 'mermer' },
    { id: 3, label: 'Почта', value: 'mermer@gmail.com' },
    { id: 4, label: 'Телефон', value: '8 777 777 77 77' },
    { id: 5, label: 'Ваш пароль', value: '********' },
  ];

  return (
    <>
      <h1>hello </h1>
    </>
  );
}
