import React from 'react'

interface IProps{
    children: React.ReactNode;
}
export const THead =({children}:IProps) =>{
  return (
    <thead className='p-4 text-left border-b'>{children}</thead>
  )
}
