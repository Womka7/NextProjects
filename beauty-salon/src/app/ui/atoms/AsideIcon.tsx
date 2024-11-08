'use client';
import { LucideIcon } from 'lucide-react';

interface IProps {
  Icon: LucideIcon;
  className?: string;
}

export const AsideIcon = ({ Icon, className = '' }: IProps) => {
  return <Icon className={`h-5 w-5 ${className}`} />;
};