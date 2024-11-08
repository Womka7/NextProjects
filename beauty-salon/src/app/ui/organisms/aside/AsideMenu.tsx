'use client';
import { LucideIcon } from 'lucide-react';
import { AsideItems } from '../../molecules/AsideItems';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
}

interface IProps {
  items: SidebarItem[];
  isOpen: boolean;
}

export const AsideMenu = ({ items, isOpen }: IProps) => {

  return (
    <div className="px-2">
      <div className={`text-sm font-medium text-gray-400 mb-2 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 px-2' : 'opacity-0'
      }`}>
        Menú Principal
      </div>
      <nav>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <AsideItems
              key={index}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

