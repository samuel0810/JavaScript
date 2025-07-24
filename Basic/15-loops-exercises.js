// NOTA: explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los numero del 1 al 20
let a = 1

while (a <= 20) {
    console.log(a)
    a++
}

// 2. Crea un bucle que sume todos los numero del 1 al 100 y muestre el resultado
for (a = 1; a + 100; a++ ) {
    console.log(a)
    if (a == 100){
        break
    }
}

// 3. Crea un bucle que imprima todos los numero pares del 1 50
let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]

for (0 < 50; numeros; numeros++) {
    console.log(numeros)
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["samuel", "jimnez", "castillo"]

for (a = 0; a < nombres.length; a++) {
    console.log(nombres)
}
// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto
let cadenaDeTexto = "Hola, mundo! Esto es un ejemplo."

const vocales = "aeiouAEIOU";

let contadorDeVocales = 0;

for (let i = 0; i < cadenaDeTexto.length; i++) {

    let caracterActual = cadenaDeTexto[i];
    if (vocales.includes(caracterActual)) {
        contadorDeVocales++;
    }
}

console.log(`La cadena de texto es: "${cadenaDeTexto}"`)
console.log(`El número de vocales en la cadena es: ${contadorDeVocales}`)

console.log("\n--- Ejemplos de prueba ---")

let cadena1 = "Programacion"
let contador1 = 0;
for (let i = 0; i < cadena1.length; i++) {
    if (vocales.includes(cadena1[i])) {
        contador1++
    }
}
console.log(`"${cadena1}" tiene ${contador1} vocales.`)

let cadena2 = "Javascript"

let contador2 = 0

for (let i = 0; i < cadena2.length; i++) {
    if (vocales.includes(cadena2[i])) {
        contador2++
    }
}
console.log(`"${cadena2}" tiene ${contador2} vocales.`)

let cadena3 = "Rythm"

let contador3 = 0

for (let i = 0; i < cadena3.length; i++) {
    if (vocales.includes(cadena3[i])) {
        contador3++
    }
}

console.log(`"${cadena3}" tiene ${contador3} vocales.`)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto
let array = [1, 2, 3, 4, 5]
productoTotal = 1

for (let i = 0; i < array.length; i++) {
    productoTotal = productoTotal * array[i]
}

console.log(array)
console.log(productoTotal)

// 7 Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

for (let b = 0; b < tabla.length; b++) {
    b * tabla
}

console.log(tabla)
// 8. Usa un bucle para invertir una cadena de texto
let cadenaOriginal = "EjemploCorto"; 
let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i]; 
}

console.log(`Original: "${cadenaOriginal}"`);
console.log(`Invertida: "${cadenaInvertida}"`);

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci)
}

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
let myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let mayoresA10 = []

for (const num of myArray) {
    if (num > 10) {
        mayoresA10.push(num);
    }
}

console.log(mayoresA10)