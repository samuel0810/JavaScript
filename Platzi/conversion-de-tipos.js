// Explicit Type Casting

const string = "42"
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const strinDecimal = "3.14"
const float = parseFloat(strinDecimal)
console.log(float)
console.log(typeof float)

const binary = "1010"
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)


// Implicit Type Casting

const sum = "5" + 3
console.log(sum)

const sumWithBoolean = "3" + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = "10"
const numbreValue = 10
const booleanValue = true
console.log(stringValue + stringValue) // CONCATENA
console.log(stringValue + numbreValue) // CONCATENA
console.log(stringValue + booleanValue) // CONCATENA
console.log(numbreValue + stringValue) // CONCATENA
console.log(numbreValue + numbreValue) //SUMA
console.log(numbreValue + booleanValue) //SUMA
console.log(booleanValue + stringValue) // CONCATENA
console.log(booleanValue + numbreValue) //SUMA
console.log(booleanValue + booleanValue) //SUMA


const numero = "596"
const numeroConvertido = parseInt(numero)
console.log(numero)
console.log(numeroConvertido)
console.log(typeof numero)
console.log(typeof numeroConvertido)