import React from 'react'
import './buttonStyle.scss'
interface IProps {
    children:React.ReactNode;
    className?: string;
    onClick?: () => void;
    label?: string;
    disabled?: boolean;
}

export const Button=({children,className= '',label, onClick}:IProps)=> {
    return (
        <button onClick={onClick} className={`button-gnral ${className}`}>
            {children}
            {label}
        </button>
      );
}
