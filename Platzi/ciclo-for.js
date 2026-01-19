// For

let list = ["eat", "sleep", "code", "repeat"]

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

// For in

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}


// For of

let canasta = ["manzana", "pera", "naranja", "uva"]

for (fruta of canasta) {
    console.log(fruta)
}