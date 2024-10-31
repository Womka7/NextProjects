import React from 'react'
import './titleH1Style.scss'
interface IH1Props{
    label:string;
    className?:string;
}

export default function TitleH1({label,className}:IH1Props) {
  return (
    <h1 className={`title-h1 ${className}`}>{label}</h1>
  )
}
