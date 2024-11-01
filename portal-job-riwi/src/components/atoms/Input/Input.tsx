import React from 'react';
import './inputStyle.scss'
interface IPropsInput {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  
}

export const Input= ({  type = 'text',  placeholder,  name,  value,  onChange, className,id,required}: IPropsInput) =>{
  return (
    <input
      className={`input-focus ${className}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id= {id}
      required={required}
    />
  );
};






