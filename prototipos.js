// Se crea el prototipo de Heroe
const Heroe = function (nombre, nivel) {
  this.nombre = nombre
  this._nivel = nivel
}

Heroe.prototype.getAll = function() {
  return `mi nombre es ${this.nombre} y mi nivel es: ${this._nivel}`
}

const miHeroe = new Heroe("Superman", 100)
miHeroe.nombre = "Flash"
console.log(miHeroe.nombre)
console.log(miHeroe.getAll())

// Se hereda de Heroe a Mago
let Mago = function (nombre, nivel, poder) {
  Heroe.call(this, nombre, nivel)
  this.poder = poder
}

Mago.prototype = Object.create(Heroe.prototype)

Mago.prototype.miPoder = function() {
  console.log(this.poder)
}

let merlin = new Mago("merlin", 15, "divino")

console.log(merlin.getNivel())

merlin.miPoder()