import React from 'react';

interface Props {
  className?: string;
}

export default function ArrowSliderLeftDark({ className }: Props) {
  return (
    <svg
      width="89"
      height="93"
      viewBox="0 0 89 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <rect x="-4" width="93" height="93" rx="46.5" fill="#E0E0E0" fillOpacity="0.5" />
      <path d="M49.375 60.25L35.625 46.5L49.375 32.75" stroke="#1E1E1E" strokeWidth="2" />
    </svg>
  );
}
