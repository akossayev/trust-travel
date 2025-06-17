import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowLeft({ className, ...props }: Props) {
  return (
    <svg
      width="17"
      height="29"
      viewBox="0 0 17 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path
        d="M15.375 28.25L1.625 14.5L15.375 0.749999"
        stroke="url(#paint0_radial_2545_667)"
        stroke-width="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2545_667"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.5 14.6026) rotate(-0.391577) scale(15.0141 30.0267)">
          <stop stop-color="white" />
          <stop offset="1" stop-color="#E8E8E8" />
        </radialGradient>
      </defs>
    </svg>
  );
}
