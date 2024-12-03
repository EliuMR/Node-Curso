const path = require('node:path');

//separacion de rutas, segun el sistema operativo 
console.log(path.sep);

//unir rutas
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//obtener el nombre del archivo
//basename
console.log(path.basename(filePath));
//quitando la extension
console.log(path.basename(filePath, '.txt'));
//ver la extension
console.log(path.extname(filePath));


//La siguiente aplicación es un ls básico que lee el contenido de un directorio y muestra los nombres de los archivos que contiene.
const fs = require('node:fs');
//leer archivos de un directorio con fs utilizando callback
//fs.readdir lo que hace es leer el contenido de un directorio
fs.readdir('./', (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(file => {
    console.log(path.basename(file));
  }
  );
}
);


console.log('-'.repeat(50));
//Aplicación ls avanzado
const folder = process.argv[2] ?? '.'; 
//la posición 0 es node y la 1 es el archivo que se está ejecutando
//colocar los argumentos en la terminal
fs.readdir(folder, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(file => {
    console.log(path.basename(file));
  }
  );
}
);
