import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import ArrowSide from '@/icons/ArrowSide';
import ArrowLeft from '@/icons/ArrowLeft';
import ArrowRight from '@/icons/ArrowRight';
import Search from '@/icons/Search';

const buttonVariants = cva('flex items-center ', {
  variants: {
    variant: {
      default: '',
      link: 'border-blue-400 rounded-[60px] text-[#489FC4] border border-[#489FC4] sm:bg-white/90',
      primaryWhite: 'bg-white py-[14px] rounded-[60px] justify-center text-[#747474] text-sm',
      primaryOutline:
        'border border-white text-white py-[14px] rounded-[60px] text-sm justify-center',
      primaryBlue: '',
      primarySilver: '',
      primaryBlueWhite: '',
      primaryTransperent: 'bg-white/50 text-white py-[10px] rounded-[60px] text-sm justify-center',
    },
    size: {
      base: 'gap-5 p-1',
      custom: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'base',
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
      {hasIcon && (
        <span className={`${iconType === 'search' ? '' : 'bg-[#489FC4] p-4 rounded-[60px]'}`}>
          {iconMap[iconType!]}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
