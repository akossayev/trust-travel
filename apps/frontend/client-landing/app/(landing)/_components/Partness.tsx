import React from 'react';
import Image from 'next/image';

export default function Partness() {
  return (
    <div className="flex flex-col items-center gap-10 xl:gap-[50px] mt-[100px] mb-[50px]">
      <h2 className="xl:text-3xl">Партнеры</h2>
      <div className="flex gap-[120px]">
        <div className="flex flex-col items-center gap-[50px]">
          <Image
            src="/innovation.png"
            alt="innovation-logo"
            width={200}
            height={200}
            loading="lazy"
          />
          <span>Innovation</span>
        </div>
        <div className="hidden xl:flex xl:items-center xl:flex-col xl:gap-[50px]">
          <Image src="/enactus.png" alt="enactus-logo" width={200} height={200} loading="lazy" />
          <span>Innovation</span>
        </div>
      </div>
      <button className="bg-[#489FC4] text-white w-[300px] h-[50px] rounded-[30px] mt-[50px]">
        Подробнее о Партнерах
      </button>
    </div>
  );
}
