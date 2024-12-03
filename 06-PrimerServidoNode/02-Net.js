//const net = require('node:net');

//Net nos permite crear un servidor de tipo TCP
//TCP es un protocolo de comunicación que se encarga de establecer la conexión entre dos máquinas
//A diferencia de HTTP, TCP no es orientado a conexión, es decir, no se necesita una petición y una respuesta
//para establecer la conexión



const net = require('node:net');

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    }); // <- Este paréntesis cierra correctamente server.listen

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        // Si el puerto está en uso, busca otro automáticamente
        findAvailablePort(0).then(resolve).catch(reject);
      } else {
        reject(error);
      }
    });
  });
}

// Llamada a la función findAvailablePort
findAvailablePort(3000).then((port) => {
  console.log('Servidor escuchando en http://localhost:' + port + '/');
}).catch((error) => {
  console.error('Error al buscar un puerto:', error);
});
