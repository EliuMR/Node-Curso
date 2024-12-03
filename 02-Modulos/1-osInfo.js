//Importamos el módulo os
const os = require('node:os');

//Obtenemos
console.log("Sistema operativo: " + os.platform());
console.log("Versión del sistema operativo: " + os.release());
console.log("Arquitectura del sistema operativo: " + os.arch());
console.log("Memoria total: " + os.totalmem() + " bytes");
console.log("Tipo de computadora: ", os.uptime()/60 + " minutos");


