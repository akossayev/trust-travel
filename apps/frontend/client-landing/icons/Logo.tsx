import React from 'react';
import Image from 'next/image';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Logo({ className, ...props }: Props) {
  return <Image src="/logo.svg" alt="logo" width={150} height={46} className={className} />;
}
