/*. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor. */
export const getAll = async()=>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        let { date_payment } = val
        let [year] = date_payment.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        }
    });
    dataUpdate.sort((a, b) => {
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateB - dateA;
    });

    return dataUpdate
}
//4. Devuelve un listado con todas las formas de pago que aparecen
// en la tabla `pago`. Tenga en cuenta que no deben aparecer formas
// de pago repetidas.
export const getAllPaymentForms = async()=>{
    let res = await fetch("http://localhost:5505/payments?payment");
    let data = await res.json();
    let payments = new Set();
    data.forEach(function(pay){
        payments.add(pay.payment)
    });

    return payments
}

// devuelve un listado de los clientes que han hecho pagos

export const getAllCodeClient = async ()=>{ 
    let res= await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let codeClients = new Set();
    data.forEach(function(code){
        codeClients.add(code.code_client)
    });
    return codeClients
}
