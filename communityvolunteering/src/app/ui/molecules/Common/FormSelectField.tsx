import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { Input, Label } from "../../atoms";
import { InputFile } from "../../atoms/InputFile";
import { Select } from "../../atoms/Select";

interface IProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    control: Control<T>;
    id?: string;
    placeholder: string;
    options: { value: string, label: string }[];
}

export const FormSelectField = <T extends FieldValues>({ label, control, name, id, options, placeholder }: IProps<T>) => {
    return (
        <div className="w-full flex flex-col mb-4">
            <Label htmlFor={id || label.toLowerCase()} className="text-sm font-medium">{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select id={id || label.toLowerCase()}{...field}  options={options} placeholder={placeholder} {...field} />
                )}
            />   
        </div>
    )
}