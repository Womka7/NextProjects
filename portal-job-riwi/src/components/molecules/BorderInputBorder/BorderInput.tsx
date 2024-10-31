import React from 'react';
import './borderInputStyle.scss';
import { Input } from '@/components/atoms/Input/Input';
interface IPropsBorderedInput {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dinamicFocus:'purple'|'pink';
}

export const BorderInput=({  name,  value,  onChange,dinamicFocus}: IPropsBorderedInput)=> {
  return (
    <div className="border-form-input">
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={`color-input color-input--${dinamicFocus}`}
      />
    </div>
  );
};
