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

console.log(await getAll());