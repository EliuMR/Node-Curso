//file system module
const fs = require('node:fs');

//
const stats = fs.statSync('./02-ArchivoPrueba.txt');

console.log(
  stats.isFile(), //Si es un archivo
  stats.isDirectory(), //Si es un director
  stats.isSymbolicLink(), //Si es un enlace simbolico
  stats.size //Tamaño del archivo
);

//Lectura de un archivo
const data = fs.readFileSync('./02-ArchivoPrueba.txt', 'utf-8');
console.log(data);
