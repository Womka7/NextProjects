
import ContainerCard from "@/components/atoms/ContainerCard/ContainerCard";
import Header from "@/components/organisms/Header/Header";

type PanelType = 'Vacantes' | 'Compañias';
interface IProps{
    title: string;
    // subtitle: string;
    info: PanelType;
}

export default function Companies({ info= "Compañias", title="Portal compañias"}:IProps) {
    return (
        <>
        <Header title={title} info={info}></Header>

        <ContainerCard/>
        </>
    );
}


