const fs = require('fs');

let citasRegistradas = [];
const nombreArchivo = 'citas.json';

function registrar(nombreAnimal, edad, tipoAnimal, color, enfermedad){
    citasRegistradas.push({nombreAnimal: nombreAnimal,
        edad: edad,
        tipoAnimal: tipoAnimal,
        color: color,
        enfermedad: enfermedad});
    fs.writeFileSync(nombreArchivo, JSON.stringify(citasRegistradas));
    console.log('Cita Registrada Exitosamente');
    console.log(citasRegistradas);
}

function leer(){
    const archivo = fs.readFileSync(nombreArchivo, 'utf8');
    console.log(JSON.parse(archivo));
}

module.exports = {registrar, leer};