"use client"
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { Button, H3 } from "../atoms";
import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { SlArrowDown } from "react-icons/sl";
import { Modal } from "../atoms/Modal";
import RegisterForm from "../organisms/auth/CreateProject";
import { useState } from "react";

export const Header = () => {
  const { data } = useSession();
  const session = data as CustomSession;

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/projetcs/downloadReport`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Error al descargar");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "reporte_proyectos.xlsx");
      document.body.appendChild(link);
      link.click();

      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      window.URL.revokeObjectURL(url);

      alert("Descarga completa");

    } catch (error) {
      console.error("Error en la descarga:", error);
      throw error;
    }
  };

  const [ModalOpenRegister, setModalOpenRegister] = useState(false);
  const toggleModalRegister = () => {
    setModalOpenRegister(!ModalOpenRegister);
  }

  const handleAdd = () => {
    toggleModalRegister();
  }
  return (
    <header className="bg-white  px-2 py-4 gap-3 flex justify-between shadow-sm">
      <H3 className="text-2xl font-semibold  text-[#2F2B3D] ">Dashboard de Proyectos</H3>
      <div className="flex gap-4">
        <Button className=" bg-[#090101] text-sm flex gap-2 text-white items-center p-2 rounded-md" onClick={handleDownload}> <PiMicrosoftExcelLogo />Descargar Reporte</Button>
        <Button className="bg-[#090101] text-sm  flex gap-2 text-white items-center p-2 rounded-md" onClick={handleAdd}><IoAddCircleOutline />Nuevo Proyecto</Button>
        <Button className="w-[250px] bg-white text-black justify-between border-none px-2 flex items-center gap-1">{session?.user?.photo ? (
          <Image
            src={session.user.photo}
            alt="Profile Image"
            width={25}
            height={25}
            className="rounded-full"
          />
        ) : (
          <div className="rounded-full w-[25px] h-[25px] bg-[#dbdce0]" />
        )}
          <p className="w-auto mr-1.5">{session?.user?.email || 'Name'}</p>
          <SlArrowDown />
        </Button>
        <Modal isOpen={ModalOpenRegister} onClose={toggleModalRegister} title="Agregar Proyecto"><RegisterForm onClose={toggleModalRegister}></RegisterForm></Modal>
      </div>
    </header>
  );
};