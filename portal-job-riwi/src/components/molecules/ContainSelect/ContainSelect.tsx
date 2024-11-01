import { Select } from '@/components/atoms/Select/Select'
import './containSelectStyle.scss'

export interface Option {
    value: string | number,
    label: string
  }
  interface IProps {
    label: string
    options: Option[]
    name: string
    required?: boolean
  }
  
  export const ContainerSelect=({ label, name, required, options = []}: IProps)=> {
    return (
      <div className={'containerSelect'}>
        <label>{label}</label>
        <Select options={options}  name={name} required={required}/>
      </div>
    )
  }