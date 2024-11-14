import React from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

export const Button:React.FC<IProps>=({children, ...props}) =>{
  return (
    <button {...props} > 
      {children}
    </button>
  )
}
