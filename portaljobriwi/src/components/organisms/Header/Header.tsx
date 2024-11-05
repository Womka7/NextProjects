import React from 'react'
import NavBar from '../NavBarHeader/NavBar';
import './header.scss'
import { SubtitleH2 } from '@/components/atoms/SubtitleH2/SubtitleH2';
import { ButtonAdd } from '@/components/molecules/ButtonAddOpenModal/ButtonAdd';
interface IProps{
    subtitle: string;
    panelDetail: 'Vacantes' | 'Companias';
    type: string;
}
export const Header=({ subtitle, panelDetail,type}:IProps)=> {

  return (
    <header className='header-page'>
        <NavBar panelDetail={panelDetail}/>
        <div className='sub-header'>
          <SubtitleH2>{subtitle}</SubtitleH2>
          <ButtonAdd panelDetail={panelDetail} />
        </div>
    </header>
  );
}
