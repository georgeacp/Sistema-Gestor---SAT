'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Delete_button({ deleteCodigo, codigo }) {
    const router = useRouter();
    function reload() {
        router.refresh();
    }
    return (
        <button
            className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
            onClick={() => {
                deleteCodigo(codigo)
                reload();
            }}
        >
            <span>
                <ion-icon name="trash"></ion-icon>
            </span>
            <span className="hidden md:inline-block">Delete</span>
        </button>
    )
}
