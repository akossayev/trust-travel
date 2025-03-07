import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../packages/ui/components/ui/button';

export default function RegisterButton() {
  return (
    <div className="hidden">
      <div className="relative w-full">
        <Image
          src="/plane.svg"
          alt=""
          width={100}
          height={100}
          className="absolute left-[1150px] top-12"
        />
        <Image
          src="/planeLine.svg"
          alt=""
          width={500}
          height={100}
          className="w-full h-[280px] absolute right-40 top-20"
        />
        <div className="flex flex-col items-center gap-8 absolute left-[530px] top-[130px]">
          <p className="flex flex-col items-center text-2xl">
            <span>Путешествуйте выгодно!</span>
            <span>Регистрируйтесь сейчас и получите</span>
            <span>кэшбэк на первый тур! 🌍</span>
          </p>
          <Button className="flex bg-[#fff] text-[#489FC4] text-base rounded-full border pl-1 pr-5 py-1 gap-3">
            <Image src="/arrowButton.svg" alt="arrow-button" width={40} height={40} />
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  );
}
