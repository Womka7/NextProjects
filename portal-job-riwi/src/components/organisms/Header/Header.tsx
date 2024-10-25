import Title from '@/components/atoms/TitleH1/TitleH1'
import React from 'react'
import NavBar from '../NavBarHeader/NavBar';
import './header.scss'
interface IProps{
    title: string;
    // subtitle: string;
    info: string;
}
export default function Header({ title,  info}:IProps) {
  return (
    <header className='header-page'>
        <Title>{title}</Title>
        <NavBar info={info}/>
    </header>
  )
}
