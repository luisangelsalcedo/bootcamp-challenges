const prompt = require("prompt-sync")({ sigint: true })

const nombre = prompt("Cual es tu nombre?", "Sin nombre")
console.log("Hola!: ", nombre)
