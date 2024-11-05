import "./selectStyle.scss"

interface IProps {
  className?: string
  name: string
  required?: boolean
  options: {
    value: string | number,
    label: string
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select=({ options = [], name, required , className, value, onChange}:IProps)=> {
  const selectfocus = `select ${className || ''}`.trim();
  
  return (
    <select name={name} required={required} id="" className={selectfocus} value={value} onChange={onChange}>
      {options.map(option => {
        return  <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}
