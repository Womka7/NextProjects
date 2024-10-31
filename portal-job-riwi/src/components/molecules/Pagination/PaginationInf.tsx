"use client"
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icons/Icon';
import { icons } from '@/components/atoms/Icons/icons';
import Parrafo from '@/components/atoms/Parrafo/Parrafo';
import { ICompany } from '@/models/company.model';
import { IVacant } from '@/models/vacant.model';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import './paginationInfStyle.scss'

interface IProps {
    data: IVacant | ICompany;
}
export default function PaginationInf({ data }: IProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`);
    };
    const currentPage = data.pageable.pageNumber + 1;
    const paginationConfig = {
        previous: {
            isVisible: currentPage !== 1,
            onClick: () => onPageChange(currentPage - 1),
            iconName: 'iconmenorque' as keyof typeof icons
        },
        next: {
            isVisible: currentPage !== data.totalPages,
            onClick: () => onPageChange(currentPage + 1),
            iconName: 'iconmayorque' as keyof typeof icons
        }
    } as const;
    return (
        <div className='paginate'>
            {Object.entries(paginationConfig).map(([key, config]) => (
                config.isVisible && (<Button key={key} onClick={config.onClick} className='button-pagination'>
                    <Icon name={config.iconName} />
                </Button>
                )
            ))}
            <Parrafo>Página {currentPage} de {data.totalPages}</Parrafo>
        </div>
    )
}
