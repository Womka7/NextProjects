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
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  export const ContainerSelect=({ label, name, required, options = [], value,onChange}: IProps)=> {
    return (
      <div className={'containerSelect'}>
        <label>{label}</label>
        <Select options={options} value={value} name={name} required={required} className='select-vacants' onChange={onChange}/>
      </div>
    )
  }