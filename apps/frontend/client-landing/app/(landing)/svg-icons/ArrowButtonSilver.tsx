import React from 'react';

interface Props {
  className?: string;
}

export default function ArrowButtonSilver({ className }: Props) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <rect width="50" height="50" rx="25" fill="white" fillOpacity="0.5" />
      <path
        d="M32.0259 16.9746L31.9597 15.9768L32.9575 15.9105L33.0237 16.9083L32.0259 16.9746ZM19.6047 32.6816C19.2409 33.0972 18.6091 33.1391 18.1936 32.7754C17.778 32.4116 17.736 31.7798 18.0998 31.3642L19.6047 32.6816ZM20.6708 16.7266L31.9597 15.9768L32.0922 17.9724L20.8034 18.7222L20.6708 16.7266ZM33.0237 16.9083L33.7736 28.1971L31.778 28.3297L31.0281 17.0408L33.0237 16.9083ZM32.7784 17.6332L19.6047 32.6816L18.0998 31.3642L31.2735 16.3159L32.7784 17.6332Z"
        fill="white"
      />
    </svg>
  );
}
