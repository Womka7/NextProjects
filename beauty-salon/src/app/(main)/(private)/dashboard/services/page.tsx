import React from 'react'
import './asidepageStyle.scss'
import { Table } from '@/app/ui/molecules/TableInfo/Table'
import { IAllClientsResponse, IAllServicesResponse, IServiceResponse, Pageable } from '@/app/core/application/dto';
import { useRouter, useSearchParams } from 'next/navigation';


interface IProps {
  onEdit?: (rowIndex: number) => void;
  onDelete?: (rowIndex: number) => void;
  handleAdd: () => void;
  pagination: Pageable;
  data: IAllServicesResponse | IAllClientsResponse;
  NameButtonAdd: string;
}

export default function ServicesPage({ data, onEdit, onDelete, pagination, handleAdd, NameButtonAdd }: IProps) {

  const searchParams = useSearchParams();
    const router = useRouter();

    const HandleClickNext = (nextPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextPage <= data.totalPages) {
            params.set('page', nextPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const HandleClickBack = (backPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (backPage > 0) {
            params.set('page', backPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const courrentPage = pagination.pageNumber + 1;

    const content = data.content;
    const thead = content.length > 0 ? Object.keys(content[0]) : [];

    const tbody = content;

  return (
    <Table thead={thead} tbody={tbody} onEdit={onEdit} onDelete={onDelete} ></Table>
  )
}