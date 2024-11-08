'use client';
import { LucideIcon } from 'lucide-react';
import { AsideIcon } from '../atoms/AsideIcon';
import Link from 'next/link';

interface IProps {
    icon: LucideIcon;
    label: string;
    isOpen: boolean;
}

export const AsideItems = ({ icon: Icon, label, isOpen }: IProps) => {
    return (
        <li>
            <Link
                href="#"
                className="flex items-center rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-200"
                title={isOpen ? '' : label}
            >
                <AsideIcon Icon={Icon} className={isOpen ? 'mr-3' : ''} />
                <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0'
                    }`}>
                    {label}
                </span>
            </Link>
        </li>
    );
};