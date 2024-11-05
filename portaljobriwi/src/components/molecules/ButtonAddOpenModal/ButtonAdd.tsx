"use client"
import { Button } from '@/components/atoms/Button/Button';
import './buttonAddStyle.scss'
import React, { useState } from 'react'
import { Icon } from '@/components/atoms/Icons/Icon';
import { ModalFormVacancy } from '@/components/organisms/ModalFormVacancy/ModalFormVacancy';
import { ModalFormCompany } from '@/components/organisms/ModalFormCompany/ModalFormCompany';

interface IProps {
  panelDetail: 'Vacantes' | 'Companias';
}
export const ButtonAdd=({ panelDetail }: IProps) =>{
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderModal = () => {
    if (!isModalOpen) return null;

    switch (panelDetail) {
      case 'Vacantes':
        return (
          <ModalFormVacancy
            onClose={handleCloseModal}
            titlePrimary="Agregar Vacante"
            editButtonLabel="Agregar"
          />
        );
      case 'Companias':
        return (
          <ModalFormCompany 
            onClose={handleCloseModal}
            titlePrimary='Agregar Compañía'
            editButtonLabel='Agregar'
          />
        );
      default:
        return null;
    }
  };

  const currentInfo = buttonConfig[panelDetail]

  return (
    <>
      <div  className="btn-add-container">
        <Button label={currentInfo.label} className={currentInfo.buttonClass}  onClick={handleOpenModal}>
          <Icon name="add" />
        </Button>
      </div>
      {renderModal()}
    </>
  )
}
