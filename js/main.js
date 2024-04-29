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
    getAllPaymentForms,
    getAllCodeClient

} from "./module/payments.js"
import {
    getAllByCityCode,getClientsByCountry,
    getEmployeeNameByClient,
    getEmployeeNameByClientPay,
    getEmployeeNameByClientNotPay
}from "./module/clients.js"
import {
    getAllRequestStatus,
    getAllRequestEntregados
}from "./module/requests.js"
import{
    getAllByGamaAndStock
}from "./module/product.js"

    console.log(await getAllCodeClient())
    console.log(await getEmployeeNameByClientNotPay())