// view/main.js
// Ubicación: CODIGOEXAMEN/view/main.js

import { processStudentData } from '../controler/processStudentData.js';

// Usamos una función principal asíncrona para ejecutar todo
async function main() {
    // LLAMADA CLAVE: Esperamos la entrada del teclado
    const data = await processStudentData();

    console.log("\n======================================");
    console.log("        RESULTADOS DEL PROGRAMA        ");
    console.log("======================================");

    // --- 1. Mostrar la lista de objetos creados ---
    console.log("\n--- 1. Lista de Objetos Creados y Almacenados en Array ---");
    data.initialList.forEach(student => console.log(student.toString()));

    // --- 2. Mostrar el JSON generado ---
    console.log("\n--- 2. Contenido Final del JSON (students.json) ---");
    console.log(data.jsonString);

    // --- 3. LECTURA Y VERIFICACIÓN DEL JSON (Rubro 5) ---
    const parsedStudentData = JSON.parse(data.jsonString);

    console.log("\n--- 3. Verificación de Lectura desde el JSON ---");
    parsedStudentData.forEach(rawStudent => {
        console.log(`ID: ${rawStudent.id} | Nombre: ${rawStudent.name} | GPA: ${rawStudent.gpa}`);
    });

    console.log("======================================");
    console.log("       PROCESO COMPLETADO             ");
    console.log("======================================");
}

// Iniciar el programa
main();