import React from 'react'
import { THead } from '../../atoms/THead'
import { TRow } from '../../atoms/TRow'
import { Th } from '../../atoms/Th'
import { TBody } from '../../atoms/TBody'
import { TCell } from '../../atoms/TCell'

interface ITableProps {
  headers: string[];
  data: any[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export const Table = ({ headers, data, onEdit, onDelete }: ITableProps) => {
  return (
    <table className='w-full text-sm text-left'>
      <THead>
        <TRow>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
          {(onEdit || onDelete) && <Th>Acciones</Th>}
        </TRow>
      </THead>
      <TBody>
        {data.map((row, rowIndex) => {
          const id = row[headers[0]];
          return (
            <TRow key={rowIndex}>
              {headers.map((header, cellIndex) => (
                <TCell key={cellIndex}>
                  {row[header]}
                </TCell>
              ))}
              {(onEdit || onDelete) && (
                <TCell>
                  {onEdit && <button onClick={() => onEdit(id)}>Editar</button>}
                  {onDelete && <button onClick={() => onDelete(id)}>Eliminar</button>}
                </TCell>
              )}
            </TRow>
          );
        })}
      </TBody>
    </table>
  )
}

export default Table;