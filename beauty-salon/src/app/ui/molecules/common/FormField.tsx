"use client"

import { Control, Controller, FieldError, FieldErrors, FieldValue, FieldValues, Path } from 'react-hook-form';
import { Input } from '../../atoms';

interface IPrpopsFormField<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
}
export const FormField = <T extends FieldValues>({
    label,
    type,
    name,
    control,
    error,
    id,
    placeholder
}: IPrpopsFormField<T>) => {
    return (
        <div className='w-full flex flex-col mb-4'>
            <label htmlFor={id || label.toLowerCase()} className={`text-sm font-medium`}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                    id={id || label.toLowerCase()}
                    type={type}
                    error={error?.message}
                    placeholder={placeholder || `Ingrese su ${label.toLowerCase()}`}
                    {...field}
                    />
                )
                }
            />

        </div>
    )
}
