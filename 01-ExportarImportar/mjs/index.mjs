// .js -> por defecto usa CommonJS
// .mjs -> por defecto usa ES Modules
// .cjs -> CommonJS

//Para importar un módulo es de la siguiente manera
import { sum, multiply, divide} from './sum.mjs';


console.log(sum(1, 2));

console.log(multiply(1, 2));

console.log(divide(1, 2));
