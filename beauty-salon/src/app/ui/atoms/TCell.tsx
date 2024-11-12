import React from 'react'

interface IProps{
    children?: React.ReactNode;
}

export const TCell =({ children }:IProps) =>{
  return (
    <td className='p-4 border-b'>{children}</td>
  )
}

