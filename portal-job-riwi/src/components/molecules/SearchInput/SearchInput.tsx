import Icon from '@/components/atoms/Icons/Icon';
import Input from '@/components/atoms/Input/Input';
import React from 'react';

interface IPropsSearchInput {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconName: keyof typeof icons;
  iconColor?: 'different-color-icon' | 'icon-grey';
}

export default function SearchInput ({  placeholder,  name,  value,  onChange,  iconName,  iconColor = 'icon-grey'}: IPropsSearchInput){
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2">
      <Icon name={iconName} colorChange={iconColor} />
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        borderStyle="none"
      />
    </div>
  );
};
