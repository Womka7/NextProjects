import './mainContainerStyle.scss'
import ContainerCard from '@/components/atoms/ContainerCard/ContainerCard'
import React from 'react'

export default function MainContainerCards() {
  return (
    <div className='main-all-cards'>
      <ContainerCard/>
      <ContainerCard/>
      <ContainerCard/>
      <ContainerCard/>
      <ContainerCard/>
      <ContainerCard/>
    </div>
  )
}
