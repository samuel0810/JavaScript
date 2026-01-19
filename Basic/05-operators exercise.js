// 1. Crea una variable para cada operacion aritmetica

let a = 3
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// 2. Crea una variable para cada tipo de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas

let numberSites = 4
console.log(numberSites)
numberSites += 4
console.log(numberSites)

numberSites -= 4
numberSites *= 4
numberSites /= 4
numberSites %= 4
numberSites **= 4

// 3. Imprime 5 operaciones verdaderas con diferentes operadosres de comparacion

console.log(a > b)
console.log(a < b)
console.log(a == a)
console.log(a === "3")
console.log(a <= b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion 

console.log(a > b)
console.log(a == b)
console.log(a >= b)
console.log(a === b)
console.log(a === "5")

// 5. Utiliza el operador logico and 

console.log(10 > 3 && 1 < 6)

// 6. Utiliza el operador logico or

console.log(19 < 4 || 22 > 3)

// 7. Combina ambos operadores

console.log( 10 < 4 && 0 > 9 || 10 > 8)

// 8. Añade alguna negacion

console.log(!( 10 < 4 && 0 > 9 || 10 > 8))

// 9. Utiliza el operador ternario

const isTeacher = true

isTeacher ? console.log("Si es profesor"): console.log("No es profesor")

// 10. Combina operadores aritmeticos, de comparacion y logica

console.log(5 + 5 && 3 + 3 > 5 - 3 || 9 + 2)