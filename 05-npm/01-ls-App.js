//Para instalar una dependencia de node.js se utiliza el comando npm install <nombre de la dependencia>
//Para que sea de modo de desarrollo se utiliza el comando npm install <nombre de la dependencia> --save-dev o -D
//Esto dentro de json se verá reflejado en la sección de devDependencies
//
const fs = require('node:fs/promises');
const path = require('node:path');
const folder = process.argv[2] ?? '.';

const picocolors = require('picocolors');

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(picocolors.red("No se encontró la carpeta"));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filepath = path.join(folder, file);
    let stat;
    try {
      stat = await fs.stat(filepath);
    } catch (error) {
      console.error(error);
      return;
    }
    const isDirectory = stat.isDirectory()
    const fileType = isDirectory ? 'directory' : '-';
    const size = stat.size;
    const fileModified = stat.mtime.toLocaleString();

    return `${fileType} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(size.toString())} ${fileModified}`;
  })
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
