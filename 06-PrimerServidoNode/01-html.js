const http = require('node:http');
//Esto nos permite crear un servidor web para hacer peticiónes y recibir respuestas
//
const server = http.createServer((req, res) => {
  console.log('Nueva petición!');
  res.end('Hola mundo');
}
);

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000/');
}
);
