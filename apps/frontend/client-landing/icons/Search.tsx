import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Search({ className, ...props }: Props) {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <circle cx="15.5834" cy="16.0827" r="9.91667" stroke="white" stroke-width="2" />
      <path
        d="M28.3333 28.834L24.0833 24.584"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
