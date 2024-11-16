import React from 'react';
import { Button } from '../atoms';
import { Th } from '../atoms/Th';
import { Td } from '../atoms/Td';

interface ITableProps {
  tbody: EventData[];
  onEdit?: (rowId: number) => void;
  onDelete?: (rowId: number) => void;
}

export default function TableComponent({ tbody, onEdit, onDelete }: ITableProps) {
  return (
    <table className="w-full border-collapse bg-white">
      <thead>
        <tr>
          <Th>Titulo</Th>
          <Th>Descripción</Th>
          <Th>Fecha de Inicio</Th>
          <Th>Fecha de Fin</Th>
          <Th>Estado</Th>
          <Th>Organizador</Th>
          <Th>Acciones</Th>
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            <Td className='font-bold'>{row.title}</Td>
            <Td>{row.description}</Td>
            <Td>{row.startDate}</Td>
            <Td>{row.endDate}</Td>
            <Td className="border-b border-gray-100 p-3 text-sm">
              <span
                className={`px-3 py-1 rounded-full text-sm
                  ${row.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                {row.isActive ? 'Activo' : 'Inactivo'}
              </span>
            </Td>
            <Td>{row.organizer.name}</Td>
            <Td className="border-b border-gray-100 p-3 text-sm space-x-2">
              <Button
                onClick={() => onEdit && onEdit(row.id)}
                className="px-3 py-1 text-gray-700 border border-gray-300 rounded hover:text-gray-900 font-medium"
              >
                Editar
              </Button>
              <Button
                onClick={() => onDelete && onDelete(row.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}