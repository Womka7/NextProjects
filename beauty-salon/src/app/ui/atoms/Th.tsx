import React from 'react'

interface IProps{
    children?: React.ReactNode;
}
export const Th =({children}:IProps) =>{
  return (
    <th className='p-4 text-left border-b'>{children}</th>
  )
}
