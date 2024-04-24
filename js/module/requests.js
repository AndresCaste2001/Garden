//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllRequestStatus = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = data.map(pedido => (pedido.status === "Rechazado" ? pedido : null));

    return dataUpdate
}
//Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
export const getAllRequestEntregados = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = data.filter(pedido => {
        const fecha = new Date(pedido.date_delivery);
        const mes = fecha.getMonth() +1

        return mes === 1 && pedido.status === "Entregado"
        }).map(function(pedido){
            return [pedido.id,pedido.status,pedido.date_delivery]
        });

    return dataUpdate
}