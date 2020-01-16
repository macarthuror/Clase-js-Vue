class Heroe {
  constructor(nombre, nivel) {
    this.nombre = nombre
    this.nivel = nivel
  }

  getNivel() {
    return this.nivel
  }

  setNombre(nombre) {
    this.nombre = nombre
  }
}

const superman = new Heroe("Superman", 100)

class Mago extends Heroe {
  constructor (nombre, nivel, poder) {
    super(nombre, nivel)
    this.poder = poder
  }
}

const merlin = new Mago("Merlin", 120, "poder")

console.log(merlin)
