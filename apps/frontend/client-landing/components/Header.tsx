import React from 'react';
import Logo from '@/icons/Logo';
import Button from './ui/Button';
import Search from '@/icons/Search';

export default function Header() {
  return (
    <header>
      <Logo />

      <Button
        variant="default"
        hasIcon
        iconType="search"
        className="w-[50px] h-[50px] bg-black"></Button>
    </header>
  );
}
