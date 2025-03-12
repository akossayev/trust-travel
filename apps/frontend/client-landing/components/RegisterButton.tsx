import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../packages/ui/components/ui/button';

export default function RegisterButton() {
  return (
    <div className="flex flex-col items-center mt-[50px]">
      <div className="hidden">
        <Image
          src="/planeLine.svg"
          alt="line"
          width={100}
          height={100}
          className="hidden"
          loading="lazy"
        />
        <Image
          src="/planeLineAdaptive.png"
          alt="line"
          width={300}
          height={100}
          className=""
          loading="lazy"
        />
      </div>

      <p className="flex flex-col items-center mt-[80px] mb-[80px] text-lg xl:text-3xl">
        <span>Путешествуйте выгодно!</span>
        <span>Регистрируйтесь сейчас и получите</span>
        <span>кэшбэк на первый тур!🌍</span>
      </p>

      <button className="flex items-center gap-4 xl:gap-7 border border-[#D7D7D7] p-1 rounded-[30px] pr-7 text-[#489FC4] xl:pr-[50px] xl:text-xl">
        <Image
          src="/arrowButton.svg"
          alt="line"
          width={50}
          height={0}
          className=""
          loading="lazy"
        />
        Зарегистрироваться
      </button>
    </div>
  );
}
