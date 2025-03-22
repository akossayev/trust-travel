import React from 'react';

interface Props {
  className?: string;
}

export default function ArrowUpDark({ className }: Props) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path d="M1 7L7 1L13 7" stroke="black" />
    </svg>
  );
}
