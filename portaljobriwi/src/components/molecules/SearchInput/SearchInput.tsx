import React from 'react';
import './searchStyle.scss'
import { Icon } from '@/components/atoms/Icons/Icon';
import { Input } from '@/components/atoms/Input/Input';

interface IPropsSearchInput {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconColor?: 'icon-grey';
}

export const SearchInput= ({  name,  value,  onChange}: IPropsSearchInput)=>{
  return (
    <div className="search-input-div">
      <Icon name='iconsearch' />
      <Input
        type="text"
        placeholder='Buscar...'
        name={name}
        value={value}
        onChange={onChange}
        className='search-input'
      />
    </div>
  );
};
