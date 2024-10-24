import React from 'react'

interface IProps {
    children:React.ReactNode;
    className?: string;
}

export default function Button({children,className}:IProps) {
    return (
        <button className={`button-gnral ${className}`}>
            {children}
        </button>
      );
}
