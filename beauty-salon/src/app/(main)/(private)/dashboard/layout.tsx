'use client';
import React from 'react'
import AuthGuard from './guard/AuthGuard'
import { HomeIcon, UserIcon, SettingsIcon, LucideIcon, WandSparkles, Users, CalendarDays, FileUser } from 'lucide-react';
import { Aside } from '@/app/ui/template/aside/Aside';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: WandSparkles,
    label: 'Servicios',
    href: '/dashboard'
  },
  {
    icon: Users,
    label: 'Empleados',
    href: '/profile'
  },
  {
    icon: FileUser,
    label: 'Clientes',
    href: '/services'
  },
  {
    icon: CalendarDays,
    label: 'Citas',
    href: '/services'
  }
];

export default function PrivateLayout({children}:{children:React.ReactNode}) {
  return (
    <AuthGuard><div className="flex min-h-screen bg-gray-100">
    <Aside
      title="Beauty Salon"
      items={sidebarItems}
    ></Aside>
    <main className="flex-1 ">
      {children}
    </main>
  </div></AuthGuard>
  )
}
