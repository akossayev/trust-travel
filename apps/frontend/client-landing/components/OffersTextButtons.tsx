import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import Image from 'next/image';

export default function OffersTextButtons() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <Button className="flex items-center justify-start bg-white rounded-full text-[#489FC4] pl-[3px] border border-[#489FC4] w-[160px] text-lg font-light gap-5">
            <Image src="/arrowButtonBlue.svg" alt="arrow-button" width={50} height={40} />
            Текст
          </Button>
          <Button className="flex items-center justify-start bg-white rounded-full text-[#489FC4] py-1 pl-[3px] border border-[#489FC4] w-[180px] text-lg font-light gap-5">
            <Image src="/arrowButtonBlue.svg" alt="arrow-button" width={50} height={40} />
            Текст
          </Button>
        </div>
        <div className="flex gap-2">
          <Button className="flex items-center justify-start bg-white rounded-full text-[#489FC4] py-1 pl-[3px] border border-[#489FC4] w-[160px] text-lg font-light gap-5">
            <Image src="/arrowButtonBlue.svg" alt="arrow-button" width={50} height={40} />
            Текст
          </Button>
          <Button className="flex items-center justify-start bg-white rounded-full text-[#489FC4] py-1 pl-[3px] border border-[#489FC4] w-[300px] text-lg font-light gap-5">
            <Image src="/arrowButtonBlue.svg" alt="arrow-button" width={50} height={40} />
            Текст
          </Button>
        </div>
        <Button className="flex items-center justify-start bg-white rounded-full text-[#489FC4] py-1 pl-[3px] border border-[#489FC4] w-[300px] text-lg font-light gap-5">
          <Image src="/arrowButtonBlue.svg" alt="arrow-button" width={50} height={40} />
          Текст
        </Button>
      </div>
    </div>
  );
}
