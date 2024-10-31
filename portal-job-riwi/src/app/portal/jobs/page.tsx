import { Header } from "@/components/organisms/Header/Header";
import { MainContainerCards } from "@/components/organisms/MainContainerCards/MainContainerCards";
import { ServiceApi } from "@/services/portal.service";
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
    // const apiService = new ServiceApi();
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;

    const vacancies= await apiService.find(`vacants?page=${page}&size=${size}`);
    return (
        <>
            <Header subtitle="Vacantes" panelDetail="Vacantes" />
            <MainContainerCards  contentType="vacant" data={vacancies} page={page} />
        </>
    );
}
