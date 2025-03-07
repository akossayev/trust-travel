import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../packages/ui/components/ui/button';

export default function Partness() {
  return (
    <div className="flex flex-col items-center gap-20">
      <h2 className='text-4xl font-medium'>Партнеры</h2>
      <div className='flex gap-[130px]'>
        <div className="flex flex-col items-center gap-7">
          <Image src="/innovation.png" alt="innovation-logo" width={200} height={200} />
          <span>Innovation</span>
        </div>
        <div className="flex flex-col items-center gap-7">
          <Image src="/enactus.png" alt="enactus-logo" width={200} height={200} />
          <span>Enactus</span>
        </div>
      </div>
      <Button className="px-[70px] py-3 border rounded-full bg-[#489FC4] text-foreground text-lg">
        Подробнее о Партнерах
      </Button>
    </div>
  );
}
