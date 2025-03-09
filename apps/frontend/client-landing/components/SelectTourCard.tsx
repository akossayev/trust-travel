import React from 'react';
import Image from 'next/image';
import { Button } from '../../../../packages/ui/components/ui/button';

interface SelectTourCardProps {
  imageUrl?: string;
  title1?: string;
  title2?: string;
}

export default function SelectTourCard({ imageUrl, title1, title2 }: SelectTourCardProps) {
  return (
    <div className="flex flex-col gap-2 lg:gap-5 bg-white/50 rounded-[20px] 2xl:rounded-[30px] p-3 w-[130px] h-[140px] sm3:w-[150px] sm3:h-[160px] lg:w-[180px] lg:h-[200px] xl:w-[190px] xl:h-[210px] 2xl:w-[210px] 2xl:h-[220px]">
      <div className="flex justify-between gap-2">
        <p className="flex flex-col items-start text-foreground lg:text-xl xl:text-2xl">
          {title1 && title2 && (
            <>
              <span>{title1}</span>
              <span>{title2}</span>
            </>
          )}
        </p>
        <Image
          src="/arrowButtonCard.svg"
          alt="mountain"
          width={30}
          height={20}
          className="lg:w-[45px] xl:w-[50px]"
        />
      </div>
      {imageUrl && (
        <Image src={imageUrl} alt="mountain" width={150} height={20} className="lg:w-[200px]" />
      )}
    </div>
  );
}
