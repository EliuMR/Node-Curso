import {readFile} from 'node:fs/promises';

console.log('Leyendo archivos de forma asíncrona con async/await en paralelo...');
Promise.all([
  readFile('01-ArchivoPrueba_01.txt', 'utf-8'),
  readFile('01-ArchivoPrueba_02.txt', 'utf-8')
]).then(([text_1, text_2]) => {
  console.log(text_1);
  console.log(text_2);
}
).catch((error) => {
  console.error(error);
});

