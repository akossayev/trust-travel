import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowUp({ className, ...props }: Props) {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path d="M1 7L7 1L13 7" stroke="black" />
    </svg>
  );
}
