'use client'

import Add_Button from "@/components/Add_Button";
import Input from "@/components/Input";
import Input_Numero from "@/components/Input_Numero";
import { postEncargado } from "@/data/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const revalidate = 0

export default function page({ data_encargado }) {
  const router = useRouter();

  async function onSubmit() {
    const codigo_submit = document.getElementById('codigo').value
    const nombre_submit = document.getElementById('nombre').value
    const apellido_submit = document.getElementById('apellido').value
    const dni_submit = document.getElementById('dni').value
    const codDepartamento_submit = document.getElementById('codDep').value
    const correo_submit = document.getElementById('correo').value
    const cargo_submit = document.getElementById('cargo').value
    const direccion_submit = document.getElementById('direccion').value
    const telefono_submit = document.getElementById('telefono').value

    // Validate if inputs are empty
    if (
      codigo_submit === '' ||
      nombre_submit === '' ||
      apellido_submit === '' ||
      dni_submit === '' ||
      codDepartamento_submit === '' ||
      correo_submit === '' ||
      cargo_submit === '' ||
      direccion_submit === '' ||
      telefono_submit === ''
    ) {
      toast.error("Por favor, rellene todos los campos");
      return; // Exit the function if inputs are empty
    }

    console.log(codigo_submit, nombre_submit, apellido_submit, correo_submit, cargo_submit, direccion_submit, telefono_submit)
    const response = postEncargado(codigo_submit, dni_submit, nombre_submit, apellido_submit, direccion_submit, telefono_submit, correo_submit, cargo_submit, codDepartamento_submit)

    cambiarPestana(response)
  }

  async function cambiarPestana(response) {
    if (response) {
      toast.success('Agregado con exito!')
      router.push('/encargado');
      router.refresh();
    } else {
      toast.error("Error al agregar")
    }

  }

  return (
    <section className="bg-white p-4 rounded-lg">
      <h2 className="">Agregar Encargado</h2>
      <div className="grid grid-cols-6 gap-x-4 gap-y-8">
        <Input id="codigo" type="tyext" placeholder="Codigo" className="col-span-2" />
        <Input id="nombre" type="text" placeholder="Nombres" className="col-span-2" />
        <Input id="apellido" type="text" placeholder="Apellidos" className="col-span-2" />
        <div className="bg-white rounded-lg group col-span-2" >
          <div class="relative bg-inherit">
            <select class="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" >
              {
                data_encargado.map((item) => (
                  <option id="codDep" value={item.codigodep} key={item.codigodep}>{item.codigodep}</option>
                ))
              }
            </select><label className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Codigo Distrito</label>
          </div>
        </div>
        <Input_Numero id="dni" type="text" placeholder="Dni" className="col-span-3" />
        <Input id="correo" type="email" placeholder="Correo" className="col-span-3" />
        <div className="bg-white rounded-lg group col-span-2" >
          <div className="relative bg-inherit">
            <select className="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" >
              <option id="cargo" value="Administrador" key="Administrador">Administrador</option>
              <option id="cargo" value="Encargado" key="Encargado">Encargado</option>
            </select><label className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Cargo</label>
          </div>
        </div>
        <Input id="direccion" type="text" placeholder="Direccion" className="col-span-3" />
        <Input_Numero id="telefono" type="text" placeholder="Telefono" className="col-span-3" />
        <div className="w-full col-span-6 flex flex-row justify-between">
          <button onClick={() => router.push("/encargado")} className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
            <span className="mr-1 font-bold text-lg">Back</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
              </path>
            </svg>
          </button>
          <Add_Button postValue={onSubmit} href="/encargado" />
        </div>
      </div>
    </section >
  )
}
