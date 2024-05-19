import Input_disable from "@/components/Input_disable";
import Input_selector from "@/components/Input_selector";
import Back_Button from "@/components/back_button";
import { getInfractor, getInfractorA2Tablas, getInfractores } from "@/data/supabase";

export default async function page({ params }) {
    const { slug } = params;
    let hojas;
    const [data, data_hojas] = await getInfractorA2Tablas(slug);
    if (data_hojas.length == 0) {
        hojas = "No hay hojas de registro";
    } else {
        hojas = data_hojas[0].n_registro
    }

    console.log(data)
    const data_infractor = await getInfractores();

    return (
        <section className="bg-white p-4 rounded-lg">
            <h2 className="">Infractores</h2>
            <div className="grid grid-cols-6 gap-x-4 gap-y-8">
                <Input_selector data={data_infractor} selection={data[0].dni_infractor} />
                <Input_disable type="text" placeholder="Nombres" className="col-span-2" id="nombre" value={data[0].nombreinfractor} />
                <Input_disable type="text" placeholder="Apellidos" className="col-span-2" id="apellido" value={data[0].apellidosinfractor} />
                <Input_disable type="text" placeholder="Tipo" className="col-span-1" id="tipo" value={data[0].tipoinfractor} />
                <Input_disable type="text" placeholder="Direccion" className="col-span-2" id="direccion" value={data[0].direccion} />
                <Input_disable type="text" placeholder="Correo" className="col-span-2" id="correo" value={data[0].correo_infractor} />
                <Input_disable type="text" placeholder="Numero de Registro" className="col-span-2" id="numero_registro" value={hojas} />

                <div className="w-full col-span-6 flex flex-row justify-between">
                    <Back_Button href="/" />
                </div>
            </div>
        </section>
    )
}
