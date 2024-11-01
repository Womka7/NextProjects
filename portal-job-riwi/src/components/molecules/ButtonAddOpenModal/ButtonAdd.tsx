import { Button } from '@/components/atoms/Button/Button';
import './buttonAddStyle.scss'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@/components/atoms/Icons/Icon';

interface IProps {
  panelDetail: 'Vacantes' | 'Companias';
  onClick?: () => void;
}
export const ButtonAdd=({ panelDetail,onClick }: IProps) =>{
  const buttonConfig = {
    Vacantes: {
      label: 'Agregar Vacante',
      buttonClass: 'btn-jobs-add'
    },
    Companias: {
      label: 'Agregar Compañía',
      buttonClass: 'btn-company-add'
    }
  }
  const currentInfo = buttonConfig[panelDetail]
  return (
      <div  className="btn-add-container">
        <Button label={currentInfo.label} className={currentInfo.buttonClass}  onClick={onClick}>
          <Icon name="add" />
        </Button>
      </div>
  )
}
