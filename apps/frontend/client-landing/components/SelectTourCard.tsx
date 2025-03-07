import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../packages/ui/components/ui/button';

export default function SelectTourCard() {
  return (
    <div className="flex gap-4 absolute top-[70%] left-[80%]">
      <div className="w-[208px] h-[223px] bg-white/45 rounded-[30px] p-4 flex flex-col gap-3">
        <Button className="flex text-foreground text-lg ">
          Активный отдых
          <Image src="/arrowButtonCard.svg" alt="arrow-button" width={40} height={40} />
        </Button>
        <Image src="/cardTour.png" alt="arrow-button" width={150} height={50} />
      </div>
    </div>
  );
}
