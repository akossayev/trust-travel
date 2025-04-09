'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Avatar from '../../../public/avatar.png';
import CardTourImage from '../../../public/card-tour.png';

export default function PersonalCabinet() {
  const [activeTab, setActiveTab] = useState<'profile' | 'tours'>('profile');

  const userInfo = [
    { id: 1, label: 'Имя', value: 'Зикирова Мерей' },
    { id: 2, label: 'Ник-нейм', value: 'mermer' },
    { id: 3, label: 'Почта', value: 'mermer@gmail.com' },
    { id: 4, label: 'Телефон', value: '8 777 777 77 77' },
    { id: 5, label: 'Ваш пароль', value: '********' },
  ];

  const tours = [
    { id: 1, title: 'Экспресс тур на Озера Кольсай и Каинды' },
    { id: 2, title: 'Экспресс тур на Озера Кольсай и Каинды' },
    { id: 3, title: 'Экспресс тур на Озера Кольсай и Каинды' },
    { id: 4, title: 'Экспресс тур на Озера Кольсай и Каинды' },
    { id: 5, title: 'Экспресс тур на Озера Кольсай и Каинды' },
    { id: 6, title: 'Экспресс тур на Озера Кольсай и Каинды' },
  ];

  return (
    <div>
      <h1>hello is personal cabinet</h1>
    </div>
  );
}
