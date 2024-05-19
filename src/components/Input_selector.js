'use client'
import React from 'react';
import Select from 'react-select';
import { useRouter } from "next/navigation";

export default function Input_Selector({ data, selection }) {
    const router = useRouter();
    const options = data.map(item => ({ value: item.dni_infractor, label: item.dni_infractor }));

    const handleChange = (selectedOption) => {
        router.replace(`/reportes/${selectedOption.value}`)
    };

    return (
        <div className="bg-white rounded-lg group">
            <div className="relative bg-inherit">
                <Select
                    defaultValue={options.find(option => option.value === selection)}
                    options={options}
                    onChange={handleChange}
                    className="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                />
                <label className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">DNI</label>
            </div>
        </div>
    );
}