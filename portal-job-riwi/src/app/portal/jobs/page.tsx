import { PaginationInf } from "@/components/molecules/Pagination/PaginationInf";
import { Header } from "@/components/organisms/Header/Header";
import { MainContainerCards } from "@/components/organisms/MainContainerCards/MainContainerCards";
import { Service } from "@/services/portal.service";
 
const useServices = new Service()
interface IJobsProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    }
}
export const generateMetadata = async ({ searchParams }: IJobsProps) => {
    const page = searchParams.page ?? 1;
    return {
        title: `Vacantes - Página ${page}`,
        description: 'Panel de vacantes'
    }
}
export default async function Jobs({ searchParams }: IJobsProps) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;

    const vacancies= await useServices.findVacant(page,size);
    return (
        <>
            <Header subtitle="Vacantes" panelDetail="Vacantes"  type="Vacantes"/>
            <MainContainerCards  contentType="vacant" data={vacancies} page={page} />
            <PaginationInf data={vacancies}/>
        </>
    );
}
