import Header from "@/components/organisms/Header/Header";
import MainContainerCards from "@/components/organisms/MainContainerCards/MainContainerCards";
interface IProps{
    subtitle:string;
    panelDetail :'Vacantes' | 'Companias';
}
export default function Jobs({ subtitle,panelDetail= "Vacantes"}:IProps) {
    return (
        <>
        <Header subtitle="Vacantes" panelDetail={panelDetail}/>
        <MainContainerCards/>
        </>
    );
}
