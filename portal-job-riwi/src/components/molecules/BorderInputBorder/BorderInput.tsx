import Input from '@/components/atoms/Input/Input';
import React from 'react';

interface IPropsBorderedInput {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  borderStyle: 'purple' | 'pink';
}

export default function BorderInput({  name,  value,  onChange,  borderStyle}: IPropsBorderedInput) {
  return (
    <div className="border-form-input">
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        borderStyle={borderStyle}
      />
    </div>
  );
};