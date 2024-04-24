//5. Devuelve un listado con todos los productos que pertenecen
//a la gama `Ornamentales` y que tienen más de `100` unidades 
//en stock. El listado deberá estar ordenado porsu precio de venta,
//mostrando en primer lugar los de mayor precio.

export const getAllByGamaAndStock = async()=>{
    let res = await fetch("http://localhost:5506/products");
    let data = await res.json();
    let dataUpdate = [];
    dataUpdate = data.filter(function(producto){
        return producto.gama === "Ornamentales" && producto.stock>100;
    }).map(function(prod){
        return [prod.name,prod.gama,prod.stock]
    });
    return dataUpdate
}