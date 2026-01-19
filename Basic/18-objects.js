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
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja`)
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

// Iteracion

for (let value in person4) {
    console.log(value)
}

for (let key in person4) {
    console.log(key + ":" + person4[key])
}

// Persona como objetos

function Person(name, age) { // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Samuel", 17)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)