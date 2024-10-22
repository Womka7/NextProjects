import { ITask } from "@/types/ITask";
import React from "react";

interface TableRowProps {
    task: ITask;
    setDataToEdit: (data: ITask) => void;
    deleteData: (id: number) => void;
}


const RowTable: React.FC<TableRowProps> = ({ task, setDataToEdit, deleteData }) => {
    return (
        <tr>
            <td>{task.name}</td>
            <td>{task.date}</td>
            <td>{task.description}</td>
            <td>{task.completed ? "✅" : "❌"}</td>
            <td>
                <button onClick={() => setDataToEdit(task)} className="edit-btn">Editar</button>
                <button onClick={() => deleteData(task.id)} className="delete-btn">Eliminar</button>
            </td>
        </tr>
    );
};

export default RowTable;
