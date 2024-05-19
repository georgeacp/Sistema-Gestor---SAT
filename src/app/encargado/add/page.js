
import { getEncargado } from "@/data/supabase";
import Add_Encargado_Client from "./Add_Encargado_Client";

export default async function page() {
    const data_encargado = await getEncargado()

    return (
        <Add_Encargado_Client data_encargado={data_encargado} />
    )
}
