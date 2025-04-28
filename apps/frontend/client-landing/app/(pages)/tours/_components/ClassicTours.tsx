import React from 'react';
import SoloAttraction from '@/app/(pages)/attractions/_components/ui/SoloAttraction';
// http://localhost:9000/bucketName/object_key
import Card1 from '../../../../public/card1.png';
import Card2 from '../../../../public/card2.png';
import Card3 from '../../../../public/card3.png';

export default function ClassicTours() {
  return (
    <div className="mt-[0px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center ">
          <SoloAttraction />
          <SoloAttraction />
          <SoloAttraction />
        </div>
      </div>
    </div>
  );
}
