import Button from '@/components/atoms/Button/Button'
import Icon from '@/components/atoms/Icons/Icon'
import './buttonAddStyle.scss'
import Link from 'next/link'
import React from 'react'

interface IProps {
  panelDetail: 'Vacantes' | 'Companias';
}
export default function ButtonAdd({ panelDetail }: IProps) {
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
