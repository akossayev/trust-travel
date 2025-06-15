import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowButton({ className, ...props }: Props) {
  return (
    <svg
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path
        d="M14.6036 1.97456L14.5373 0.976757L15.5351 0.910477L15.6014 1.90828L14.6036 1.97456ZM2.1823 17.6816C1.81852 18.0972 1.18674 18.1391 0.771193 17.7754C0.355644 17.4116 0.313678 16.7798 0.67746 16.3642L2.1823 17.6816ZM3.24847 1.72663L14.5373 0.976757L14.6699 2.97236L3.38103 3.72223L3.24847 1.72663ZM15.6014 1.90828L16.3513 13.1971L14.3556 13.3297L13.6058 2.04084L15.6014 1.90828ZM15.356 2.63324L2.1823 17.6816L0.67746 16.3642L13.8512 1.31587L15.356 2.63324Z"
        fill="white"
      />
    </svg>
  );
}
