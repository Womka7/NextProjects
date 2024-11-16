import React from 'react'

interface IProps extends React.HTMLAttributes<HTMLHeadingElement>{

}

export const H3:React.FC<IProps>=({children, ...props}) =>{
  return (
    <h3{...props} > 
      {children}
    </h3>
  )
}
