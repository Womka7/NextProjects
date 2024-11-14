import React from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{

}

export const InputFile:React.FC<IProps>=({...props}) =>{
  return (
    <input{...props} /> 
  )
}
