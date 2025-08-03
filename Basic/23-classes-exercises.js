// 1. Crea una clase que reciba dos propiedades

// 2. Añade un metodo a la clase que utilice las propiedades
class  Car {

    constructor (modelo, matricula) {
    this.modelo = modelo
    this.matricula = matricula
    }

    run() {
        console.log("El carro corre")
    }

}

// 3. Muestra los valores de las propiedades e invoca la funcion
let myCar = new Car ("Toyota", "AB2020")
console.log(myCar)
myCar.run()

// 4. Añade un metodo estatico a la primera clase
class  Car0 {

    constructor (modelo, matricula) {
    this.modelo = modelo
    this.matricula = matricula
    }

    run() {
        console.log("El carro corre")
    }

    static descubrirClase () {
        console.log(" la clase Car, usada para crear objetos de vehículos.")
    }

    static obtenerNumeroDeRuedas() {
    return 4
}

}

// 5. Haz el uso del metodo estatico
class Suma {
    
    static sum(a = 5, b = 5) {
        return a * b
    }
}

console.log(Suma.sum())

// 6. Crea una clase que haga una herencia
class Carro {

    constructor(modelo, año, matricula) {
        this.modelo = modelo
        this.año = año
        this.matricula = matricula
    }

}

class Car1 extends Carro {
    canMove() {
        console.log("El carro puede superar las 100 mhp")
    }
}


class Car2 extends Carro {
    canMove() {
        console.log("El carro puede superar las 50 mhp")
    }
}

let myCar1 = new Car1("Toyota", 2018, "AB2020")
console.log(myCar1)
myCar1.canMove()

let myCar2 = new Car2("Mazda",2010, "AB2010")
console.log(myCar2)
myCar2.canMove()

// 7. Crea una clase que haga uso de getters y setters
class GetSetters {

#email
#bank

    constructor(email, bank) {
        this.#email = email
        this.#bank = bank
    }

    get email() {
        return this.#email
    }

    set bank(newBank) {
        this.#bank = newBank
    }
    get bank() {
        return this.#bank;
    }
}

let myGetSetters = new GetSetters("Samuel@gmail.com", "ASU28170")



// 8. Modifica la clase con getters y setters para que use propiedades privadas
// Ya lo hice arriba

// 9. Utiliza los get y set y muestra sus valores
console.log(myGetSetters.email)
console.log(myGetSetters.bank)

// 10. Sobrescribe un metodo de una clase que utilice herencia

class Padre {
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}

class Hijo extends Padre {

    constructor(name = "Marcos", age = 17) {
        this.name = name
        this.age = age
    }
    talk() {
        console.log("El hijo habla con su padre")
    }
}

class Hija extends Padre {

    constructor(name = "Diana", age = 16) {
        this.name = name
        this.age = age
    }
    talk() {
        console.log("La hija habla con su padre")
    }
}

let myPadre = new Padre()

console.log(myPadre)
