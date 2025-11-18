// controler/processStudentData.js
// Ubicación: CODIGOEXAMEN/controler/processStudentData.js

import { Student } from '../Student.js'; 
import * as readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Interfaz de lectura
const rl = readline.createInterface({ input, output });

/**
 * Función asíncrona para ingresar datos del teclado y procesar el JSON.
 * (Cumple con el Rubro 4: Data input y JSON file)
 * @returns {object} Objeto con la lista de estudiantes y la cadena JSON.
 */
export async function processStudentData() {
    const studentlist = [];
    let continueInput = 'y';
    let currentId = 101;

    console.log("--- INICIO DE INGRESO DE DATOS POR TECLADO ---");

    while (continueInput.toLowerCase() === 'y') {
        console.log(`\n**Ingresando datos para Estudiante ID: ${currentId}**`);
        
        // Entrada de datos
        const name = await rl.question('   -> Nombre: ');
        const major = await rl.question('   -> Carrera: ');
        
        let gpa;
        let validGpa = false;
        while (!validGpa) {
            const gpaInput = await rl.question('   -> GPA (0.0 - 4.0): ');
            gpa = parseFloat(gpaInput);
            if (!isNaN(gpa) && gpa >= 0 && gpa <= 4.0) {
                validGpa = true;
            } else {
                console.log("   [ERROR] Ingrese un GPA numérico válido (entre 0.0 y 4.0).");
            }
        }
        
        // Creación del objeto y adición al Array
        studentlist.push(new Student(currentId, name, major, gpa));
        currentId++;
        
        // Preguntar si desea continuar
        continueInput = await rl.question('\n¿Desea ingresar otro estudiante? (y/n): ');
    }

    rl.close(); // Cierra la interfaz de lectura

    // Generación de la cadena JSON (simula la actualización del archivo)
    const studentsJsonString = JSON.stringify(studentlist, null, 2);

    return {
        initialList: studentlist,
        jsonString: studentsJsonString
    };
}