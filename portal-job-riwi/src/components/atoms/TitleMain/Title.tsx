import React from 'react'
interface IH1Props{
    children:string;
}

export default function Title({children}:IH1Props) {
  return (
    <h1 className='title-h1'>{children}</h1>
  )
}
