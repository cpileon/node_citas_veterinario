const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) =>{
    const data = fs.readFileSync('citas.json', 'utf8');
    const citasJson = JSON.parse(data);
    const obj = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    }

    citasJson.push(obj);
    console.log(`+ Se ha registrado la cita de ${nombre} exitosamente. +`);
    fs.writeFileSync('citas.JSON',JSON.stringify(citasJson))
}

const leer = () =>{
    const data = fs.readFileSync('citas.json', 'utf8');
    console.log(` + Citas registradas:`);
    JSON.parse(data).forEach((cita, i)=>{
        console.log(`
        N° ${i+1}:
        - Nombre: ${cita.nombre}
        - Edad: ${cita.edad}
        - Tipo de mascota: ${cita.tipo}
        - Color mascota: ${cita.color}
        - Enfermedad de la mascota: ${cita.enfermedad}
        ------------------------------------------------
        `)
    })
}

module.exports = {registrar, leer};