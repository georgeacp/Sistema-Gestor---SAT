import { getInfractores } from "@/data/supabase";

export default async function Select({ id, name, className }) {
    const data_infractor = await getInfractores();
    return (
        <div className={`bg-white rounded-lg group ${className}`}>
            <div class="relative bg-inherit">
                <select class="peer bg-transparent h-10 w-full rounded-lg text-gray-500 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 " >
                    {
                        data_infractor.map((item) => (
                            <option value={item.dni_infractor} key={item.dni_infractor}>{item.dni_infractor}</option>
                        ))
                    }
                </select><label class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{name}</label>
            </div>
        </div>
    )
}
