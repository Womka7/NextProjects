import React from 'react'

interface IProps{
    children: React.ReactNode;
}
export default function Parrafo({children}:IProps) {
  return (
    <p> {children}</p>
  )
}
