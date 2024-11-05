import React from 'react'
import './subtitleH3Style.scss'

interface IH1Props{
    children:string;
}

export const SubtitleH3=({children}:IH1Props)=> {
  return (
    <h3 className='subtitle-h3'>{children}</h3>
  )
}
