import Icon from '@/components/atoms/Icons/Icon';
import Input from '@/components/atoms/Input/Input';
import React from 'react';
import './searchStyle.scss'

interface IPropsSearchInput {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconColor?: 'icon-grey';
}

export default function SearchInput ({  placeholder,  name,  value,  onChange,  iconColor = 'icon-grey'}: IPropsSearchInput){
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
