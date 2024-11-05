"use client"
import { icons } from '@/components/atoms/Icons/icons';
import { ICompany } from '@/models/company.model';
import { IVacant } from '@/models/vacant.model';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import './paginationInfStyle.scss'
import { Button } from '@/components/atoms/Button/Button';
import { Icon } from '@/components/atoms/Icons/Icon';
import { Parrafo } from '@/components/atoms/Parrafo/Parrafo';

interface IProps {
    data: IVacant | ICompany;
}
export const PaginationInf = ({ data }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`);
    };
    const currentPage = data.pageable.pageNumber + 1;
    const showPrevious = currentPage > 1;
    const showNext = currentPage < data.totalPages;
    
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < data.totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    return (
        <div className='paginate'>
            {showPrevious && (
                <Button onClick={handlePrevious} className='button-pagination'>
                    <Icon name='iconmenorque' />
                </Button>
            )}

            <Parrafo>Página {currentPage} de {data.totalPages}</Parrafo>
            {showNext && (
                <Button onClick={handleNext} className='button-pagination'>
                    <Icon name='iconmayorque' />
                </Button>
            )}
        </div>
    )
}
