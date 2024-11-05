import React from 'react'
import './textAreaStyle.scss'
interface IProps{
    id?:string;
    name?:string;
    required?:boolean;
    value?:string;
    className?:string;
}
export const Textarea=({ id,name,required,value, className}:IProps)=> {
  const textareafocus = `text-area ${className || ''}`.trim();
  return (
    <textarea id={id}name={name} required={ required} className={textareafocus} value={value}/>
  )
}
