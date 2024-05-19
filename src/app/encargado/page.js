'use client'
import Delete_button from "@/components/Delete_button";
import { deleteEncargado, getEncargado } from "@/data/supabase";
import FormatCodeDni from "@/hooks/FormatCodeDni";
import FormatDireccion from "@/hooks/FormatDireccion";
import FormatoNombre from "@/hooks/FormatoNombre";
import Link from "next/link";

export const revalidate = 0

export default async function page(nombre, apellido, correo, dni, cargo, telefono, img, direccion, codEncargado, codDep) {
  const data = await getEncargado();
  return (
    <div className="flex flex-wrap Z-mx-3">
      <div className="flex-none w-full max-w-full px-3 animate__animated animate__fadeIn animate__delay-0.5s">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 className="dark:text-white">Encargados</h6>
            <Link href="/encargado/add" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
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
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">DATOS</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">CODIGO - DNI</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">CARGO</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">DIRECCION</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">TELEFONO</th>
                    <th className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    nombre = item.nombreencargado,
                    apellido = item.apellidoencargado,
                    correo = item.correo,
                    codDep = item.codigodep,
                    cargo = item.cargo,
                    telefono = item.telefono,
                    direccion = item.direccion,
                    img = item.image_url,
                    dni = item.n_dniencargado,
                    codEncargado = item.codigoencargado,

                    <tr key={item.codigoencargado}>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img src={img} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">{FormatoNombre(nombre, apellido)}</h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{correo}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent text-center border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{FormatCodeDni(codEncargado, dni)}</p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{cargo}</p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{FormatDireccion(codDep, direccion)}</p>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{telefono}</p>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="inline-flex items-center rounded-md shadow-sm">
                          <Link href={`/encargado/edit/${codEncargado}`} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            <button
                              className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center" >
                              <span><ion-icon name="create"></ion-icon></span>
                              <span className="hidden md:inline-block">Edit</span>
                            </button>
                          </Link>
                          <Delete_button deleteCodigo={deleteEncargado} codigo={codEncargado} />
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
    </div >
  )
}
