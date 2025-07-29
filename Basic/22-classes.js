// Clases

class Person {

    constructor(name, age, alias) { 
        this.name = name
        this.age = age
        this.alias = alias
    }

}


// Sintaxis

let person = new Person("Samuel", 17, "Jimenez")
let person2 = new Person("Samuel", 17, "Jimenez")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") { 
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Samue;", 17)
console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Jimenez"

console.log(person3.alias)

// Funciones a clases

class PersonWithMethod {

    constructor(name, age, alias) { 
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina")
    }

}

let person4 = new PersonWithMethod("Samuel", 17, "Jimenez")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) { 
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Samuel", 17, "Jimenez", "ibe293019")

console.log(person5.bank) // No podemos acceder

// Getters y Setters\

class GetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) { 
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetPerson("Samuel", 17, "Jimenez", "ibe293019")

console.log(person6)
console.log(person6.name)

person6.bank = "new ibe293019"