const fs = require('node:fs/promises');
const path = require('node:path');
const folder = process.argv[2] ?? '.';

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(error);
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

    return `${fileType} ${file.padEnd(20)} ${size.toString()} ${fileModified}`;
  })
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
