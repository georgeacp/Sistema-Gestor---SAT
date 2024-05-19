import { getMulta } from "@/data/supabase"
import FormatoFecha from "@/hooks/FormatoFecha";
import Link from "next/link";


export default async function page(nPapeleta, codInfraccion, fecha, monto) {
    const data = await getMulta();
    return (
        <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3 animate__animated animate__fadeIn animate__delay-0.5s">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6 className="dark:text-white">Multas</h6>
                        <Link href="/infractor/add" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            <button
                                className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center" >
                                <span><ion-icon name="person-add"></ion-icon>
                                </span>
                                <span className="hidden md:inline-block">Add</span>
                            </button>
                        </Link>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-4">
                        <div className="p-0 overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                                <thead className="align-bottom">
                                    <tr>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70"> N° Papeleta</th>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Codigo Infraccion</th>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Fecha</th>
                                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">Nonto</th>
                                        <th className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        nPapeleta = item.n_papeleta,
                                        codInfraccion = item.codigo_infraccion,
                                        fecha = item.fecha,
                                        monto = item.monto,

                                        <tr key={item.n_papeleta}>
                                            <td className="p-2 align-middle bg-transparent text-center border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{nPapeleta}</p>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent text-center border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{codInfraccion}</p>
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{FormatoFecha(fecha)}</p>
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{monto}</p>
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                <div className="inline-flex items-center rounded-md shadow-sm">
                                                    <Link href={`/infractor/edit/`} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                                        <button
                                                            className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center" >
                                                            <span><ion-icon name="create"></ion-icon>
                                                            </span>
                                                            <span className="hidden md:inline-block">Edit</span>
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                        <span>
                                                            <ion-icon name="trash"></ion-icon>
                                                        </span>
                                                        <span className="hidden md:inline-block">Delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
