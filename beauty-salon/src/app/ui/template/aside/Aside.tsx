"use client"
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { AsideMenu } from '../../organisms/aside/AsideMenu';
import { ToggleAside } from '../../molecules/ToggleAside';

interface SidebarProps {
  title: string;
  items: Array<{
    icon: LucideIcon;
    label: string;
  }>;
  defaultOpen?: boolean;
}

export const Aside = ({ title, items, defaultOpen = true }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`relative bg-gray-800 text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'
        }`}
    >
      <div className="p-4">
        <h2 className={`text-xl font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}>{title}</h2>
      </div>

      <AsideMenu items={items} isOpen={isOpen} />

      <ToggleAside isOpen={isOpen} onToggle={toggleSidebar} />
    </aside>
  );
};