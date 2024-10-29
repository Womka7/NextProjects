import ContainerCard from "@/components/atoms/ContainerCard/ContainerCard";
import Header from "@/components/organisms/Header/Header";
interface IProps{
    subtitle:string;
    panelDetail :'Vacantes' | 'Companias';
}
export default function Jobs({ subtitle,panelDetail= "Vacantes"}:IProps) {
    return (
        <>
        <Header subtitle="Vacantes" panelDetail={panelDetail}/>
        <ContainerCard/>
        </>
    );
}
