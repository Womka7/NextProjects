import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { FormField } from "../../molecules/Common/FormField";
import { Button } from "../../atoms";

interface Iprops {
    onClose: () => void;
    Id: number;
}

// Definimos el esquema de validación para los proyectos
const editProjectSchema = yup.object().shape({
    title: yup.string().min(1, 'El título debe tener al menos 1 carácter').required('Título del proyecto requerido'),
    description: yup.string().min(1, 'La descripción debe tener al menos 1 carácter').required('Descripción requerida'),
    startDate: yup.string().required('Fecha de inicio requerida'),
    endDate: yup.string().required('Fecha de finalización requerida')
});



const UpdateForm = ({ onClose, Id }: Iprops) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { control, handleSubmit: onSubmit, setValue, formState: { errors } } = useForm<IEditProjectsRequest>({
        mode: "onChange",
        resolver: yupResolver(editProjectSchema),
    });

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/projetcs/getIdproject/${Id}`);
                const data = await response.json();
                const project = data.data;
                setValue("title", project.title);
                setValue("description", project.description);
                setValue("startDate", project.startDate);
                setValue("endDate", project.endDate);
            } catch (error) {
                console.error("Error fetching project data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjectData();
    }, [Id, setValue]);

    const handleEdit = async (data: IEditProjectsRequest) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/projetcs/updateproject/${Id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Error al actualizar el proyecto");
            }

            alert("Proyecto actualizado exitosamente");
            router.refresh();
            onClose();
        } catch (error) {
            console.error("Error en el PUT:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form  className="w-full max-w-sm mx-auto p-4 space-y-4"onSubmit={onSubmit(handleEdit)}>
           
                <>
                    <FormField<IEditProjectsRequest>
                        control={control}
                        type="text"
                        name="title"
                        label="Título del Proyecto"
                        error={errors.title}
                        placeholder="Ingrese el título del proyecto"
                    />

                    <FormField<IEditProjectsRequest>
                        control={control}
                        type="text"
                        name="description"
                        label="Descripción"
                        error={errors.description}
                        placeholder="Ingrese la descripción del proyecto"
                    />

                    <FormField<IEditProjectsRequest>
                        control={control}
                        type="date"
                        name="startDate"
                        label="Fecha de Inicio"
                        error={errors.startDate}
                        placeholder="Seleccione la fecha de inicio"
                    />

                    <FormField<IEditProjectsRequest>
                        control={control}
                        type="date"
                        name="endDate"
                        label="Fecha de Finalización"
                        error={errors.endDate}
                        placeholder="Seleccione la fecha de finalización"
                    />

                    <Button className="w-full px-4 py-2 text-white font-medium rounded-lg bg-gray-800 hover:bg-gray-900" type="submit" >Actualizar Proyecto</Button>
                </>
            
        </form>
    );
};

export default UpdateForm;
