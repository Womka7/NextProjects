'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { ButtonPag } from "../../molecules/Pagination";
import TableComponent from "../../molecules/Table";

interface MainProps {
    onEdit?: (rowIndex: number) => void;
    onDelete?: (rowIndex: number) => void;
    data: IProjectsResponse;
}

export const MainComponent=({ data, onEdit, onDelete }: MainProps)=> {
    const searchParams = useSearchParams();
    const router = useRouter();

    const HandleClickNext = (nextPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextPage <= data.metadata.totalPages) {
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

    const courrentPage = data.metadata.currentPage;
    const content = data.data;
    const tbody = content;

    return (
        <div className="w-full h-[50vh] flex flex-col justify-between items-center">
            <div className="w-full">
                <TableComponent tbody={tbody} onEdit={onEdit} onDelete={onDelete} />
            </div>
            <div className="w-full flex justify-center items-center text-base">
                <ButtonPag label="<" onClick={() => HandleClickBack(courrentPage - 1)} />
                Página {courrentPage} de {data.metadata.totalPages}
                <ButtonPag label=">" onClick={() => HandleClickNext(courrentPage + 1)} />
            </div>
        </div>
    )
}