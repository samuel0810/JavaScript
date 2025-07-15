// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "samuel"

if (myName == "Samuel") {
    console.log("Tu nombre es Samuel")
} else {
    console.log("Tu nombre es otro")
}

// 2. Imprime por consola un nuevo mensaje si el usuario y contraseña coincide con unos establecidos
let usuario = "Samuel08"
let contraseña = "Samuel.08"
let message = `Tu usuario y contraseña coinciden. 
Bienvenido`

if (usuario == "Samuel08" && contraseña == "Samuel.08") {
    console.log(message)
}

// 3.  Verifica si un numero es positivo, negativo o cero e imprime un mensaje
let numero = 2

if (numero > 0) {
    console.log("Tu numero es positivo")
} else if (numero < 0) {
    console.log("Tu numero es negativo")
} else {
    console.log("Tu numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan
let age = 18

if (age >= 18) {
    console.log("Puedes votar")
} else {
    let yourself = 18 - age
    console.log(`No puedes votar te faltan ${yourself} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
const asignacion = age >= 18 ? "Es adulto" : "Es menor"
console.log(asignacion)


// 6. Muestra en que estacion del año no encontramos dependiendo del valor de una variable "mes"
let mes = "septiembre"

if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    console.log("Estamos en invierno")
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    console.log("Estamos en primavera")
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("Estamos en verano")
} else if (mes === "septiembre" || mes === "octubre" || mes ==="noviembre") {
    console.log("Estamos en otoño")
} else {
    console.log("Mes incorrecto, introduzca el nombre de un mes")
}

// 7. Muestra el numero de dias que tienen un mes dependiendo de la variable del ejercicio anterior
mes = "abril"

if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
    console.log(`El mes de ${mes} tiene 31 días.`)
} else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
    console.log(`El mes de ${mes} tiene 30 días.`)
} else if (mes === "febrero") {
    console.log(`El mes de ${mes} tiene 28 días (o 29 en año bisiesto).`);
} else {
    console.log("Mes no válido. Por favor, introduce un nombre de mes correcto")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "ingles"

switch (idioma) {
    case "espanol":
        console.log("¡Hola!")
        break
    case "ingles":
        console.log("Hello!")
        break
    case "frances":
        console.log("Bonjour!")
        break
    case "aleman":
        console.log("Hallo!")
        break
    default:
        console.log("Idioma no reconocido. Por favor, introduce un idioma válido.")
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = "enero"

switch (mes) {
    case "diciembre":
        console.log("Estamos en inviernos")
        break
    case "enero":
        console.log("Estamos en inviernos")
        break
    case "febrero":
        console.log("Estamos en inviernos")
        break
    case "marzo":
        console.log("Estamos en primavera")
        break
    case "abril":
        console.log("Estamos en primavera")
        break
    case "mayo":
        console.log("Estamos en primavera")
        break
    case "junio":
        console.log("Estamos en verano")
        break
    case "julio":
        console.log("Estamos en verano")
        break
    case "agosto":
        console.log("Estamos en verano")
        break
    case "septiembre":
        console.log("Estamos en otoño")
        break
    case "octubre":
        console.log("Estamos en otoño")
        break
    case "noviembre":
        console.log("Estamos en otoño")
        break
        default:
            console.log("Escriba el nombre del mes correctamente")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = "enero"

switch (mes) {
    case "enero":
        console.log("enero Tiene 31 dias")
        break
    case "marzo":
        console.log("marzo Tiene 31 dias")
        break
    case "mayo":
        console.log("mayo Tiene 31 dias")
        break
    case "julio":
        console.log("julio Tiene 31 dias")
        break
    case "agosto":
        console.log("agosto Tiene 31 dias")
        break
    case "octubre":
        console.log("octubre Tiene 31 dias")
        break
    case "diciembre":
        console.log("diciembre Tiene 31 dias")
        break
    case "abril":
        console.log("abril tiene 30 dias")
        break
    case "junio":
        console.log("junio tiene 30 dias")
        break
    case "septiembre":
        console.log("septiembre tiene 30 dias")
        break
    case "noviembre":
        console.log("noviembre tiene 30 dias")
        break
    case "febrero":
        console.log("febrero tiene 28 dias")
        break
        default:
            console.log("Escriba el nombre del mes correctamente")
}