import React from 'react';

interface Props {
  className?: string;
}

export default function ArrowDownDark({ className }: Props) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path d="M13 1L7 7L1 1" stroke="black" />
    </svg>
  );
}
