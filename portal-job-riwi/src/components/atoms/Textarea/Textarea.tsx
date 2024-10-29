import React from 'react'

interface IProps{
    children:string;
}
export default function Textarea({ children}:IProps) {
  return (
    <textarea className='text-area'> {children }   </textarea>
  )
}
