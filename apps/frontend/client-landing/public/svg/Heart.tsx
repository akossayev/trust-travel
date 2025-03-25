import React from 'react';

interface Props {
  className?: string;
}

export default function Heart({ className }: Props) {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M3.69254 12.2261L11.8154 19.8567C12.1398 20.1614 12.3021 20.3138 12.5001 20.3138C12.6981 20.3138 12.8603 20.1614 13.1848 19.8567L21.3076 12.2261C23.5898 10.0822 23.867 6.55421 21.9475 4.08025L21.5866 3.61507C19.2904 0.655516 14.6813 1.15185 13.0679 4.53243C12.8399 5.00996 12.1602 5.00996 11.9323 4.53243C10.3188 1.15185 5.70976 0.655511 3.41355 3.61507L3.05264 4.08025C1.13319 6.5542 1.41033 10.0822 3.69254 12.2261Z"
        stroke="#33363F"
        strokeWidth="2"
      />
    </svg>
  );
}
