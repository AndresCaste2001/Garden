//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllRequestStatus = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    dataUpdate = data.forEach(status=>{
        
    })

    return "hola"
}