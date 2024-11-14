import { Input, Label } from "../../atoms";
import { InputFile } from "../../atoms/InputFile";

interface IProps{
    label: string;
    type: string;
    id?: string;
}

export const FromInputFile =({label,type,id}:IProps)=>{
    return(
        <div className="w-full flex flex-col mb-4">
            <Label htmlFor={id || label.toLowerCase()} className="text-sm font-medium">{label}</Label>
            <InputFile id={id|| label.toLowerCase()} type={type}/>
        </div>
    )
}