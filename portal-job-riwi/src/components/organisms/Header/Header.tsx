import React from 'react'
import NavBar from '../NavBarHeader/NavBar';
import './header.scss'
import Subtitle from '@/components/atoms/SubtitleH2/SubtitleH2';
import ButtonAdd from '@/components/molecules/ButtonAddOpenModal/ButtonAdd';
interface IProps{
    subtitle: string;
    panelDetail: 'Vacantes' | 'Companias';
}
export default function Header({ subtitle, panelDetail}:IProps) {
  return (
    <header className='header-page'>
        <NavBar panelDetail={panelDetail}/>
        <Subtitle>{subtitle}</Subtitle>
        <ButtonAdd panelDetail={panelDetail}/>
    </header>
  )
}
