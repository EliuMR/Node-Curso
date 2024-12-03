const express = require('express');
const crypto = require('node:crypto');

//Importamos nuetros json que contiene todas nuestras peliculas
const movies = require('./movies.json');

//Importamos la validación del esquema
const {validateMovie,validatePartialMovie} = require('./02-schemas.js');


const app = express();
app.disable('x-powered-by') //deshabilitar el header X-powerd-by: Express
 

app.use(express.json());
app.get('/',(req,res)=>{
    res.json({"message": "Hola mundo"})
});
 
//Todos los recursos que sean movies se identifica con /movies
app.get('/movies',(req,res)=>{
    //CORS
    
    res.header('Access-Control-Allow-Origin','*')

    const {genre} = req.query; //obtener el genero
    if(genre){
        const filterMovies = movies.filter(
            //movie => movie.genre.includes(genre)
            movie => movie.genre.some(g=> g.toLowerCase() === genre.toLowerCase()) //Para que no sea case sensitive
        )
        return res.json(filterMovies)
    }
    res.json(movies)
});

app.get('/movies/:id', (req,res)=>{ //path-to-regexp
    const {id} =req.params;
    const movie = movies.find(movie=>movie.id === id)
    if (movie){
        return res.json(movie)
    }
    res.status(404).json({"message": "Movie not found"})
})


//POST: para agregar una película
app.post('/movies',(req,res)=>{

    //Vamos a valida la request (cuerpo de la req)
    const resultados = validateMovie(req.body);
    if (resultados.error){
        res.status(400).json({message : JSON.parse(resultados.error.message)})
    }

    // Si la validación pasa, desestructuramos los datos
    const { title, year, director, duration, poster, gnre, rate } = resultados.data;

    const newMovie= {
        id : crypto.randomUUID(),
        title, 
        year,
        director,
        duration,
        poster,
        gnre,
        rate: rate ?? 0
    }
    //Esta parte no es REST porque estamos guardando el estado
    movies.push(newMovie);

    res.status(201).json(newMovie);
});


//Patch : actualizar una película 
app.patch('/movies/:id',(req,res)=>{
    const {id} =req.params;
    //validamos el resultado
    const resultado = validatePartialMovie(req.body);
    if(!resultado.success){
        return res.status(400),json({'error': JSON.parse(resultado.error.message)})
    }

    //Checar si existe el índice
    const movieIndex = movies.findIndex(movie=>movie.id === id)//Es un método de los arrays en JavaScript que busca el índice del primer elemento que cumpla con la condición
    if (movieIndex<0){
        return res.status(404).json({"message":"Movie not found"})
    }
    const movie = movies[movieIndex]//pelicula que encaja con el índice

    const updateMovie ={
        ...movie,
        ...resultado.data
    }
    movies[movieIndex] = updateMovie;

    return res.json(updateMovie)
})

const PORT = process.env.PORT ?? 1234;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});