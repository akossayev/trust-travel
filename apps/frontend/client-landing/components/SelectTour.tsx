import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import Image from 'next/image';
import SelectTourCard from './SelectTourCard';

export default function SelectTour() {
  return (
    <div className="h-[630px] w-[97%] min-h-[630px]">
      <div
        className="h-full w-full bg-no-repeat bg-cover p-10 static"
        style={{ backgroundImage: "url('/bgMountain.png')" }}>
        <div className="flex flex-col justify-between h-full">
          <h1 className="text-5xl text-foreground hidden">
            Путешествуйте <br /> с удовольствием, выбирайте <br /> TrusTTravel!
          </h1>
          <p className="text-5xl text-foreground flex flex-col font-[600] gap-4">
            <span>Путешествуйте</span>
            <span>с удовольствием, выбирайте</span>
            <span>TrusTTravel!</span>
          </p>
          <Button className="flex items-center bg-foreground text-[#489FC4] text-lg rounded-[30px] gap-3 py-1 pl-1 w-[14%] ">
            <Image src="/arrowButton.svg" alt="arrow-button" width={40} height={40} />
            Выбрать тур
          </Button>
        </div>
        <SelectTourCard />
      </div>
    </div>
  );
}
