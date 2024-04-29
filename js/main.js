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
    getEmployeeNameByClientPay
}from "./module/clients.js"
import {
    getAllRequestStatus,
    getAllRequestEntregados
}from "./module/requests.js"
import{
    getAllByGamaAndStock
}from "./module/product.js"

(async () => {
    console.log(await getEmployeeNameByClientPay());
})();
