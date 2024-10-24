import React from 'react'
interface IH1Props{
    children:React.ReactNode;
}

export default function Title({children}:IH1Props) {
  return (
    <h1 className='title-h1'>{children}</h1>
  )
}
