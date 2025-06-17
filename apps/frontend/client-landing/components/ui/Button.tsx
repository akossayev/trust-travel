import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import ArrowSide from '@/icons/ArrowSide';
import ArrowLeft from '@/icons/ArrowLeft';
import ArrowRight from '@/icons/ArrowRight';
import Search from '@/icons/Search';

const buttonVariants = cva('flex items-center', {
  variants: {
    variant: {
      default: '',
      primary: 'bg-blue-500 text-white',
      outline: 'border border-gray-400',
      link: 'border-blue-400 rounded-[60px] text-[#489FC4] border border-[#489FC4]',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg px-1 py-1 gap-5 w-[190px] h-[50px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

type IconType = 'arrowSide' | 'arrowLeft' | 'arrowRight' | 'search';

const iconMap: Record<IconType, React.ReactNode> = {
  arrowSide: <ArrowSide />,
  arrowLeft: <ArrowLeft />,
  arrowRight: <ArrowRight />,
  search: <Search />,
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconType?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  iconType,
  className,
  children,
  ...props
}) => {
  const hasIcon = Boolean(iconType);

  return (
    <button className={clsx(buttonVariants({ variant, size }), className)} {...props}>
      {hasIcon && <span className="bg-[#489FC4] p-4 rounded-[60px]">{iconMap[iconType!]}</span>}
      {children}
    </button>
  );
};

export default Button;
