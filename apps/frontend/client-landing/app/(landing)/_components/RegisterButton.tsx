import React from 'react';
import Image from 'next/image';
import ArrowButtonBlue from '../../../public/svg/ArrowButtonBlue';
import PlaneIcon from '../../../public/svg/PlaneIcon';

export default function RegisterButton() {
  return (
    <div className="flex flex-col items-center mt-[0px] relative">
      <p className="flex flex-col items-center mt-[80px] mb-[80px] text-lg xl:text-3xl z-10 font-medium lg:text-2xl">
        <span>Путешествуйте выгодно!</span>
        <span>Регистрируйтесь сейчас и получите</span>
        <span>кэшбэк на первый тур!🌍</span>
      </p>

      <button className="w-[250px] h-[50px] flex items-center bg-white gap-4 xl:gap-4 border border-[#D7D7D7] p-1 rounded-[30px] pr-7 text-[#489FC4] xl:pr-[50px] xl:text-xl z-10 lg:mt-[-50px] lg:h-[50px] xl:h-[60px] xl:w-[320px]">
        <ArrowButtonBlue className="w-[50px] h-[50px] lx:w-[50px] lx:h-[50px]" />
        Зарегистрироваться
      </button>

      <PlaneIcon className=" w-[100px] h-[60px] absolute top-[160px] right-[0px] z-10 sm2:right-[40px] lg:w-[100px] lg:top-[40] lg:left-[830] xl:w-[140px] xl:top-[0] xl:left-[84%]" />

      <Image
        src="/bg-plane-line.png"
        alt="line"
        width={1000}
        height={600}
        loading="lazy"
        className="hidden w-[85%] absolute left-0 top-[70px] lg:block"
      />

      <Image
        src="/bg-plane-line-mobile.png"
        alt="line"
        width={280}
        height={100}
        className="w-[300px] h-[130px] absolute left-0 top-[160px] right-[80px] sm1:w-[320px] sm2:w-[360px] sm2:h-[150px] sm2:top-[140px] sm2:right-[70px] sm3:w-[410px] sm:w-[580px] md:w-[700px] lg:hidden"
        loading="lazy"
      />
    </div>
  );
}
