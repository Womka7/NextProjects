import React from 'react'
import './contain.scss'
import { TitleH1 } from '@/components/atoms/TitleH1/TitleH1';
interface Iprops {
    children: React.ReactNode;
}
export default function layoutPortal({ children }: Iprops) {
    return (
        <div className='containerPortal' >
            <main>
                <TitleH1 label="Panel de administración" className='title-layout' />
                
                {children}
            </main>
        </div>
    )
}
