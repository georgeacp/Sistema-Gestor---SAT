import { getEncargado2 } from "@/data/supabase";
import Edit_Encargado_client from "./Edit_Encargado_client";

export const revalidate = 0

export default async function page({ params }) {
    const { slug } = params;
    const data = await getEncargado2(slug);
    return (
        <Edit_Encargado_client data={data} />
    )
}