import React from 'react';

interface Props {
  className?: string;
}

export default function ArrowSliderRightLight({ className }: Props) {
  return (
    <svg
      width="93"
      height="93"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <rect width="93" height="93" rx="46.5" fill="white" fillOpacity="0.5" />
      <path
        d="M39.625 32.75L53.375 46.5L39.625 60.25"
        stroke="url(#paint0_radial_335_7033)"
        strokeWidth="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_335_7033"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.5 46.3974) rotate(179.608) scale(15.0141 30.0267)">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E8E8E8" />
        </radialGradient>
      </defs>
    </svg>
  );
}
