import { getInfractor } from "@/data/supabase";
import Edit_Infractor_client from "./Edit_Infractor_client";

export const revalidate = 0

export default async function page({ params }) {
  const { slug } = params;
  const data = await getInfractor(slug);
  if (data.length == 0) {
    return (<h1>No existe el infractor</h1>)
  } else {
    return (
      <Edit_Infractor_client data={data} />
    )
  }
}
