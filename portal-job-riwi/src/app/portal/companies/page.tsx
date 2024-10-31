
import { Header } from "@/components/organisms/Header/Header";
import { MainContainerCards } from "@/components/organisms/MainContainerCards/MainContainerCards";
import { ServiceApi } from "@/services/portal.service";
interface IProps{
    searchParams: {
        page?: string;
        size?: string;
        name?: string;
    }
}
export const generateMetadata = async ({ searchParams }: IProps) => {
    const page = searchParams.page ?? '1';
    return {
        title: `Compañías - Página ${page}`,
        description: 'Panel de compañías'
    }
}
export default async function Companies({searchParams}:IProps) {
    const apiService = new ServiceApi();
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;

    const companies = await apiService.find(`company?page=${page}&size=${size}`);
    return (
        <>
        <Header subtitle='Compañías' panelDetail='Companias'></Header>
        <MainContainerCards contentType="company" data={companies} page={page} />
        </>
    );
}


