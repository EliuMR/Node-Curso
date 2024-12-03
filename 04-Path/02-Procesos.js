//obtener los argumentos de la linea de comandos
//console.log(process.argv);

//controlar el proceso y terminarlo
/*process.exit();

// podemos controlar eventos del proceso
// Esto significa que podemos controlar eventos como cuando el proceso termina, cuando el proceso recibe una señal, cuando hay un error, etc.
process.on('exit', () => {
  console.log('Proceso terminado');
});
*/
//actual directorio donde se esta ejecutando el proceso
// no donde se encuentra el archivo 
console.log(process.cwd());

//plataforma donde se esta ejecutando el proceso
console.log(process.env);

