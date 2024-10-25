import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import SectionButtonHeader from '@/components/molecules/SectionButton/SectionButtonHeader'
import React from 'react'
import './navBarStyle.scss'
interface IProps{
    info: string
}
export default function NavBar({info}: IProps) {
  return (
    <nav className='nav-Bar'>
      <SectionButtonHeader panelDetail={info}/>
      <SearchInput/>
    </nav>
  )
}
