// Strings
let myName = "Samuel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caractéres
console.log(greeting[0])
console.log(greeting[11])

// Métodos comúnes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Samuel"))
console.log(greeting.indexOf("Jimenez"))
console.log(greeting.includes("Castillo"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Samuel"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Samuel", "Jimenez"))


// Lemplate Literals (plantillas literales)

let message =  `Hola, este 
es mi 
curso de 
JavaScript`

console.log(message)

let email = "samuel@gmail.com"

console.log(`Hola, ${myName}! este es mi email ${email} `)