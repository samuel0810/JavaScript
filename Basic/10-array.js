// Array

// Declaracion
let = myArray = []
let = myArray2 = new Array()

console.log(myArray)
console.log(myArray2)


// Inicializacion
myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)



myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)



myArray = ["Samuel", "Jimenez", "Castillo", 37, true]
myArray2 = new Array("Samuel", "Jimenez", "Castillo", 37, true)

console.log(myArray)
console.log(myArray2)



myArray2 = new Array(3)
myArray2[0] = "Samuel"
myArray2[1] = "Jimenez"
myArray2[2] = "Castillo"
console.log(myArray2)


// Metodos comunes

myArray = []


// Push y pop

myArray.push("Samuel")
myArray.push("Jimenez")
myArray.push("Castillo")
myArray.push("37")

console.log(myArray)

console.log(myArray.pop()) // elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)


// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Samuel", "Castillo")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = [] //la dos sirven pero esta e mejor
myArray.length = 0
console.log(myArray)


// slice

myArray = ["Samuel", "Jimenez", "Castillo", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)


// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Samuel", "Jimenez", "Castillo", 37, true]

myArray.splice(1, 3)
console.log(myArray)