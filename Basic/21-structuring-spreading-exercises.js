// 1. Usa destructuracion para extraer los dos primeros elementos de un array
let myArray = [1, 2, 3, 4]

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)

// 2. Usa destructuracion en un array y asigna un valor predeterminado a una variable
let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// 3. Usa destructuracion para extraer dos propiedades de un objeto
let person = {
    name: "samuel",
    age: 17,
    alias: "samu"
}

let {name, age, alias} = person
console.log(name)
console.log(age)

// 4. Usa destructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes
let {name: name5, age: age5, alias: alias5} = person
console.log(name)
console.log(age)

// 5. Usa destructuracion para extraer dos propiedades de un objeto anidado
let person3 = {
    name: "samuel",
    age: 17,
    alias: "samu",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}

let {name: name7, job: { name: jobname1 }, job: { exp }} = person3
console.log(name)
console.log(jobname1)
console.log(exp)

// 6. Usa propagacion para combinar dos array en uno nuevo
myArray = [1, 2, 3, 4]
let myArray2 = [5, 6, 7, 8]

console.log(...myArray)
console.log(...myArray2)

// 7. Usa propagacion para crear una copia de un array
myArray3 = [...myArray]
console.log(myArray3)

// 8. Usa propagacion para combinar dos objetos en uno
let person2 = {
    name: "samuel",
    age: 17,
    alias: "samu"
}

let person6 = {
    name: "samuell",
    age: 18,
    aliass: "samuelll"
}
let myObject = {...person2, ...person6}
console.log(myObject)

// 9. Usa propagacion para crear una copia de un objeto
let object = {...person6}
console.log(object)

// 10. Combina desustructuracion y propagacion
let [myValueq0, myValue11, myValue12, myValue13, myValue14] = myArray

let usuario = { id: 1, nombre: "Ana", email: "ana@ejemplo.com", rol: "editor" };

let { nombre, rol, ...otrosDatos } = usuario;

let usuarioModificado = { nombre, rol, ...otrosDatos, activo: true };

console.log(usuarioModificado);