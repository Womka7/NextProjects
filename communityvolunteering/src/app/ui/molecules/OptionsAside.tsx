import React from 'react'
import Link from 'next/link';
import { PiFolderOpen } from 'react-icons/pi';
import { LuLogOut } from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';


export default function OptionsAside() {
    const pathname = usePathname();
    const handlelogout = async() => {
        await signOut();
    }
    return (
        <div >
            <Link
                href='/dashboard/services'
                className="w-full px-4 py-2  text-[#2F2B3D] font-medium  bg-[#e5e7eb] flex items-start justify-start gap-4 space-x-2 mb-2"   >
                <PiFolderOpen />
                Proyectos
            </Link>
            <Link
                href=''
                onClick={handlelogout}
                className="w-full px-4 py-2 text-[#2F2B3D] hover:bg-[#e5e7eb] font-medium  bg-[#FFFFFF] flex items-center justify-start gap-4 space-x-2"   >
                <LuLogOut />
                Cerrar Sesion
            </Link>
        </div>
    )
}
