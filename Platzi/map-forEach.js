// Map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)


// Otro metodo

let numero = [1, 2, 3, 4, 5]
let numero1 = numero.map (function (x){
    return x * 2
})

console.log(numero)
console.log(numero1)

// forEach

const colors = ["Red", "Blue", "Pink"]
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// Exercise: Fahrenheit to Celsius conversion

const TemperaturesInFahrenheit = [32, 68, 95, 104, 212]

const TemperaturesInCelsius = TemperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log(`Temperatures In Fahrenheit: `, TemperaturesInFahrenheit)
console.log(`Temperatures In Celsius: `, TemperaturesInCelsius)


// Exercise: Sum of Elements in an Array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
    sum += number
})

console.log(`Array of Numbers: `, newNumbers)
console.log(`Sum of Numbers: `, sum)
