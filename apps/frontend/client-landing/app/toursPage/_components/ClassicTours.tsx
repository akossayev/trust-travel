import React from 'react';
import SoloAttraction from '@/app/attractionsPage/_components/ui/SoloAttraction';
// http://localhost:9000/bucketName/object_key

export default function ClassicTours() {
  return (
    <div className="mt-[0px]">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-lg lg:text-2xl lg:font-medium">Туры</h2>
        <div className="flex flex-col items-center ">
          <SoloAttraction />
          <SoloAttraction />
          <SoloAttraction />
        </div>
      </div>
    </div>
  );
}
