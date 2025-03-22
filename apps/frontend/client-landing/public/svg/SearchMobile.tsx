import React from 'react';

interface Props {
  className?: string;
}

export default function SearchMobile({ className }: Props) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="11" cy="11.5" r="7" stroke="white" strokeWidth="2" />
      <path d="M20 20.5L17 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
