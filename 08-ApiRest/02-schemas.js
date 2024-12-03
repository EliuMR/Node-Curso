const z = require('zod'); //libreria para validar requests

//Schema
const movieScheme = z.object({
    title : z.string({
        invalid_type_error: "Movie debe ser cadena"
    }),
    year : z.number().min(1800).max(2025).int(),
    director: z.string(),
    duration: z.number(),
    poster: z.string().url(),
    gnre: z.array(
        z.enum(['Action','Adventure','Comedy','Drama','Fantasy'])
    ),
    rate: z.number()
}) 
/*
Validación con safeParse():
Si el objeto cumple con el esquema, result.success será true, y puedes acceder a los datos validados mediante result.data.
Si el objeto no es válido, result.success será false, y puedes ver los detalles de los errores en result.error.errors
*/
function validateMovie(object){
    return movieScheme.safeParse(object)
}

function validatePartialMovie(object){
    //lo que hace el partial, es que no importa que no estén todos los elementos del esquema
    //verifica los que sí están y no lanza error
    return movieScheme.partial().safeParse(object)
}

module.exports={
    validateMovie,
    validatePartialMovie
}