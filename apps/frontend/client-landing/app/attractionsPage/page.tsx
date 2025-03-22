import React from 'react';
import SoloAttraction from './_components/ui/SoloAttraction';

export default function page() {
  return (
    <div className="mt-[60px]">
      <div className="flex flex-col items-center">
        <h2 className="text-center lg:text-2xl lg:font-medium">Достопримечательности</h2>
        <div className="flex flex-col items-center ">
          <SoloAttraction />
          <SoloAttraction />
          <SoloAttraction />
        </div>
      </div>
    </div>
  );
}
