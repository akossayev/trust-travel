import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const navLinks = [
    { id: 1, name: 'О нас', a: '/' },
    { id: 2, name: 'Фильтр', a: '/' },
    { id: 3, name: 'Геймификация', a: '/' },
    { id: 4, name: 'Туры', a: '/' },
    { id: 5, name: 'Для компании', a: '/' },
    { id: 6, name: 'FAQ', a: '/' },
  ];

  return (
    <footer className="bg-[#F5F5F5] p-10 w-full">
      <div className="flex items-start gap-[200px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={200}
          className="max-w-full sm:w-[200px]"
        />
        <nav>
          <ul className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-y-5 gap-x-[100px] mt-2">
            {navLinks.map((elem) => (
              <li key={elem.id}>
                <a href={elem.a}>{elem.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between mt-[70px]">
        <p className="flex flex-col">
          <span>+7 777 777 77 77</span>
          <span>trusttravel.contact@gmail.com</span>
        </p>
        <div className="flex gap-5">
          <Image src="/tgIcon.svg" alt="telegram-logo" width={30} height={100} />
          <Image src="/instIcon.svg" alt="instagram-logo" width={30} height={100} />
          <Image src="/tiktokIcon.svg" alt="tiktok-logo" width={30} height={100} />
        </div>
      </div>
    </footer>
  );
}
