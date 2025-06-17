import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowDown({ className, ...props }: Props) {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path d="M13 1L7 7L1 1" stroke="black" />
    </svg>
  );
}
