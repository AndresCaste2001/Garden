import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail 
} from "./module/employees.js";
import {
    getAll
} from "./module/payments.js"
import {
    getAllByCityCode,getClientsByCountry
}from "./module/clients.js"
import {
    getAllRequestStatus
}from "./module/requests.js"

console.log(await getAllRequestStatus());