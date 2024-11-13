import React from 'react'

interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement>{

}

export const Label:React.FC<IProps>=({children, ...props}) =>{
  return (
    <label{...props} > 
      {children}
    </label>
  )
}
