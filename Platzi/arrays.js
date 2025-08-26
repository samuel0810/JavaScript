// How to create an array ?

const fruits = Array("apple", "banana", "uvas")
console.log(fruits)

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ["futbol", "tenis", "rugby"]
console.log(sports)

const recipeIngredients = [
    "flour",
    true,
    2,
    {
        igredient: "milk", quantity: "1 cup"
    },
    false

]

console.log(recipeIngredients)

// Accessing array elements

const firtsFruit = fruits[0]
console.log(firtsFruit)

console.log(fruits.length)


// Length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability

fruits.push("Wtermelon")
console.log(fruits)

// Inmutability

const newFruits = fruits.concat(["grape", "kiwi"])
console.log(fruits)
console.log(newFruits)

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercises: sum all elements of an array.

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)