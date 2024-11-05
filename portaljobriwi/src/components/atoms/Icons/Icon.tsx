import React from 'react'
import { icons } from './icons'
import './iconStyle.scss'

interface IPropsIcon {
    name: keyof typeof icons;
}

export const Icon=({ name}: IPropsIcon)=> {
    const ComponentIcon = icons[name];
    const iconStyle = 'icon';
    return <ComponentIcon className={iconStyle}/>
}
