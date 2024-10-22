"use client";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";
import './Table-style.css';
import { ITask } from "@/types/ITask";

interface TableData {
    data : ITask[],
    setDataToEdit: (task: ITask | null) => void;
    deleteData: (id: number) => void;
}

const Table: React.FC<TableData> = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="table-container">
            <h1 className="table-title">Tareas</h1>
            <table className="task-table">
                <HeaderTable />
                <tbody>
                    {data.length > 0 ? (
                        data.map((task) => (
                            <RowTable
                                key={task.id}
                                task={task}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="no-data">
                                Sin datos
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
