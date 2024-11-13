"use client"
import React from 'react'
import { Input, Label } from '../../atoms'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';


interface IProps<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
}
export const FormField = <T extends FieldValues>({ label, type, name, control, error, id, placeholder }: IProps<T>) => {
    return (
        <div className='w-full flex flex-col mb-4'>
            <Label htmlFor={id || label.toLocaleLowerCase()} className={` text-sm font-medium`}>{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input id={id || label.toLowerCase()} type={type} error={error?.message} placeholder={placeholder || `Ingrese su ${label.toLowerCase()}`}
                        {...field}
                    />
                )
                }
            />
        </div>
    )
}
