import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvbvofsvskrntepffger.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2YnZvZnN2c2tybnRlcGZmZ2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NDE3OTYsImV4cCI6MjAxODMxNzc5Nn0.rnT5kz48zOqqP_mIARBnDO7IluyCk--MiHYkjHOJhxM'
const supabase = createClient(supabaseUrl, supabaseKey)

export const revalidate = 0

export async function getInfractores() {
    const { data, error } = await supabase.from('infractor').select().order('dni_infractor', { ascending: true })
    if (error != null) {
        console.log(error)
    }
    return data;
}

export async function getInfractor(dni) {
    const { data, error } = await supabase.from('infractor').select().eq('dni_infractor', dni)
    if (error != null) {
        console.log(error)
    }
    return data;
}

export async function getInfractorA2Tablas(dni) {
    const infractor = await supabase.from('infractor').select().eq('dni_infractor', dni)
    const encargado = await supabase.from('hoja_registro').select().eq('dni_infractor', dni)
    if (infractor.error != null && encargado.error != null) {
        console.log(error)
        return []
    }
    return [infractor.data, encargado.data];
}

export async function updateInfractor(dni, nombre, apellido, direccion, telefono, correo, tipo_infractor, codigo_distrito) {
    const { error } = await supabase.from('infractor').update({ nombreinfractor: nombre, apellidosinfractor: apellido, direccion: direccion, telefono_infractor: telefono, correo_infractor: correo, tipoinfractor: tipo_infractor, codigodistrito: codigo_distrito }).eq('dni_infractor', dni)
    if (error != null) {
        return false
    }

    return true
}

export async function getTipoInfractor() {
    const { data, error } = await supabase.from('tipo_infractor').select()
    if (error != null) {
        console.log(error)
    }
    return data;
}

export async function getLugar() {
    const { data, error } = await supabase.from('lugar').select()
    if (error != null) {
        console.log(error)
    }
    return data;
}

export async function getEncargado() {
    const { data, error } = await supabase.from('encargado').select().order('codigoencargado', { ascending: true })
    if (error != null) {
        console.log(error)
    }
    return data;
}

export async function getEncargado2(codEncargado) {
    const { data, error } = await supabase.from('encargado').select().eq('codigoencargado', codEncargado)
    if (error != null) {
        console.log(error)
    }
    return data;
}

export async function updateEncargado(codEncargado, dni, nombre, apellido, direccion_input, telefono, correo, cargo, codigodep) {

    const { error } = await supabase.from('encargado').update({ nombreencargado: nombre, n_dniencargado: dni, apellidoencargado: apellido, direccion: direccion_input, telefono: telefono, correo: correo, cargo: cargo, codigodep: codigodep }).eq('codigoencargado', codEncargado)

    if (error != null) {
        return false
    }

    return true
}

export async function postEncargado(codEncargado, dni, nombre, apellido, direccion_input, telefono, correo, cargo, codigodep) {
    const data = await supabase.from('encargado').insert([{ codigoencargado: codEncargado, n_dniencargado: dni, apellidoencargado: apellido, nombreencargado: nombre, cargo: cargo, telefono: telefono, correo: correo, direccion: direccion_input, codigodep: codigodep, image_url: 'https://dvbvofsvskrntepffger.supabase.co/storage/v1/object/public/fotos/blank-profile-picture-973460_960_720.webp' }]).select();
    console.log(data)
    if (data.error != null) {
        console.log(data)
        return false
    }
    return true
}

export async function deleteEncargado(codEncargado) {
    const { error } = await supabase.from('encargado').delete().eq('codigoencargado', codEncargado)
    if (error != null) {
        return false
    }
    return true
}

export async function postLugar(codigo_distrito, descripcion_distrito, provincia, direccion) {
    const { error } = await supabase.from('lugar').insert({ codigodistrito: codigo_distrito, descripciondistrito: descripcion_distrito, provincia: provincia, direccion: direccion })
    if (error != null) {
        return false
    }
    return true
}

export async function postInfractor(dni, nombre, apellido, direccion, telefono, correo, tipo_infractor, codigodistrito_post) {
    const data = await supabase.from('infractor').insert({ dni_infractor: dni, telefono_infractor: telefono, correo_infractor: correo, codigodistrito: codigodistrito_post, apellidosinfractor: apellido, nombreinfractor: nombre, tipoinfractor: tipo_infractor, image_url: 'https://dvbvofsvskrntepffger.supabase.co/storage/v1/object/public/fotos/blank-profile-picture-973460_960_720.webp', direccion: direccion })
    if (error != null) {
        return false
    }
    return true
}

export async function deleteInfractor(dni) {
    const { error } = await supabase.from('infractor').delete().eq('dni_infractor', dni)
    if (error != null) {
        return false
    }
    return true
}

export async function getMulta() {
    const { data, error } = await supabase.from('multa').select()
    if (error != null) {
        console.log(error)
    }
    return data;
}
