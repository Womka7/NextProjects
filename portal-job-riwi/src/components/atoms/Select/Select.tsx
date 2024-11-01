import "./selectStyle.scss"

interface IProps {
  name: string
  required?: boolean
  options: {
    value: string | number,
    label: string
  }[]
}

export const Select=({ options = [], name, required }:IProps)=> {
  return (
    <select name={name} required={required} id="" className='select'>
      {options.map(option => {
        return  <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}
