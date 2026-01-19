// 1. Crea un objetos con 3 propiedades
let carro = {
    modelo: "Toyota",
    año: 2018,
    costo: 700000
}
// 2. Accede y muetra su valor
console.log(typeof carro)

// 3. Agrega una nueva propiedad
carro.kilometraje = 10000
console.log(carro)

// 4. Elimina una de las 3 primeras propiedades
delete (carro.costo)
console.log(carro)

// 5. Agrega una funcion e invocala
let carro2 = {
    modelo: "Toyota",
    año: 2018,
    costo: 700000,
    correr: function () {
        console.log("La persona corre")
    }
}

carro2.correr()

// 6. Itera las propiedades del objeto
for (let value in carro) {
    console.log(value)
}

for (let key in carro) {
    console.log(key + ":" + carro [key])
}
// 7. Crea un objeto anidado
let carro3 = {
    modelo: "Toyota",
    año: 2018,
    costo: 700000,
    cliente:{
        hisName: "Pedro",
        age: 30,
        isMarried: false
    }
}

console.log(carro3.cliente)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(typeof carro3.modelo)

// 9. Comprueba si los dos objetos creados son iguales
console.log(carro == carro2)
console.log(carro.modelo == carro2.modelo)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(carro.año == carro2.costo)