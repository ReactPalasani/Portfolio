'use client'; 
import React, { ComponentProps } from 'react';
import dynamic from 'next/dynamic';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { ICON_MAP, AppIconName } from '@/utils/icons';

interface IconProps extends Omit<ComponentProps<'svg'>, 'ref'> {
  name: AppIconName; // Restricts props to keys inside your ICON_MAP ('homeRoute', 'menuOpen', etc.)
  size?: number | string;
  className?: string;
}

export default function LucideIcon({ name, size = 20, className, ...props }: IconProps) {
  // Grab the actual Lucide string from your config map
  const lucideKey = ICON_MAP[name];
  const LucideIconComponent = dynamic(dynamicIconImports[lucideKey]);

  return (
    <LucideIconComponent 
      size={size} 
      className={className} 
      {...props} 
    />
  );
}
