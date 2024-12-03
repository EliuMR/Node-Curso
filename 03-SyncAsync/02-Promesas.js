const fs = require('node:fs/promises'); // Importamos el módulo fs
//También se puede importar promisify para convertir funciones de callback a promesas
//const { promisify } = require('node:util'); // Aquellos módulos en los que no se pueda usar < >/promises


console.log('Leyendo archivos de forma asíncrona con promesas...');
console.log('Leyendo el primer archivo...');
fs.readFile('01-ArchivoPrueba_01.txt', 'utf-8')
    .then((text_1) => {
        console.log(text_1);
    })
    .catch((error) => {
        console.error(error);
    });

fs.readFile('01-ArchivoPrueba_02.txt', 'utf-8').
    then((text_2) => {
        console.log(text_2);
    })
    .catch((error) => {
        console.error(error);
    });
