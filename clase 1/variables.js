/**
 * var -> variable global
 * let -> variable temporal que puede ser modificada
 * const -> variable temporal estatica (una vez 
 *           instanciada no puede ser modificada)
 * 
 * Referencias
 * https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables
 */

var nombre = "Pedro";
let apellidos = 'Paramo';
const edad = 24;

{
  var pais = 'Mexico'
  let ciudad = 'Ciudad de Mexico'
  const ano = 2020
}

console.log(nombre)
console.log(apellidos)
console.log(edad)

console.log(pais)
// console.log(ciudad) // <---- Error porque la variable se encuentra en otra seccion
// console.log(ano) // <---- Error porque la variable se encuentra en otra seccion


// -----> TIPOS DE DATOS <----- \\

// Boolean
const a = true;
const b = false;

// Null
const c = null;

// Undefined
let d;

// Number
let e = 10;
const f = 983.234;

// String
// Al inicializar un string puedes usar comillas simples(') o dobles("")
const g = "c";
const h = "palabra";
const i = 'otra palabra';

// Object
let obj = {
  a : true,
  b : 284.1,
  c : "En el objeto"
};

obj.d = "Anadiendo otro elemento al objeto"

console.log(obj) //Imprimiendo todo el objeto
console.log(obj.b) //Imprimiendo variable dentro del objeto

/* Las comillas dobles se pueden usar si la variable dentro del objeto
    contiene caracteres especiales o espacios*/
let l = {
  "mi nombre" : "Arturo",
  "@pellido" : "ortega",
  "edad" : 24
};

console.log(l)
console.log("@pellido", l["@pellido"])

// Arrays
const k = [1,2,3,4,5];
// Pueden ser de mas de un tipo de dato
const miArray = ["puede tener", 2, null, 'mas de un tiop de dato', ":D", true]

console.log(miArray)