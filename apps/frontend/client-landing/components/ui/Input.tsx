import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const inputVariants = cva('text-white', {
  variants: {
    inputSize: {
      custom: 'w-full text-lg',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    inputSize: 'md',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  inputSize?: 'custom' | 'sm' | 'md' | 'lg';
}

const Input = ({ className, inputSize, ...props }: InputProps) => {
  return <input className={clsx(inputVariants({ inputSize }), className)} {...props} />;
};

export default Input;
