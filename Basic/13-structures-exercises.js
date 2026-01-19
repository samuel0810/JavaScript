// 1. Crea un array que almacene 5 animales
let myArray = ["leon", "gato", "perro", "aguila", "pez"]

console.log(myArray)

// 2. Añade dos mas. Uno al principio y otro al final
myArray.push("tiburon")
myArray.unshift("cocodrilo")

console.log(myArray)

// 3. Elimina el que se encuentra en tercera posicion
myArray.splice(3,2)

console.log(myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set (["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(mySet)

// 5. Añade dos mas. Uno de ellos repetidos
mySet.add("Samuel")
mySet.add("libro1")

console.log(mySet)

// 6. Elimina uno concreto a tu eleccion
mySet.delete("libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el numero del mes a su nombre
let meses = new Map ([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"]
])

console.log(meses)
// 8. Comprueba si el mes numero 5 existe e imprime su valor
console.log(meses.get("5"))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
const mesesVerano = ["junio", "julio", "agosto"]
meses.set("verano", mesesVerano)
console.log(meses)

// 10. Crea un Array, transformalo a un Set y almacenalo en un Map

let array = ["samue;", "jimenez", "castillo"]
console.log(array)

let set = new Set(array)
console.log(set)

let myMap = new Map()
myMap.set(set)

console.log(myMap)