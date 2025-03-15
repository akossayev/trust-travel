import React from 'react';

interface Props {
  className?: string;
}

export default function SearchIcon({ className }: Props) {
  return (
    <svg
      width="93"
      height="93"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <rect width="93" height="93" rx="46.5" fill="white" fillOpacity="0.5" />
      <circle cx="45.0834" cy="45.0827" r="9.91667" stroke="white" strokeWidth="2" />
      <path
        d="M57.8333 57.834L53.5833 53.584"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
