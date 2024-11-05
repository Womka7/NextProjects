import './containerCardStyle.scss'
import React from 'react'

interface IProps{
  children: React.ReactNode;
  page?: string;
}
export const ContainerCard=({children }:IProps)=> {
  return (
    <article className='container-card'>
      {children}
    </article>
  )
}
