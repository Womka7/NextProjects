import React from 'react'

interface IProps{
    children: React.ReactNode;
}
export const TRow =({children}:IProps) =>{
  return (
    <tr className='hover:bg-gray-100'>{children}</tr>
  )
}