// 1. Concatena dos cadenas de texto
let saludo = ("Hola, " + "mi nombre es Samuel")
console.log(saludo)

// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length)

// 3. Muestra el primer y último carácter de un string
console.log(saludo[0])
console.log(saludo[24])

// 4. Convierte a mayúsculas y a minúsculas un string
console.log(saludo.toLowerCase())
console.log(saludo.toUpperCase())

// 5. Crea una cadena de texto en varias lineas
let cuenta = 5465
console.log(`Esta,
    es mi cuenta
    ${cuenta}`)

// 6. Interpola el valor de una variable en un string
let message = `la placa del carro es ${45938}`
console.log(message)

// 7. Remplaza todos los espacios en blanco de un string por guiones
let fullName = "Samuel-Jimenez-Castillo"
console.log(fullName)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(fullName.includes("Samuel"))

// 9. Comprueba si dos string son iguales
let nombre = "Samuel"
let apodo = "Jimenez"
console.log(nombre === apodo)

// 10. Comprueba si dos string tienen la misma longitud
console.log(nombre.length)
console.log(apodo.length)