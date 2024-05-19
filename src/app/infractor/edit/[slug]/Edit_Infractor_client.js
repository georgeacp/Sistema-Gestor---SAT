'use client'
import Edit_Button from "@/components/Edit_Button";
import Input from "@/components/Input";
import Input_disable from "@/components/Input_disable";
import Back_Button from "@/components/back_button";
import { updateInfractor } from "@/data/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const revalidate = 0

export default function Edit_Infractor_client({ data }) {
  const router = useRouter();

  async function getValues() {
    const dni_input = await document.getElementById("dni").value;
    const nombre_input = await document.getElementById("nombre").value;
    const apellido_input = await document.getElementById("apellido").value;
    const codDistrito_input = await document.getElementById('cosDist').value
    const correo_input = await document.getElementById("correo").value;
    const tipo_input = await document.getElementById("tipo").value;
    const direccion_input = await document.getElementById("direccion").value;
    const telefono_input = await document.getElementById("telefono").value;
    const response = await updateInfractor(dni_input, nombre_input, apellido_input, direccion_input, telefono_input, correo_input, tipo_input, codDistrito_input);
    console.log(dni_input, nombre_input, apellido_input, direccion_input, telefono_input, correo_input, tipo_input, codDistrito_input)

    cambiarPestana(response)

  }

  async function cambiarPestana(response) {
    if (response) {
      toast.success('Successfully toasted!')
      router.push('/infractor');
      router.refresh();
    } else {
      toast.error("This didn't work.")
    }
  }

  return (
    <section className="bg-white p-4 rounded-lg">
      <h3 className="">Editar Infractor</h3>
      <div className="grid grid-cols-6 gap-x-4 gap-y-8">
        <Input_disable type="text" placeholder="Dni" className="col-span-2" value={data[0].dni_infractor} id="dni" />
        <Input type="text" placeholder="Nombres" className="col-span-2" text={data[0].nombreinfractor} id="nombre" />
        <Input type="text" placeholder="Apellidos" className="col-span-2" text={data[0].apellidosinfractor} id="apellido" />
        <Input type="text" placeholder="Codigo Dsitrito" className="col-span-3" text={data[0].codigodistrito} id="cosDist" />
        <Input type="text" placeholder="Correo" className="col-span-3" text={data[0].correo_infractor} id="correo" />
        <Input type="text" placeholder="Tipo" className="col-span-3" text={data[0].tipoinfractor} id="tipo" />
        <Input type="text" placeholder="Direccion" className="col-span-3" text={data[0].direccioninfractor} id="direccion" />
        <Input type="text" placeholder="Telefono" className="col-span-3" text={data[0].telefono_infractor} id="telefono" />
        <div className="w-full col-span-6 flex flex-row justify-between">
          <button onClick={() => router.push("/infractor")} className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
            <span className="mr-1 font-bold text-lg">Back</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
              </path>
            </svg>
          </button>
          <Edit_Button getValue={getValues} href="/infractor" />
        </div>
      </div>
    </section>
  )
}
