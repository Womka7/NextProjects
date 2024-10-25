import ContainerCard from "@/components/atoms/ContainerCard/ContainerCard";
import Header from "@/components/organisms/Header/Header";

type PanelType = 'Vacantes' | 'Compañías';
interface IProps{
    title: string;
    // subtitle: string;
    info: PanelType;
}
export default function Jobs({ info= "Vacantes", title="Portal vacantes"}:IProps) {

    return (
        <>
        <Header title={title} info={info}></Header>

        <ContainerCard/>
        </>
    );
}
