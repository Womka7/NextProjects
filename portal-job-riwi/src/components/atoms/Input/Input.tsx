import React from 'react';
import './inputStyle.scss'
interface IPropsInput {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  borderStyle?: 'none' | 'purple' | 'pink';
}

export default function Input ({  type = 'text',  placeholder,  name,  value,  onChange,  borderStyle = 'none'}: IPropsInput) {
  return (
    <input
      className={`input-focus ${borderStyle === 'purple' ? 'border-purple' : ''} 
      ${borderStyle === 'pink' ? 'border-pink' : ''} 
      ${borderStyle === 'none' ? 'border-none' : ''}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};






