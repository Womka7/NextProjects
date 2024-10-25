import React from 'react'
import './subtitleH2Style.scss'

interface IH1Props{
    children:string;
}

export default function Subtitle({children}:IH1Props) {
  return (
    <h2 className='subtitle-h2'>{children}</h2>
  )
}
