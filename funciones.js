function suma(a, b) {
  if (typeof a !== "number") throw "No es numero"
  return a + b;
}

// console.log(suma(8, 7))

const myFunction = (nombre) => {
  return `Hola soy ${nombre}`
}

// console.log(myFunction("Arturo"))

function otraFuncion (num1, num2, callback) {
  const potencia = num1 ** num2

  callback(potencia)
}

const miCallback = (parameter) => {
  console.log(parameter)
}
otraFuncion(7, 9, (parameter) => {
  console.log(`Desde el otro callback ${parameter}`)
})