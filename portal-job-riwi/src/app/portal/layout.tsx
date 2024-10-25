import React from 'react'
import './contain.scss'
import Title from '@/components/atoms/TitleH1/TitleH1';
interface Iprops {
    children: React.ReactNode;
}
export default function layoutPortal({ children }: Iprops) {
    return (
        <div className='containerPortal' >
            <main>
            <Title children="Panel de administración"/>
                {children}
            </main>
        </div>
    )
}
