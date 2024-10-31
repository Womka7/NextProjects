import { Button } from '@/components/atoms/Button/Button';
import './buttonAddStyle.scss'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@/components/atoms/Icons/Icon';

interface IProps {
  panelDetail: 'Vacantes' | 'Companias';
}
export const ButtonAdd=({ panelDetail }: IProps) =>{
  const buttonConfig = {
    Vacantes: {
      label: 'Agregar Vacante',
      href: '/portal/vacante/crear',
      buttonClass: 'btn-jobs-add'
    },
    Companias: {
      label: 'Agregar Compañía',
      href: '/portal/compania/crear',
      buttonClass: 'btn-company-add'
    }
  }
  const currentInfo = buttonConfig[panelDetail]
  return (
      <Link href={currentInfo.href} className="btn-add-container">
        <Button label={currentInfo.label} className={currentInfo.buttonClass} >
          <Icon name="add" />
        </Button>
      </Link>
  )
}
