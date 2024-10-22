import React from "react";

const HeaderTable: React.FC = () => {
    return (
        <thead>
            <tr className="text-center text-sm font-semibold text-gray-700">
                <th className="table-header">Nombre</th>
                <th className="table-header">Fecha</th>
                <th className="table-header">Descripción</th>
                <th className="table-header">Estado</th>
                <th className="table-header">Acciones</th>
            </tr>
        </thead>
    );
};

export default HeaderTable;
