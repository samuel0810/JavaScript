// Funciones


// Simple

function myFunc() {
    console.log("Hola mi funcion!")
}
for (let i = 0; i < 5; i++){
    myFunc()
}


// Con Parametros

function myFuncWithParams(name) {
    console.log(`Hola, ${name}!`)
}

myFuncWithParams("Samuel")
myFuncWithParams("Jimenez")


// Funciones Anonimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}!`)
}

myFunc2("Samuel Jimenez")


// Aroow Functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}!`)


myFunc3("Samuel Jimenez")
myFunc4("Samuel Jimenez")


// Parametros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}


// Por Defecto

defaultSum()
defaultSum(5)
defaultSum(b = 5)
defaultSum(0)


// Retorno de Valores

function mult(a, b) {
    return a * b
}

console.log(mult(5, 10)) // Cualquiera de las 2 funciona


let result = mult(5, 10) // Cualquiera de las 2 funciona
console.log(result)


// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superior")


// ForEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Samuel", "Jimenez", "Castillo", 37, true])

myMap = new Map([
    ["name", "Samuel"],
    ["email", "samuel@gmail.com"],
    ["age", 17]
])

myArray.forEach(function (value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))