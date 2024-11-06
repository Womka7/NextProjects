import React from 'react'
import './tableContainStyle.scss'

export const TableContain=({children}:Readonly<{children:React.ReactNode;}>) =>{
  return (
    <section className='section-main-table'>
        {children}
    </section>
  )
}
