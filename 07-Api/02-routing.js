const http = require('node:http');

//commonJS
//exportamos el json que utilizaremos
const dittoJson = require('./poke/ditto.json');

const processRequest = (req, res) => {
  const { method, url } = req; // Destructuramos el método y la url, el method es el método de la petición y la url es la url de la petición

  switch (method){
    case 'GET':
      switch (url){
        case '/pokemon/ditto':
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(dittoJson));
          break;
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end('Página no encontrada');
      }
    case 'POST':
      switch (url){
        case '/pokemon':
          let body = '';
          req.on('data', chunk =>{
            body += chunk.toString();
          })
          req.on('end',()=>{
            const data =JSON.parse(body)
            res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify(data))
          })
          break;
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type','Text/plain; charset=utf-8');
          return res.end('No encontrado')
      }
}}; // Creamos una variable body que contendrá el cuerpo de la petición

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log('Server is listening on port http://localhost:1234');
});

