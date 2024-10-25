import Header from "@/components/organisms/Header/Header";

interface IProps{
    title: string;
    // subtitle: string;
    info: string;
}
export default function Jobs({ title, info}:IProps) {
    return (
        <Header title={title} info={info}></Header>
    );
}
