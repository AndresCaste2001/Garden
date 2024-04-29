// 3. Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
    
            })
        }
    })
    return dataUpdate
}
//.5 Devuelve un listado con el nombre, apellidos y puesto
// de aquellos empleados que no sean representantes de ventas.

export const getFullNameAndPositionByPositiion = async()=>{
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = [];
    dataUpdate = data.map(function(empleado){
        if(empleado.position !== "Representante Ventas"){
           return [empleado.name,empleado.lastname1,empleado.lastname2, empleado.position] || []
        }
    });
    return dataUpdate;
}
export const getEmployeesByCode = async(code)=>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
    let data = await res.json();
    return data
}

//8. Devuelve un listado con el nombre de los empleados 
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

//Devuelve un listado que muestre el nombre de cada empleados,
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

    return dataUpdate;
}
