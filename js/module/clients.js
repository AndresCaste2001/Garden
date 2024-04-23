//16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

export const getAllByCityCode = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid");
    let data = await res.json();
    let dataUpdate = [];
    dataUpdate = data.filter(val=>val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30);
    return dataUpdate
}
//6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getClientsByCountry = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain");
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return val.contact_name
    });
    return dataUpdate
}