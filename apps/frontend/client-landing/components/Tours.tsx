import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import ToursCard from './ToursCard';

export default function Tours() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="text-2xl font-medium">Туры</h2>
      <div className="flex gap-2 border py-1 px-2 rounded-[30px]">
        <Button className="text-foreground py-3 px-4 bg-[#489FC4] rounded-full w-[200px]">
          Классические туры
        </Button>
        <Button className="text-background py-3 px-4 bg-[radial-gradient(circle,#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[200px]">
          Кастомные туры
        </Button>
        <Button className="text-background py-3 px-4 bg-[radial-gradient(circle,#FFFFFF,#E8E8E8)] backdrop-blur-[50px] rounded-full w-[200px]">
          Тур-программа
        </Button>
      </div>
      <div className="flex items-center gap-10">
        <ToursCard />
        <ToursCard />
        <ToursCard />
      </div>
      <Button className="px-[70px] py-3 border rounded-full bg-[#489FC4] text-foreground text-lg">
        Подробнее о всех турах
      </Button>
    </div>
  );
}
