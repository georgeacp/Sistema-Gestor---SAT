'use client'

import { useState } from "react";

export const revalidate = 0

export default function Input_Numero({ placeholder, type, id, className, text }) {
    const [value, setValue] = useState(text);

    const handleChange = (event) => {
        const inputValue = event.target.value.replace(/\D/g, '');
        setValue(inputValue);
    };

    return (
        <div className={`bg-white rounded-lg group ${className}`}>
            <div className="relative bg-inherit">
                <input type={type} id={id} value={value} className="peer bg-transparent h-10 w-full rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-500 group-focus:ring-sky-600 focus:outline-none group-focus:border-rose-600 text-sm" placeholder={placeholder} onChange={(event) => { handleChange(event) }} />
                <label for={id} className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 placeholder-transparent peer-focus:text-sm transition-all">{placeholder}</label>
            </div>
        </div >
    )
}