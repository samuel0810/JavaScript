// Operadores


// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)


// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable +=  2
console.log(myVariable)

myVariable -=  2
myVariable *=  2
myVariable /=  2
myVariable %=  2
myVariable **=  2


// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


// Truthy values (Valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de textos menos las vacías
// El boolean true


// Falst values (Valores falsos)

// 0
// 0n
// Null
// Undefined
// NaN
// El boolean false 
// Cadenas de textos vacías



// Operadores lógicos

// and (&&)
// or (||)
// not (!)


// Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo"): console.log("No está lloviendo")