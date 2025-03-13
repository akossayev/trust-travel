import React from 'react';
import Image from 'next/image';

export default function Partness() {
  return (
    <div className="flex flex-col items-center">
      <h2>Партнеры</h2>
      <div>
        <Image
          src="/innovation.png"
          alt="innovation-logo"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
    </div>
  );
}
