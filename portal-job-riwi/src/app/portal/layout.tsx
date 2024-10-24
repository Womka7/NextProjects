import Title from '@/components/atoms/TitleMain/Title';
import React from 'react'
import './contain.scss'
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
