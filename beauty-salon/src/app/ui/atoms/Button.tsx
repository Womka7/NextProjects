import React from 'react'


interface IProps {
    children?:React.ReactNode;
    className?: string;
    onClick?: () => void;
    label?: string;
    disabled?: boolean;
}
export const Button=({children, className,label, onClick}:IProps) =>{
  return ( 
    <button onClick={onClick} className={`btn ${className}`}>{label} {children}</button>
  )
}
