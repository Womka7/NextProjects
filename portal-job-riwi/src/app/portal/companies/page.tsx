
import Header from "@/components/organisms/Header/Header";
import MainContainerCards from "@/components/organisms/MainContainerCards/MainContainerCards";
interface IProps{
    subtitle: string;
    panelDetail: 'Vacantes' | 'Companias';
}

export default function Companies({ subtitle= "Compañías", panelDetail= "Companias"}:IProps) {
    return (
        <>
        <Header subtitle={subtitle} panelDetail={panelDetail}></Header>

        <MainContainerCards/>
        </>
    );
}


