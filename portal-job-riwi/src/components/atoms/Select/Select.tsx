import "./selectStyle.scss"

interface IProps {
  className?: string
  name: string
  required?: boolean
  options: {
    value: string | number,
    label: string
  }[]
}

export const Select=({ options = [], name, required , className}:IProps)=> {
  const selectfocus = `select ${className || ''}`.trim();
  
  return (
    <select name={name} required={required} id="" className={selectfocus}>
      {options.map(option => {
        return  <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}
