import React from 'react';

interface Props {
  className?: string;
}

export default function BurgerMenuMobile({ className }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 7H19"
        stroke="url(#paint0_linear_300_2652)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12H19"
        stroke="url(#paint1_linear_300_2652)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H19"
        stroke="url(#paint2_linear_300_2652)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_300_2652"
          x1="5"
          y1="7.5"
          x2="19"
          y2="7.47174"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#489FC4" />
          <stop offset="1" stopColor="#489FC4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_300_2652"
          x1="5"
          y1="12.5"
          x2="19"
          y2="12.4717"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#489FC4" />
          <stop offset="1" stopColor="#489FC4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_300_2652"
          x1="5"
          y1="17.5"
          x2="19"
          y2="17.4717"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#489FC4" />
          <stop offset="1" stopColor="#489FC4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
