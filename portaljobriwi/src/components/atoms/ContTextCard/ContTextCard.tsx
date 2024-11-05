import './ContTextCardStyle.scss'
import React from 'react'

interface IProps{
    children: React.ReactNode
}
export const ContTextCard=({children}:IProps)=> {
  return (
    <div className='cont-card-text'>
      {children}
    </div>
  )
}
