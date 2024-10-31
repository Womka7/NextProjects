import React from 'react'
import './subtitleH2Style.scss'

interface IH2Props{
  children: React.ReactNode;
}

export default function SubtitleH2({children}:IH2Props) {
  return (
    <h2 className='subtitle-h2'>{children}</h2>
  )
}
