const express = require('express')
const ditto = require('./poke/ditto.json')

const app = express();
const PORT = process.env.PORT ?? 1234;

//midleware para hacer algo antes de ir a la la url con la función por ejemplo checar cokies o ver si el usuario está logeado
app.use((req,res,next)=>{
    console.log("Checando midleware");
    //se puede hace midlewares para algunos prefijos, o para algún método exclusivo
    if (req.method !== 'POST') return next()
    if (req.headers['content-type']!== 'application/json') next()
    // sólo llegan request que son POST y que tienen el header con application/json
    let body = '';
    req.on('data', chunk =>{
        body += chunk.toString();
    })
    req.on('end',()=>{
        const data =JSON.parse(body)
        data.timestamp= Date.now()
        req.body = data;
        next();
    })
})



app.get('/pokemon/ditto',(req,res)=>{
    res.json(ditto);

})

app.post('/pokemon',(req,res)=>{
    res.status(201).json(req.body )
})

app.use((req,res)=>{
    res.status(404).send("Error 404")
})
app.listen(PORT,()=>
    console.log(`http://localhost:${PORT}`)
)