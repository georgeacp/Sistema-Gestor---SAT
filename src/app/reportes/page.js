import Input_disable from "@/components/Input_disable";
import Input_selector from "@/components/Input_selector";
import Back_Button from "@/components/back_button";
import { getInfractor, getInfractores, postInfractor } from "@/data/supabase";
import { useRouter } from "next/navigation";

export const revalidate = 0

export default async function page() {
    const data_infractor = await getInfractores();

    return (
        <section className="bg-white p-4 rounded-lg">
            <h2 className="">Reportes</h2>
            <div className="grid grid-cols-6 gap-x-4 gap-y-8">
                <Input_selector data={data_infractor} selection="Seleccione" />
                <Input_disable type="text" placeholder="Nombres" className="col-span-2" id="nombre" />
                <Input_disable type="text" placeholder="Apellidos" className="col-span-2" id="apellido" />
                <Input_disable type="text" placeholder="Tipo" className="col-span-1" id="tipo" />
                <Input_disable type="text" placeholder="Direccion" className="col-span-2" id="direccion" />
                <Input_disable type="text" placeholder="Correo" className="col-span-2" id="correo" />
                <Input_disable type="text" placeholder="Numero de Registro" className="col-span-2" id="numero_registro" />

                <div className="w-full col-span-6 flex flex-row justify-between">
                    <Back_Button href="/" />
                </div>
            </div>
        </section>
    )
}
