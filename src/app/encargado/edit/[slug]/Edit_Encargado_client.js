'use client'

import Edit_Button from "@/components/Edit_Button";
import Input from "@/components/Input"
import Input_disable from "@/components/Input_disable";
import Back_Button from "@/components/back_button"
import { updateEncargado } from "@/data/supabase";
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const revalidate = 0

export default function page({ data }) {

    const router = useRouter();

    async function getValues() {
        const codigo_input = await document.getElementById('codigo').value
        const nombre_input = await document.getElementById('nombre').value
        const apellido_input = await document.getElementById('apellido').value
        const dni_input = await document.getElementById('dni').value
        const codDepartamento_input = await document.getElementById('codDep').value
        const correo_input = await document.getElementById('correo').value
        const cargo_input = await document.getElementById('cargo').value
        const direccion_input = await document.getElementById('direccion').value
        const telefono_input = await document.getElementById('telefono').value
        console.log(codigo_input, nombre_input, apellido_input, correo_input, cargo_input, direccion_input, telefono_input)
        const response = await updateEncargado(codigo_input, dni_input, nombre_input, apellido_input, direccion_input, telefono_input, correo_input, cargo_input, codDepartamento_input)

        cambiarPestana(response)
    }

    async function cambiarPestana(response) {
        if (response) {
            toast.success('Edita con exito!')
            router.push('/encargado');
            router.refresh();
        } else {
            toast.error("Hubo un problema.")
        }
    }

    console.log(data[0])
    return (
        <section className="bg-white p-4 rounded-lg">
            <h2 className="">Editar Encargado</h2>
            <div className="grid grid-cols-6 gap-x-4 gap-y-8 ">
                <Input_disable id="codigo" type="text" placeholder="Codigo" className="col-span-2" value={data[0].codigoencargado} />
                <Input id="nombre" type="text" placeholder="Nombres" className="col-span-2" text={data[0].nombreencargado} />
                <Input id="apellido" type="text" placeholder="Apellidos" className="col-span-2" text={data[0].apellidoencargado} />
                <Input id="codDep" type="text" placeholder="CodDep" className="col-span-3" text={data[0].codigodep} />
                <Input id="dni" type="text" placeholder="Dni" className="col-span-3" text={data[0].n_dniencargado} />
                <Input id="correo" type="text" placeholder="Correo" className="col-span-3" text={data[0].correo} />
                <Input id="cargo" type="text" placeholder="Cargo" className="col-span-3" text={data[0].cargo} />
                <Input id="direccion" type="text" placeholder="Direccion" className="col-span-3" text={data[0].direccion} />
                <Input id="telefono" type="text" placeholder="Telefono" className="col-span-3" text={data[0].telefono} />
                <div className="w-full col-span-6 flex flex-row justify-between">
                    <button onClick={() => router.push("/encargado")} className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
                        <span className="mr-1 font-bold text-lg">Back</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                            </path>
                        </svg>
                    </button>
                    <Edit_Button getValue={getValues} href="/encargado" />
                </div>
            </div>
        </section>
    )
}
