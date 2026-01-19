// set

// Declaracion

let mySet = new Set()
console.log(mySet)


// Inicializacion

mySet = new Set(["Samuel", "Jimenez", "Castillo", 37, true])
console.log(mySet)


// Metodos comunes

// add y delete

mySet.add("Samuel@gmail.com")
console.log(mySet)

mySet.delete("Samuel")
console.log(mySet)

console.log(mySet.delete("Samuel"))
console.log(mySet)

// has
console.log(mySet.has("Jimenez"))


// size
console.log(mySet.size)


// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)


// Convertit array a set
mySet = new Set(myArray)
console.log(mySet)


// No permite duplicados

mySet.add("Samuel@gmail.com")
mySet.add("Samuel@gmail.com")
mySet.add("Samuel@gmail.com")
console.log(mySet)