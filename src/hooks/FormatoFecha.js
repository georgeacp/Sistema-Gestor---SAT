import moment from "moment";

export default function FormatoFecha(fecha) {
    return moment(fecha).utc().format('YYYY/MM/DD')
}
