import Header from "@/components/organisms/Header/Header";
import MainContainerCards from "@/components/organisms/MainContainerCards/MainContainerCards";
interface IProps{
    subtitle:string;
    panelDetail :'Vacantes' | 'Companias';
}
export default function Jobs({ subtitle= "Vacantes",panelDetail= "Vacantes"}:IProps) {
    return (
        <>
        <Header subtitle={subtitle} panelDetail={panelDetail}/>
        <MainContainerCards/>
        <MainContainerCards/>
        <MainContainerCards/>
        <MainContainerCards/>
        <MainContainerCards/>
        </>
    );
}
