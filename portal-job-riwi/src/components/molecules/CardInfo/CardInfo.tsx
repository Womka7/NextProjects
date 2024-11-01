import { ContTextCard } from '@/components/atoms/ContTextCard/ContTextCard';
import { Parrafo } from '@/components/atoms/Parrafo/Parrafo';
import { SubtitleH3 } from '@/components/atoms/SubtitleH3/SubtitleH3';
import { ContentCompany } from '@/models/company.model';
import { ContentVacant } from '@/models/vacant.model';
import React from 'react'

interface IProps {
    contentType: 'vacant' | 'company';
    data: ContentVacant | ContentCompany;
}

export const CardInfo=({ contentType, data }: IProps)=> {
    if (contentType === 'vacant') {
        const showVacant = data as ContentVacant;
        return (
            <>
                <ContTextCard>
                    <SubtitleH3>{showVacant.title}</SubtitleH3>
                    <Parrafo>Descripción: {showVacant.description}</Parrafo>
                    <Parrafo>Estado: {showVacant.status}</Parrafo>
                    <Parrafo>Compañía: {showVacant.company.name}</Parrafo>
                </ContTextCard>
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
        </>
    );

}
