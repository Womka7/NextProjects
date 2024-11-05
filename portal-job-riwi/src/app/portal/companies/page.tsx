import { PaginationInf } from "@/components/molecules/Pagination/PaginationInf";
import { Header } from "@/components/organisms/Header/Header";
import { MainContainerCards } from "@/components/organisms/MainContainerCards/MainContainerCards";
import { Service } from "@/services/portal.service";
 
const useServices = new Service()
interface ICompanyProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    }
}
export const generateMetadata = async ({ searchParams }: ICompanyProps) => {
    const page = searchParams.page ?? 1;
    return {
        title: `Compañía - Página ${page}`,
        description: 'Panel de compañías'
    }
}
export default async function Companys({ searchParams }: ICompanyProps) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;
    const name = searchParams.name ? String(searchParams.name) :'';

    const companies= await useServices.findCompany(page,size,name);
    return (
        <>
            <Header subtitle="Compañías" panelDetail="Companias"  type="Companias"/>
            <MainContainerCards  contentType="company" data={companies} page={page} />
            <PaginationInf data={companies} />
        </>
    );
}
