import React from 'react'
import { icons } from './icons'

interface IPropsIcon {
    name: keyof typeof icons;
    colorChange?: 'different-color-icon' | 'icon-grey';
}

export default function Icon({ name, colorChange }: IPropsIcon) {
    const ComponentIcon = icons[name];
    const iconStyle = `icon ${colorChange === 'different-color-icon' ? 'different-color-icon' + name : 'icon-grey'}`;
    return <ComponentIcon className={iconStyle}/>
}
