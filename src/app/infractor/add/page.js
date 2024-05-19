import { getInfractores } from "@/data/supabase";
import Add_Infractor_client from "./Add_Infractor_Client";


export default async function page() {
    const data_infractor = await getInfractores();

    return (
        <Add_Infractor_client data_infractor={data_infractor} />
    )
}