import {getEmployeesByCode} from "./employees.js"
import {getEmployeeCodeByCity} from "./clients.js"
// 1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOficceCityAndMovil = async()=>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            movil: al.movil
        }
    })
    return dataUpdate
}

//Devuelve la ciudad por codigo 

export const getCityOfficeByCode = async(code)=>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`)
    let data = await res.json();
    return data;
}
//6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
export const getAddressOfficeByClient = async()=>{
    let dataUpdate = [];
    let employee = await getEmployeeCodeByCity()

    for (let codeEmployee of employee){
        let [employeeData] = await getEmployeesByCode(codeEmployee)
        let [oficina] = await getCityOfficeByCode(employeeData.code_office)
        dataUpdate.push({
            direccionOficina: `${oficina.address1} ${oficina.address2}`
        })
    }
    return dataUpdate
}