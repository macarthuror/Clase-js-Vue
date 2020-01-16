const promesa = new Promise((resolve,reject) => {
  setTimeout(() =>{
    reject("Deja de esperar") // <--- Se forza el error
  }, 5000)
})

promesa
  .then((data) => {
    console.log(`No hay error ${data}`)
  })
  .catch((error) => {
    console.log("error", error)
  })

console.log("Estoy al final 😃")
