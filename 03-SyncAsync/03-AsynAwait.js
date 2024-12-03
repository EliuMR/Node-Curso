const {readFile} = require('node:fs/promises'); // Importamos el módulo fs

console.log('Leyendo archivos de forma asíncrona con async/await...');
console.log('Leyendo el primer archivo...');
//Se debe usar async/await dentro de una función async

//Para await se deber usar una función async
//En este ejemplo se usa una función anónima autoejecutable
//La función anónima autoejecutable se define con la sintaxis:
// (async () => {
//    //Código
//    })();
//
(
async () =>{
  const text_1 = await readFile('01-ArchivoPrueba_01.txt', 'utf-8');
  console.log(text_1);

  console.log("Otras tareas...");

  console.log('Leyendo el segundo archivo...');
  const text_2 = await readFile('01-ArchivoPrueba_02.txt', 'utf-8');
  console.log(text_2);

}
)(); //Se autoejecuta la función anónima
