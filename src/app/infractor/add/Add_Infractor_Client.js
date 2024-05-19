'use client'
import Add_Button from "@/components/Add_Button";
import Input from "@/components/Input";
import Input_Numero from "@/components/Input_Numero";
import Back_Button from "@/components/back_button";
import { postInfractor } from "@/data/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const revalidate = 0

export default function Add_Infractor_client({ data_infractor }) {
    const router = useRouter();

    async function onSubmit() {
        const dni_submit = document.getElementById("dni").value;
        const nombre_submit = document.getElementById("nombre").value;
        const apellido_submit = document.getElementById("apellido").value;
        const codDistrito_submit = document.getElementById('codDist').value;
        const correo_submit = document.getElementById("correo").value;
        const tipo_submit = document.getElementById("tipo").value;
        const direccion_submit = document.getElementById("direccion").value;
        const telefono_submit = document.getElementById("telefono").value;
        console.log(dni_submit, nombre_submit, apellido_submit, codDistrito_submit, direccion_submit, telefono_submit, correo_submit, tipo_submit)
        const response = postInfractor(dni_submit, nombre_submit, apellido_submit, direccion_submit, telefono_submit, correo_submit, tipo_submit, codDistrito_submit);

        cambiarPestana(response)

    }

    async function cambiarPestana(response) {
        if (response) {
            toast.success('Agregado con exito!')
            router.push('/infractor');
            router.refresh();
        } else {
            toast.error("This didn't work.")
        }
    }

    return (
        <section className="bg-white p-4 rounded-lg">
            <h2 className="">Agregar Infractor</h2>
            <div className="grid grid-cols-6 gap-x-4 gap-y-8">
                <Input_Numero type="text" placeholder="Dni" className="col-span-2" id='dni' />
                <Input type="text" placeholder="Nombres" className="col-span-2" id='nombre' />
                <Input type="text" placeholder="Apellidos" className="col-span-2" id='apellido' />
                <div className="bg-white rounded-lg group col-span-2" >
                    <div class="relative bg-inherit">
                        <select class="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" >
                            {
                                data_infractor.map((item) => (
                                    <option id="codDist" value={item.codigodistrito} key={item.codigodistrito}>{item.codigodistrito}</option>
                                ))
                            }
                        </select><label for="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Codigo Dsitrito</label>
                    </div>
                </div>
                <Input type="text" placeholder="Correo" className="col-span-3" id='correo' />
                <div className="bg-white rounded-lg group col-span-2" >
                    <div class="relative bg-inherit">
                        <select class="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" >
                            {
                                data_infractor.map((item) => (
                                    <option id="tipo" value={item.tipoinfractor} key={item.tipoinfractor}>{item.tipoinfractor}</option>
                                ))
                            }
                        </select>
                        <label for="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Codigo Dsitrito</label>
                    </div>
                </div>
                <Input type="text" placeholder="Direccion" className="col-span-3" id="direccion" />
                <Input_Numero type="text" placeholder="Telefono" className="col-span-3" id="telefono" />
                <div className="w-full col-span-6 flex flex-row justify-between">
                    <button onClick={() => router.push("/infractor")} className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
                        <span className="mr-1 font-bold text-lg">Back</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                            </path>
                        </svg>
                    </button>
                    <Add_Button postValue={onSubmit} href="/infractor" />
                </div>
            </div>
        </section>
    )
}
