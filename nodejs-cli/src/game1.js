const prompt = require("prompt-sync")({ sigint: true })

const num = Math.ceil(Math.random() * 5)

while (true) {
  const numInsert = prompt(
    "Adivina un número del 1 al 5: ",
    "Inténtalo tu puedes"
  )
  if (numInsert == num) {
    console.clear()

    setTimeout(() => {
      console.log(
        `\n\n✔️  ¡Muy bien!, El número es: ${num}.\n     Hoy es tu día de suerte.\n`
      )
      console.log(
        "     ---------------------\n     | Gracias por jugar |\n     ---------------------\n\n"
      )
    }, 500)

    break
  } else console.log("❌  Sigue intentando...\n")
}
