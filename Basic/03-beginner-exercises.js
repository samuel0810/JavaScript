//1. Escribe un comentario en una linea

// Hola Samuel

//2. Escribe un comentario en varias lineas

/*
Esto
es un
codigo
de varias
lineas
*/

//3. Declara variables con valores asociados a todos los datos de tipo primitivo
let myName = "Samuel"

let age = 17
let height = 1.70

let isFather = true
let isMother = false

let undefinedValue

let nullValue = null

let mySymbol = Symbol("mySymbol")

let myBigInt = ("222222222299999999999999333333333334444444")
let myBigInt2 = 222222222299999999999999333333333334444444n


//4. Imprime por consola el valor de todas las variables 

console.log(myName)

console.log(age)
console.log(height)

console.log(isFather)
console.log(isMother)

console.log(undefined)

console.log(nullValue)

console.log(mySymbol)

console.log(myBigInt)
console.log(myBigInt2)

//5. Imprime por consola el tipo de todas las variables
console.log(typeof myName)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isFather)
console.log(typeof isMother)

console.log(typeof undefined) 

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)

//6. A continuación, modifica los valores de las varibles por otros del mismo tipo
let nombre = "samuel"
nombre = "samuel jimenez"
console.log (nombre)

//7. A continuación, modifica los valores de las variables por otros de distinto tipo
let miNumero = 123;
let miTexto = (miNumero);
console.log(typeof miTexto);

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos
// Cadena de texto (string)
const NOMBRE = "Juan Perez"
const OCUPACION = "Desarrollador"
const SALUDO = "Hola, mundo!"

// Números (number)
const EDAD = 30
const Decimal = 3.14159

const ES_ACTIVO = true
const ES_ADMIN = false

const VALOR_UNDEFINED = undefined

const DATO_NULO = null

const ID_UNICO = Symbol("id_usuario")
const EVENTO_CLICK = Symbol("click_event")

const POBLACION_MUNDIAL_ESTIMADA = 8000000000n
const NUMERO_MUY_GRANDE = BigInt("123456789012345678901234567890")

//9. A continuación, modifica los valores de las constantes
const edad = 30;
console.log(edad)

edad = 31

//10. Comenta las lineas que produzcan algun tipo de error al ejecutarse
/*const edad = 30;
console.log(edad)

edad = 31*/