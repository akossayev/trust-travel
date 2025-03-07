import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import Image from 'next/image';

function ToursCard() {
  return (
    <div
      className="w-[250px] h-[250px] bg-no-repeat bg-cover rounded-[10%] flex flex-col items-center justify-center gap-5"
      style={{ backgroundImage: 'url(/bgTourCard.png)' }}>
      <p className="text-foreground flex flex-col items-start mt-[60px] text-lg font-semibold">
        <span>Экспресс тур</span>
        <span>на Озера Кольсай</span>
        <span>и Каинды</span>
      </p>
      <Button className="flex items-center bg-white/90 rounded-full text-[#489FC4] p-1 pr-7 ">
        <Image src="/arrowButton.svg" alt="arrow-button" width={40} height={40} />
        Выбрать тур
      </Button>
    </div>
  );
}

export default ToursCard;
