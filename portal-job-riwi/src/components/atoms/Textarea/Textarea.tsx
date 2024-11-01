import React from 'react'

interface IProps{
    id?:string;
    name?:string;
    required?:boolean;
    value?:string;
}
export const Textarea=({ id,name,required,value}:IProps)=> {
  return (
    <textarea id={id}name={name} required={ required} className='text-area' value={value}/>
  )
}
