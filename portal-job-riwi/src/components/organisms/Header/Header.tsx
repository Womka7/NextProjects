"use client"
import React, { useState } from 'react'
import NavBar from '../NavBarHeader/NavBar';
import './header.scss'
import { SubtitleH2 } from '@/components/atoms/SubtitleH2/SubtitleH2';
import { ButtonAdd } from '@/components/molecules/ButtonAddOpenModal/ButtonAdd';
import { ModalFormVacancy } from '../ModalFormVacancy/ModalFormVacancy';
interface IProps{
    subtitle: string;
    panelDetail: 'Vacantes' | 'Companias';
    type: string;
}
export const Header=({ subtitle, panelDetail,type}:IProps)=> {
  const [modalVacancieOpen, setModalVacanciesOpen] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
          <h1>holaa</h1>
        );
      default:
        return null;
    }
  };
  return (
    <>
    <header className='header-page'>
        <NavBar panelDetail={panelDetail}/>
        <div className='sub-header'>
          <SubtitleH2>{subtitle}</SubtitleH2>
          <ButtonAdd panelDetail={panelDetail} />
        </div>
    </header>
    {renderModal()}
    </>
  );
}
