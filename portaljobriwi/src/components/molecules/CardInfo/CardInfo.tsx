import { ContTextCard } from '@/components/atoms/ContTextCard/ContTextCard';
import { Parrafo } from '@/components/atoms/Parrafo/Parrafo';
import { SubtitleH3 } from '@/components/atoms/SubtitleH3/SubtitleH3';
import { ContentCompany } from '@/models/company.model';
import { ContentVacant } from '@/models/vacant.model';
import React from 'react'
import { ModifyButtonsCards } from '../ModifyButtons/ModifyButtons';

interface IProps {
    contentType: 'vacant' | 'company';
    data: ContentVacant | ContentCompany;
}

export const CardInfo = ({ contentType, data }: IProps) => {
    if (contentType === 'vacant') {
        const showVacant = data as ContentVacant;
        return (
            <>
                <SubtitleH3>{showVacant.title}</SubtitleH3>
                <ContTextCard>
                    <Parrafo>Descripción: {showVacant.description}</Parrafo>
                    <Parrafo>Estado: {showVacant.status}</Parrafo>
                    <Parrafo>Compañía: {showVacant.company.name}</Parrafo>
                </ContTextCard>
                <ModifyButtonsCards type='vacant' idCard={String(showVacant.id)} />
            </>
        );
    }
    const showCompany = data as ContentCompany;
    return (
        <>
            <SubtitleH3>{showCompany.name}</SubtitleH3>
            <ContTextCard>
                <Parrafo>Ciudad: {showCompany.location}</Parrafo>
                <Parrafo>Contacto:{showCompany.contact}</Parrafo>
            </ContTextCard>
            <ModifyButtonsCards type='company' idCard={showCompany.id} />
        </>
    );

}
