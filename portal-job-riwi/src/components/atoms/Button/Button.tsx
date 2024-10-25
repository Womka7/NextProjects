import React from 'react'
import './buttonStyle.scss'
interface IProps {
    children:React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Button({children,className= '', onClick}:IProps) {
    return (
        <button onClick={onClick} className={`button-gnral ${className}`}>
            {children}
        </button>
      );
}
