"use client"
import './modifyButtonsStyle.scss'
import { Button } from '@/components/atoms/Button/Button'
import { Icon } from '@/components/atoms/Icons/Icon'
import { useState } from 'react'
import { ModalFormVacancy } from '@/components/organisms/ModalFormVacancy/ModalFormVacancy'
import { ModalFormCompany } from '@/components/organisms/ModalFormCompany/ModalFormCompany'
import { Service } from '@/services/portal.service'
import { useRouter } from 'next/navigation'

interface IProps {
    type: 'vacant' | 'company';
    idCard: string;
}

const useServices = new Service();

export const ModifyButtonsCards = ({ type, idCard }: IProps) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        try {
            if (type === 'vacant') {
                await useServices.destroyVacant(idCard);
            } else {
                await useServices.destroyCompany(idCard);
            }
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const buttonConfig = {
        vacant: {
            editClass: 'btn-jobs-edit',
            deleteClass: 'btn-jobs-delete'
        },
        company: {
            editClass: 'btn-company-edit',
            deleteClass: 'btn-company-delete'
        }
    };

    const renderModal = () => {
        if (!isModalOpen) return null;

        switch (type) {
            case 'vacant':
                return (
                    <ModalFormVacancy
                        onClose={handleCloseModal}
                        titlePrimary="Editar Vacante"
                        editButtonLabel="Actualizar"
                        idCard={idCard}
                    />
                );
            case 'company':
                return (
                    <ModalFormCompany
                        onClose={handleCloseModal}
                        titlePrimary="Editar Compañía"
                        editButtonLabel="Actualizar"
                        idCard={idCard}
                    />
                );
            default:
                return null;
        }
    };

    const currentConfig = buttonConfig[type];

    return (
        <>
            <div className="card-button-container">
                <Button
                    className={currentConfig.editClass}
                    onClick={handleOpenModal}
                >
                    <Icon name="iconedit" />
                </Button>
                <Button
                    className={currentConfig.deleteClass}
                    onClick={handleDelete}
                >
                    <Icon name="icondelete" />
                </Button>
            </div>
            {renderModal()}
        </>
    );
};