"use client"
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useRouter } from 'next/navigation';
import { MainComponent } from '../organisms/auth/projects';
import { Modal } from '../atoms/Modal';
import UpdateForm from '../organisms/auth/UpdateProject';

interface IProps {
  totalProjects: number;
  activeProjects: number;
  organizers: number;
  data: IProjectsResponse;
}
const Menu = ({ data, totalProjects, activeProjects, organizers }: IProps) => {
  const router = useRouter();
  const [ModalOpenEdit, setModalOpenEdit] = useState(false);
  const [SelectIdEdit, setSelectIdEdit] = useState<number>(1);

  const toggleModalEdit = () => {
    setModalOpenEdit(!ModalOpenEdit);
  }

  const handleEdit = (Id: number) => {
    setSelectIdEdit(Id);
    toggleModalEdit();
  }

  const handleDelete = async (Id: number) => {
    try {
      const response = await fetch(`/api/projetcs/deleteproject/${Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el proyecto");
      }

      alert("Proyecto eliminado exitosamente");
      router.refresh();
      return await response.json();

    } catch (error) {
      console.error("Error en el DELETE:", error);
      throw error;
    } finally {
    }
  };
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-[#f0f1f4]">
          <MainComponent data={data} onEdit={handleEdit} onDelete={(Id) => handleDelete(Id)} />
          <Modal isOpen={ModalOpenEdit} onClose={toggleModalEdit} title="Editar Servicio">
            <UpdateForm onClose={toggleModalEdit} Id={SelectIdEdit} />
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default Menu;