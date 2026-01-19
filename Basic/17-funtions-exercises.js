// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una funcion que reciba dos numeros y devuelva una suma
function suma(a, b) {
    console.log(a + b)
}

suma(5, 10)

// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
let miArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function getMayor(arr) {
    return Math.max(...arr)
}

let elMayor = getMayor(miArray)
console.log(`El número mayor es: ${elMayor}`)

// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que tiene
function contarVocales(texto) {
    const coincidencias = texto.match(/[aeiou]/gi)
    return coincidencias ? coincidencias.length : 0
}

let miString = "Hola Mundo"
console.log(contarVocales(miString))

// 4. Crea una funcion que reciba un array de string y devuelva un nuevo array con las string en mayusculas

// 5. Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una funcion que reciba un array de nuemeros y devuelva la suma de todos los numeros pares

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una funcion que calcule el factorial de un numero dado