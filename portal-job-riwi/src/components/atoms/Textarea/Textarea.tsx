import React from 'react'

interface IProps{
    children:string;
}
export const Textarea=({ children}:IProps)=> {
  return (
    <textarea className='text-area'> {children }   </textarea>
  )
}
