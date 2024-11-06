import React from 'react'
import './asideStyle.scss'

export const Aside=({children}:Readonly<{children?:React.ReactNode;}>)=>{
  return (
    <aside className='contain-aside'>
        {children}
    </aside>
  )
}
