import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormField } from "../../molecules/Common/FormField";
import { Button } from "../../atoms";

interface Iprops {
    onClose: () => void;
}

// Actualización del esquema de validación para el proyecto
const registerSchema = yup.object().shape({
    title: yup
        .string()
        .min(1, 'El título debe tener al menos 1 caracter')
        .required('Título del proyecto requerido'),
    description: yup
        .string()
        .min(1, 'La descripción debe tener al menos 1 caracter')
        .required('Descripción requerida'),
    startDate: yup
        .string()
        .required('Fecha de inicio requerida')
        .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            'La fecha debe tener el formato YYYY-MM-DD'
        ),
    endDate: yup
        .string()
        .required('Fecha de finalización requerida')
        .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            'La fecha debe tener el formato YYYY-MM-DD'
        ),
});

const RegisterForm = ({ onClose }: Iprops) => {
    const router = useRouter();
    const {
        control,
        handleSubmit: onSubmit,
        setError,
        formState: { errors },
    } = useForm<IRegisterProjectsRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerSchema),
    });

    const handleRegister = async (data: IRegisterProjectsRequest) => {
        try {
            const response = await fetch("/api/projetcs/createproject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error al registrar el proyecto");
            }

            alert('Proyecto registrado exitosamente');
            router.refresh();
            onClose();
            return await response.json();
            
        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };

    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={onSubmit(handleRegister)}>
            <FormField<IRegisterProjectsRequest>
                control={control}
                type="text"
                name="title"
                label="Título del Proyecto"
                error={errors.title}
                placeholder="Ingrese el título del proyecto"
            />

            <FormField<IRegisterProjectsRequest>
                control={control}
                type="text"
                name="description"
                label="Descripción"
                error={errors.description}
                placeholder="Ingrese la descripción"
            />

            <FormField<IRegisterProjectsRequest>
                control={control}
                type="date"
                name="startDate"
                label="Fecha de Inicio"
                error={errors.startDate}
            />

            <FormField<IRegisterProjectsRequest>
                control={control}
                type="date"
                name="endDate"
                label="Fecha de Finalización"
                error={errors.endDate}
            />

            <Button className="w-full px-4 py-2 text-white font-medium rounded-lg bg-gray-800 hover:bg-gray-900" type="submit">Registrar</Button>
        </form>
    );
};

export default RegisterForm;
