import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../packages/ui/components/ui/button';

export default function ActualToursSlider() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="m-10 text-2xl relative">Актуальные туры</h2>
      <div className="flex justify-between items-center w-full gap-10">
        <Image
          src="/slide1.png"
          alt="slide1"
          width={200}
          height={0}
          className="w-[270px] h-[350px] xl:w-[400px] 2xl:w-[600px]]"
        />
        <Image
          src="/slide2.png"
          alt="slide2"
          width={200}
          height={0}
          className="w-[400px] h-[500px]"
        />
        <Image
          src="/slide3.png"
          alt="slide3"
          width={200}
          height={0}
          className="w-[270px] h-[400px]"
        />
        <Image
          src="/slide4.png"
          alt="slide4"
          width={200}
          height={0}
          className="w-[400px] h-[500px]"
        />
        <div className="flex justify-between items-center absolute w-[93%] left-11">
          <Image src="/arrowLeft.png" alt="" width={80} height={50} className="cursor-pointer" />
          <Image src="/arrowRight.png" alt="" width={80} height={50} className="cursor-pointer" />
        </div>
      </div>
      <Button className="px-[70px] py-3 border rounded-full bg-[#489FC4] text-foreground text-lg my-10">
        Подробнее о всех турах
      </Button>
    </div>
  );
}

