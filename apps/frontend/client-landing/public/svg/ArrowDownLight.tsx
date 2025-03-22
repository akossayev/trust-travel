import React from 'react';

interface Props {
  className?: string;
}

export default function ArrowDownLight({ className }: Props) {
  return (
    <svg
      width="18"
      height="11"
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path d="M17 1.5L9 9.5L0.999999 1.5" stroke="white" strokeWidth="2" />
    </svg>
  );
}
