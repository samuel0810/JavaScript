// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "Samuel"],
    ["email", "samuel@gmail.com"],
    ["age", 17]
])
console.log(myMap)


// Metodos y propiedades

// set
myMap.set("alias", "Samu")
myMap.set("name", "Samuel Jimenez")

console.log(myMap)


// get

console.log(myMap.get("name"))
console.log(myMap.get("surName"))

console.log(myMap.has("surName"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)

