import { ContainerCard } from '@/components/atoms/ContainerCard/ContainerCard';
import './mainContainerStyle.scss'
import { ContentCompany } from '@/models/company.model';
import { ContentVacant } from '@/models/vacant.model';
import React from 'react'
import { CardInfo } from '@/components/molecules/CardInfo/CardInfo';
interface IProps {
  contentType: 'vacant' | 'company';
    data: {
        content: ContentVacant[] | ContentCompany[];
        totalPages: number;
    };
    page?: number;
}
export const MainContainerCards=({ contentType, data, page=1}: IProps)=> {
  return (
    <div className='main-all-cards'>
      {data.content.map((item) => (
                <ContainerCard key={contentType === 'vacant' ? (item as ContentVacant).id : (item as ContentCompany).id}>
                    <CardInfo 
                        contentType={contentType} 
                        data={item}
                    />
                </ContainerCard>
            ))}
            {/* <PaginationInf 
                currentPage={page}
                totalPages={data.totalPages}
            /> */}
    </div>
  )
}
