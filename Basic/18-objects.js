// Objetos

// Sintaxis

let person = {
    name: "samuel",
    age: 17,
    alias: "samu"
}

// Acceso a propiedades

// Notacion punto
console.log(person.name)


// Notacion de corchetes
console.log(person["name"])


// Modificacion

person.name = "samuel jimenez"
console.log(person.name)

console.log(typeof person.age)
person.age = "17"
console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.email = "samuel@gmail.com"
person["age"] = 17

console.log(person)

// Metodos (funciones)

let person2 = {
    name: "samuel",
    age: 17,
    alias: "samu",
    walk: function() {
        console.log("La persona camina")
    }
}

person2.walk()

// Anidacion de objects

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
        work: function() {
            console.log("La persona trabaja")
        }
    }
}


console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objects

console.log(person)

let person4 = {
name: 'samuel jimenez',
alias: 'samu',
email: 'samuel@gmail.com',
age: 17
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)