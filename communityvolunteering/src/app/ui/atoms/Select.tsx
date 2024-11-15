import { FieldValues } from "react-hook-form";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string, label: string }[];
  placeholder?: string;
  error?: string;
  name?: string;
}

export const Select = ({
  options,
  placeholder = "Selecciona una opcion",
  error,
  name,
  ...props
}: IProps) => {

  return (
    <div>

      <select name={name} 
        {...props}>
          <option>{placeholder}</option>
        {options.map(({value, label })=> {
          return <option key={value} value={value}>{label}</option>
        })}
      </select>
    </div>
  )
}
