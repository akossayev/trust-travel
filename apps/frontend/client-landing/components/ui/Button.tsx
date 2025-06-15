import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import ArrowButton from '@/icons/ArrowButton';
import ArrowSliderLeft from '@/icons/ArrowSliderLeft';
import ArrowSliderRight from '@/icons/ArrowSliderRight';
import Search from '@/icons/Search';

const buttonVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      default: '',
      primary: 'bg-blue-500 text-white',
      outline: 'border border-gray-400',
    },
    size: {
      sm: 'text-sm py-1 px-3',
      md: 'text-base py-2 px-4',
      lg: 'text-lg py-3 px-6',
    },
    hasIcon: {
      true: 'gap-2',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    hasIcon: false,
  },
});

type IconType = 'arrowButton' | 'arrowSliderLeft' | 'arrowSliderRight' | 'search';

const iconMap: Record<IconType, React.ReactNode> = {
  arrowButton: <ArrowButton />,
  arrowSliderLeft: <ArrowSliderLeft />,
  arrowSliderRight: <ArrowSliderRight />,
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
    <button className={clsx(buttonVariants({ variant, size, hasIcon }), className)} {...props}>
      {hasIcon && <span className="w-5 h-5 flex-shrink-0">{iconMap[iconType!]}</span>}
      {children}
    </button>
  );
};

export default Button;
