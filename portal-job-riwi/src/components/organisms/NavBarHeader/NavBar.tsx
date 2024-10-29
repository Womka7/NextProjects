import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import SectionButtonHeader from '@/components/molecules/SectionButton/SectionButtonHeader'
import React from 'react'
import './navBarStyle.scss'
interface IProps{
    panelDetail: 'Vacantes'|'Companias'
}
export default function NavBar({panelDetail}: IProps) {
  return (
    <nav className='nav-Bar'>
      <SectionButtonHeader panelDetail={panelDetail}/>
      <SearchInput/>
    </nav>
  )
}
