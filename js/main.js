import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getFullNameAndPositionByPositiion
} from "./module/employees.js";
import {
    getAll,
    getAllPaymentForms
} from "./module/payments.js"
import {
    getAllByCityCode,getClientsByCountry
}from "./module/clients.js"
import {
    getAllRequestStatus,
    getAllRequestEntregados
}from "./module/requests.js"
import{
    getAllByGamaAndStock
}from "./module/product.js"

console.log(await getAllByGamaAndStock());