import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import SectionButtonHeader from '@/components/molecules/SectionButton/SectionButtonHeader'
import React from 'react'
import './navBarStyle.scss'
interface IProps{
    info: string
    panelDetail: string
}
export default function NavBar({info, panelDetail}: IProps) {
  return (
    <nav className='nav-Bar'>
      <SectionButtonHeader panelDetail={info}/>
      <SearchInput/>
    </nav>
  )
}
