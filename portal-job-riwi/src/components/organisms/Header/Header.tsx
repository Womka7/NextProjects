import React from 'react'
import NavBar from '../NavBarHeader/NavBar';
import './header.scss'
import ButtonAdd from '@/components/molecules/ButtonAddOpenModal/ButtonAdd';
import SubtitleH2 from '@/components/atoms/SubtitleH2/SubtitleH2';
interface IProps{
    subtitle: string;
    panelDetail: 'Vacantes' | 'Companias';
}
export default function Header({ subtitle, panelDetail}:IProps) {
  return (
    <header className='header-page'>
        <NavBar panelDetail={panelDetail}/>
        <div className='sub-header'>
          <SubtitleH2>{subtitle}</SubtitleH2>
          <ButtonAdd panelDetail={panelDetail}/>
        </div>
    </header>
  )
}
