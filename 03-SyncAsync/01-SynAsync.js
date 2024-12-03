
const fs = require('node:fs'); // Importamos el módulo fs

//Ejemplo de lectura de archivos de forma sincrónica
console.log('Leyendo archivos de forma sincrónica...');
console.log('Leyendo el primer archivo...');
const text_1 = fs.readFileSync('01-ArchivoPrueba_01.txt', 'utf-8');
console.log(text_1);

console.log("Otras tareas...");

console.log('Leyendo el segundo archivo...');
const text_2 = fs.readFileSync('01-ArchivoPrueba_02.txt', 'utf-8');
console.log(text_2);

//Ejemplo de lectura de archivos de forma asíncrona
console.log('-'.repeat(50));
console.log('Leyendo archivos de forma asíncrona...');

console.log('Leyendo el tercer archivo...');
//Se debe pasar una función callback como segundo argumento
//La función callback se ejecutará cuando la lectura del archivo haya terminado
fs.readFile('01-ArchivoPrueba_01.txt', 'utf-8', (error, text_3) => {
    console.log(text_3);
}); //los parametros de la función callback son error y data (contenido del archivo)

console.log("Otras tareas...");

console.log('Leyendo el cuarto archivo...');
fs.readFile('01-ArchivoPrueba_02.txt', 'utf-8', (error, text_4) => {
    console.log(text_4);
});

