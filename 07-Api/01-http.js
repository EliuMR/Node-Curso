const http = require('node:http');
const fs = require('node:fs');
console.log(process.env);

const desirePort = process.env.PORT ?? 3000;

const processRequest =  (req, res) => {
    if (req.url === '/'){ // Si la url es igual a la raíz
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Bienvenido a la página principal');
    }
    else if (req.url === '/imagen'){ // Si la url es igual a /imagen
      fs.readFile('./image.jpg', (err,data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error interno del servidor');
        }
        else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'image/jpeg');
          res.end(data); // Enviamos la imagen, la cual fue cargada en data
        }
      })
    }
    else if (req.url === '/contacto'){ // Si la url es igual a /contacto
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Página de contacto');
    }
    else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Página no encontrada');
    }
};

const server = http.createServer(processRequest);

server.listen(desirePort, () => {
  console.log(`Server is listening on port http://localhost:${desirePort}`);
});
