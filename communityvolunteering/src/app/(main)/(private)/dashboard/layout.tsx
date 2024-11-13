'use client';
import React from 'react'
import AuthGuard from './guard/AuthGuard'

interface SidebarItem {
  label: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: 'Servicios',
    href: '/dashboard'
  },
  {
    label: 'Empleados',
    href: '/profile'
  },
  {
    label: 'Clientes',
    href: '/services'
  },
  {

    label: 'Citas',
    href: '/services'
  }
];

export default function PrivateLayout({children}:{children:React.ReactNode}) {
  return (
    <AuthGuard><div className="flex min-h-screen bg-gray-100">
    
    <main className="flex-1 ">
      {children}
    </main>
  </div></AuthGuard>
  )
}
