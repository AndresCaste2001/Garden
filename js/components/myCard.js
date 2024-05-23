import { 
    getAllSpainClients, 
    getAllMadridClients,
    getAllClientsAndEmployees,
    getAllPAyClientsAndEmployees,
    getAllNotPAyClientsAndEmployees,
    getAllPAyClientsAndEmployeesCity,
    getAllNotPAyClientsAndEmployeesCity,
    getEmployeeCodeByCity,
    getAllClientsAndEmployeesCity,
    getAllClientsByDeliveryDate,
    getAllNotPAyClients,
    getAllNotRequestClients,
    getClientsWithoutPaymentsAndRequests,
    getAllRequestClientsButNotPay
} from "../module/clients.js";
import {
    getallFullNameAndEmails,
    getBoss,
    getallFullNameAndPosition,
    getFullNameAndBoss,
    getFullNameAndBossBoss,
    getallDataEmployeeNotOffice,
    getallDataEmployeeNotClient,
    getallDataEmployeeNotClientAndOffice,
    getallDataEmployeeNotClientAndBoss  
} from "../module/employees.js";
import{
    getAllOficceAndcodeCity,
    getAllOficceCityAndMovil,
    getAddressOfficeByClient,
    getOfficesWithoutSalesRepresentatives
} from "../module/offices.js"
import{
    getallPaymentFromPayPalEachYear,
    getallPaymentForms,
}from "../module/payments.js"
import{
    getallProductsByGama,
    transformProductDictionary,
    getProductNotRequest,
    getProductNotRequestAndDescription,
}from "../module/product.js"

import{
    getAll,
    getAllClientsYear,
    getAllRequestByTime,
    getAllRequestByTimeDays,
    getAllRequestByYear,
    getAllRequestByMonth
}from "../module/requests.js"

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
    //CLIENTS
    async getAllSpainClientsDesign(){
        let data = await getAllSpainClients();
        
        
        data.forEach(val => {
            console.log(val);
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllMadridClientsDesign(){
        let data = await getAllMadridClients();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
                            <p><b>Total a prestar: </b>${money}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsAndEmployeesDesign(){
        let data = await getAllClientsAndEmployees();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo Representante de Ventas: </b> ${val.employeeCode}</p>
                            <p><b>Nombre Representante de Ventas </b>${val.employeeCode}</p>
                           
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllPAyClientsAndEmployeesDesign(){
        let data = await getAllPAyClientsAndEmployees();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Representante de Ventas: </b> ${val.employeeName}</p>
                           
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllNotPAyClientsAndEmployeesDesign(){
        let data = await getAllNotPAyClientsAndEmployees();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Representante de Ventas: </b> ${val.employeeName}</p>
                           
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllPAyClientsAndEmployeesCityDesign(){
        let data = await getAllPAyClientsAndEmployeesCity();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName} # ${val.clientId}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Representante de Ventas: </b> ${val.employeeName}</p>
                            <p><b>Ciudad oficina Representante de Ventas: </b> ${val.cityOffice}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllNotPAyClientsAndEmployeesCityDesign(){
        let data = await getAllNotPAyClientsAndEmployeesCity();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName} # ${val.clientId}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Representante: </b> ${val.employeeName}</p>
                            <p><b>Oficina Representante: </b>${val.cityOffice}</p>
                         
                    </div>
                </div>
            `;
        });
    }
    async getEmployeeCodeByCityDesign(){
        let data = await getEmployeeCodeByCity();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de Empleado: </b> ${val.codigo}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsAndEmployeesCityDesign(){
        let data = await getAllClientsAndEmployeesCity();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName} # ${val.clientId}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Representante Ventas: </b> ${val.employeeName}</p>
                            <p><b>Ciudad Representante: </b>${val.cityOffice}</p>
                    </div>
                   
                </div>
            `;
        });
    }
    async getAllClientsByDeliveryDateDesign(){
        let data = await getAllClientsByDeliveryDate();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div> # ${val.clientId}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b> ${val.clientName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllNotPAyClientsDesign(){
        let data = await getAllNotPAyClients();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div># ${val.idClient}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.idClient}</p>
                            <p><b>Nombre del Cliente: </b>${val.clientName}</p>
                        </div>name
                    </div>
                </div>
            `;
        });
    }
    async getAllNotRequestClientsDesign(){
        let data = await getAllNotRequestClients();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div># ${val.idClient}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b> ${val.clientName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getClientsWithoutPaymentsAndRequestsDesign(){
        let data = await getClientsWithoutPaymentsAndRequests();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.idClient} </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.clientName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestClientsButNotPayDesign(){
        let data = await getAllRequestClientsButNotPay();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.clientName} </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre Cliente: </b> ${val.clientName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //EMPLOYEES
    async getallFullNameAndEmailsDesign(){
        let data = await getallFullNameAndEmails();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}  ${val.fullLastname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Email: </b> ${val.email}</p>
                           
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getBossDesign(){
        let data = await getBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}  ${val.fullLastname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                            <p><b>Email: </b> ${val.email}</p>
                           
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getallFullNameAndPositionDesign(){
        let data = await getallFullNameAndPosition();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}  ${val.fullLastname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getFullNameAndBossDesign(){
        let data = await getFullNameAndBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Jefe: </b> ${val.jefe}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getFullNameAndBossBossDesign(){
        let data = await getFullNameAndBossBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}  ${val.lastname1} ${val.lastname2}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getallDataEmployeeNotOfficeDesign(){
        let data = await getallDataEmployeeNotOffice();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}  ${val.fullLastname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getallDataEmployeeNotClientDesign(){
        let data = await getallDataEmployeeNotClient();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}  ${val.lastname1}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getallDataEmployeeNotClientAndOfficeDesign(){
        let data = await getallDataEmployeeNotClientAndOffice();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.fullname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                            <p><b>Codigo Oficina: </b> ${val.Codeoffice}</p>
                            <p><b>Direccion Oficina: </b> ${val.officeAddress}</p>
                            <p><b>Ciudad Oficina: </b> ${val.officeCity}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getallDataEmployeeNotClientAndBossDesign(){
        let data = await getallDataEmployeeNotClientAndBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.fullname}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b> ${val.position}</p>
                            <p><b>Jefe: </b> ${val.bossName}</p>
                            
                        </div>
                    </div>
                </div>
            `;
        });
    }
    // OFFICES
    async getAllOficceAndcodeCityDesign(){
        let data = await getAllOficceAndcodeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Ciudad: </b> ${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllOficceCityAndMovilDesign(){
        let data = await getAllOficceCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Telefono: </b> ${val.movil}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAddressOfficeByClientDesign(){
        let data = await getAddressOfficeByClient();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.oficina}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Direccion: </b> ${val.direccionOficina}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getOfficesWithoutSalesRepresentativesDesign(){
        let data = await getOfficesWithoutSalesRepresentatives();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Direccion: </b> ${val.address1} ${val.address2}</p>
                            <p><b>City: </b> ${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //PAYMENTS
    async getallPaymentFromPayPalEachYearDesign(){
        let data = await getallPaymentFromPayPalEachYear();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.id_transaction}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo Cliente: </b> ${val.code_client}</p>
                            <p><b>Valor: </b> ${val.total}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getallPaymentFormsDesign(){
        let data = await getallPaymentForms();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Forma de pago: </b> ${val}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //PRODUCT 
    async getallProductsByGamaDesign(){
        let data = await getallProductsByGama();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.productId}</p>
                            <p><b>Codigo de Producto: </b> ${val.productCode}</p>
                            <p><b>Stock: </b> ${val.productstock}</p>
                            <p><b>Precio: </b> ${val.productPriceSale}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async transformProductDictionaryDesign(){
        let data = await transformProductDictionary();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b> ${val} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getProductNotRequestDesign(){
        let data = await getProductNotRequest();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b> ${val.name} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getProductNotRequestAndDescriptionDesign(){
        let data = await getProductNotRequestAndDescription();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Descripcion: </b> ${val.description}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //REQUESTS
    async getAllDesign(){
        let data = await getAll();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Estados: </b> ${val}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsYearDesign(){
        let data = await getAllClientsYear();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b> ${val} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestByTimeDesign(){
        let data = await getAllRequestByTime();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.requestCode}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo Cliente: </b> ${val.clientCode}</p>
                            <p><b>Fecha de Espera: </b> ${val.dateWait}</p>
                            <p><b>Fecha de Entrega: </b> ${val.dateDelivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestByTimeDaysDesign(){
        let data = await getAllRequestByTimeDays();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.requestCode}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo Cliente: </b> ${val.clientCode}</p>
                            <p><b>Fecha de Espera: </b> ${val.dateWait}</p>
                            <p><b>Fecha de Entrega: </b> ${val.dateDelivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestByYearDesign(){
        let data = await getAllRequestByYear();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.codigoPedido}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo Pedido: </b> ${val.codigoPedido}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestByMonthDesign(){
        let data = await getAllRequestByMonth();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.codigoPedido}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Fecha de Entrega: </b> ${val.fechaentrega}</p>   </div>
                    </div>
                </div>
            `;
        });
    }

    static get observedAttributes() {
        return ["logic"];
    }

    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_6") this.getAllSpainClientsDesign()
        if(name=="logic" && now=="client_16") this.getAllMadridClientsDesign()
        if(name=="logic" && now=="client_21") this.getAllClientsAndEmployeesDesign() 
        if(name=="logic" && now=="client_22") this.getAllPAyClientsAndEmployeesDesign() 
        if(name=="logic" && now=="client_23") this.getAllNotPAyClientsAndEmployeesDesign()   
        if(name=="logic" && now=="client_24") this.getAllPAyClientsAndEmployeesCityDesign() 
        if(name=="logic" && now=="client_25") this.getAllNotPAyClientsAndEmployeesCityDesign() 
        if(name=="logic" && now=="client_26") this.getEmployeeCodeByCityDesign()   
        if(name=="logic" && now=="client_27") this.getAllClientsAndEmployeesCityDesign() 
        if(name=="logic" && now=="client_210") this.getAllClientsByDeliveryDateDesign() 
        if(name=="logic" && now=="client_31") this.getAllNotPAyClientsDesign()        
        if(name=="logic" && now=="client_32") this.getAllNotRequestClientsDesign() 
        if(name=="logic" && now=="client_33") this.getClientsWithoutPaymentsAndRequestsDesign() 
        if(name=="logic" && now=="client_311") this.getAllRequestClientsButNotPayDesign() 
            // EMPLOYEES  
        if(name=="logic" && now=="employ_3") this.getallFullNameAndEmailsDesign()
        if(name=="logic" && now=="employ_4") this.getBossDesign()   
        if(name=="logic" && now=="employ_5") this.getallFullNameAndPositionDesign() 
        if(name=="logic" && now=="employ_28") this.getFullNameAndBossDesign() 
        if(name=="logic" && now=="employ_29") this.getFullNameAndBossBossDesign() 
        if(name=="logic" && now=="employ_34") this.getallDataEmployeeNotOfficeDesign() 
        if(name=="logic" && now=="employ_35") this.getallDataEmployeeNotClientDesign() 
        if(name=="logic" && now=="employ_36") this.getallDataEmployeeNotClientAndOfficeDesign() 
        if(name=="logic" && now=="employ_312") this.getallDataEmployeeNotClientAndBossDesign() 
            // OFFICES
        if(name=="logic" && now=="offices_1") this.getAllOficceAndcodeCityDesign() 
        if(name=="logic" && now=="offices_2") this.getAllOficceCityAndMovilDesign() 
        if(name=="logic" && now=="offices_26") this.getAddressOfficeByClientDesign() 
        if(name=="logic" && now=="offices_310") this.getOfficesWithoutSalesRepresentativesDesign()
            //PAYMENTS
        if(name=="logic" && now=="payments_13") this.getallPaymentFromPayPalEachYearDesign() 
        if(name=="logic" && now=="payments_14") this.getallPaymentFormsDesign()
            //PRODUCTS
        if(name=="logic" && now=="product_14") this.getallProductsByGamaDesign() 
        if(name=="logic" && now=="product_211") this.transformProductDictionaryDesign() 
        if(name=="logic" && now=="product_38") this.getProductNotRequestDesign() 
        if(name=="logic" && now=="product_39") this.getProductNotRequestAndDescriptionDesign()
            //REQUESTS
        if(name=="logic" && now=="requests_7") this.getAllDesign() 
        if(name=="logic" && now=="requests_8") this.getAllClientsYearDesign() 
        if(name=="logic" && now=="requests_9") this.getAllRequestByTimeDesign() 
        if(name=="logic" && now=="requests_10") this.getAllRequestByTimeDaysDesign() 
        if(name=="logic" && now=="requests_11") this.getAllRequestByYearDesign() 
        if(name=="logic" && now=="requests_12") this.getAllRequestByMonthDesign()     
    }
}