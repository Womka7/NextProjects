import React from 'react'
import './parrafoStyle.scss'
interface IProps{
    children: React.ReactNode;
}
export const Parrafo=({children}:IProps)=> {
  return (
    <p className='p'> {children}</p>
  )
}
