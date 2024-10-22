"use client"
import React, { FormEvent, MouseEvent, useState, useEffect } from 'react';
import './Form-style.css'; // Importamos el archivo CSS
import { ITask } from '@/types/ITask';

interface CreateFormProps {
    createData: (task: ITask) => void;
    updateData: (task: ITask) => void;
    dataToEdit: ITask | null;
    setDataToEdit: (data: ITask | null) => void;
}

const initialForm: ITask = {
    id: 0,
    name: "",
    date: new Date().toLocaleDateString('es-ES'),
    description: "",
    completed: false
};

const CreateForm: React.FC<CreateFormProps> = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState<ITask>(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.id) {
            form.id = Date.now();
            createData(form);
        } else {
            updateData(form);
        }
        handleReset(e);
    };

    const handleReset = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div className="form-container">
            <h2>{dataToEdit ? "Modificar Tarea" : "Agregar Tarea"}</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" placeholder="Nombre de tarea" onChange={handleChange} value={form.name} required className="input-field" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <input type="text" name="description" placeholder="Descripción de tarea" onChange={handleChange} value={form.description} required className="input-field" />
                </div>
                <div className="form-group checkbox-group">
                    <label htmlFor="completed">Completada</label>
                    <input type="checkbox" name="completed" checked={form.completed} onChange={handleChange} className="checkbox" />
                </div>
                <div className="button-group">
                    <button type="submit" className="btn submit-btn">Enviar </button>
                    <button type="button" onClick={handleReset} className="btn reset-btn"> limpiar </button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;
