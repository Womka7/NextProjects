import React from 'react'

interface IProps{
    children: React.ReactNode;
}
export const TBody =({children}:IProps) =>{
  return (
    <tbody className='divide-y divide-gray-200'>{children}</tbody>
  )
}
