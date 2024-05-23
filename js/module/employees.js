import{getAllClientsAndEmployees} from "./clients.js"
import{getOfficesByCode} from "./offices.js"
// 3. Devuelve un listado con el nombre, apellidos y email de los empleados
// cuyo jefe tiene un codigo de jefe igual a 7.
export const getallFullNameAndEmails = async() => {
    let res = await fetch("http://localhost:5502/employees?code.boss=7")
    let data = await res.json()
    let dataUpdate = data.map(val =>{ 
        return {
            name:val.name,
            fullLastname:`${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
})
return dataUpdate;
}


//4. Devuelve el nombre del puesto,nombre, apellidos y 
// email del jefe de la empresa.
export const getBoss = async() => {
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{ 
        if(val.code_boss == null){ 
            dataUpdate.push({
                position:val.position,
                name:val.name,
                fullLastname:`${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
            })
        }
})
return dataUpdate;
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean represntantes de ventas.
export const getallFullNameAndPosition = async() => {
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{ 
        if (val.position != "Representante Ventas"){
            dataUpdate.push({
                name:val.name,
                fullLastname:`${val.lastname1} ${val.lastname2}`,
                position:val.position
            })
        }    
})
return dataUpdate;
}

//2.8. Devuelve un listado con el nombre de los empleados 
//junto con el nombre de sus jefes.
export const getFullNameAndBoss = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = [];

    dataUpdate = data.map(empleado => {
        let boss = data.find(employee => employee.employee_code === empleado.code_boss);
        return {
            nombre: `${empleado.name} ${empleado.lastname1} ${empleado.lastname2}`,
            jefe: boss ? `${boss.name} ${boss.lastname1} ${boss.lastname2}` : "No tiene jefe"
        };
    });

    return dataUpdate;
}

//2.9. Devuelve un listado que muestre el nombre de cada empleados,
// el nombre de su jefe y el nombre del jefe de sus jefe.
export const getFullNameAndBossBoss = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = [];

    const findBossBoss = (employee) => {
        let boss = data.find(employeeData => employeeData.employee_code === employee.code_boss);
        if (!boss || boss.code_boss === null) {
            return boss;
        } else {
            return findBossBoss(boss);
        }
    };

    dataUpdate = data.map(empleado => {
        let boss = data.find(employee => employee.employee_code === empleado.code_boss);
        let bossBoss = boss ? findBossBoss(boss) : null;

        return {
            nombre: `${empleado.name} ${empleado.lastname1} ${empleado.lastname2}`,
            jefe: boss ? `${boss.name} ${boss.lastname1} ${boss.lastname2}` : "No tiene jefe",
            jefeDelJefe: bossBoss ? `${bossBoss.name} ${bossBoss.lastname1} ${bossBoss.lastname2}` : "No tiene jefe"
        };
    });

    return dataUpdate;}
    
// M1.Ayuda Devuelve la información de un empleado por su codigo 
    export const getallDataEmployeeByCode = async (code) => {
        let res = await fetch("http://localhost:5502/employees");
        let data = await res.json();
        let employeeData = data.find(val => val.employee_code === code);
    
        if (employeeData) {
            return {
                name: employeeData.name,
                fullLastname: `${employeeData.lastname1} ${employeeData.lastname2}`,
                email: employeeData.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0],
                cityCode : employeeData.code_office,
                employeeCode: employeeData.employee_code
            };
        } else {
            return null; // O maneja el caso en que no se encuentre el empleado
        }
    };

    export const getEmployeesByCode = async(code)=>{
        let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
        let data = await res.json();
        return data
    }
    
    
// 3.4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
export const getallDataEmployeeNotOffice = async (code) => {
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        if (val.code_office === null) {
            dataUpdate.push({
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                position: val.position
            });
        }
    });

    if (dataUpdate.length === 0) {
        console.log("Todos los empleados tienen una oficina asociada");
        return null;  // O puedes devolver un mensaje específico
    }

    return dataUpdate;
};


// 3.5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
export const getallDataEmployeeNotClient = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let employees = await res.json();
    let clientsDataEmployee = await getAllClientsAndEmployees();
    
    // Obtén los códigos de los empleados que tienen clientes asociados
    let employeesWithClients = new Set(clientsDataEmployee.map(client => client.employeeCode));
    //filtra los empleados que no están en el conjunto 
    let dataUpdate = employees.filter(employee => !employeesWithClients.has(employee.code));

    if (dataUpdate.length === 0) {
        console.log("Todos los empleados tienen un cliente asociado");
        return null;  // O puedes devolver un mensaje específico
    }

    return dataUpdate.map(employee => ({
        name: employee.name,
        fullLastname: `${employee.lastname1} ${employee.lastname2}`,
        position: employee.position,
        codeEmployee: employee.employee_code,
        codeOffice: employee.code_office,
        codeBoss: employee.code_boss
    }));
};

//3.6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado
// junto con los datos de la oficina donde trabajan.
export const getallDataEmployeeNotClientAndOffice = async () => {
    let employeesWithoutClients = await getallDataEmployeeNotClient();
    let dataUpdate = await Promise.all(employeesWithoutClients.map(async (employee) => {
        let [officeData] = await getOfficesByCode(employee.codeOffice);
        return {
            fullname:`${employee.name} ${employee.fullLastname}`,
            position: employee.position,
            Codeoffice: officeData.code_office,
            officeAddress: `${officeData.address1} ${officeData.address2}`,
            officeCity: officeData.city
        };
    }));

    return dataUpdate;
};

//## 12. Devuelve un listado con los datos de los empleados que no
// tienen clientes asociados y el nombre de su jefe asociado.
export const getallDataEmployeeNotClientAndBoss = async () => {
    let employeesWithoutClients = await getallDataEmployeeNotClient();
    let dataUpdate = await Promise.all(employeesWithoutClients.map(async (employee) => {
        let codeBoss = employee.codeBoss;
        let dataBoss = await getallDataEmployeeByCode(codeBoss);
        return {
            fullname: `${employee.name} ${employee.fullLastname}`,
            position: employee.position,
            bossName: dataBoss ? `${dataBoss.name} ${dataBoss.fullLastname}` : "No tiene Jefe"
            
        };
    }));
    
    return dataUpdate;
};