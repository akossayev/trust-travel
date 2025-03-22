import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowSliderRightDark({ className, ...restProps }: Props) {
  return (
    <svg
      {...restProps}
      width="93"
      height="93"
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <rect
        x="93"
        y="93"
        width="93"
        height="93"
        rx="46.5"
        transform="rotate(-180 93 93)"
        fill="#E0E0E0"
        fillOpacity="0.5"
      />
      <path d="M39.625 32.75L53.375 46.5L39.625 60.25" stroke="#1E1E1E" strokeWidth="2" />
    </svg>
  );
}
