// Social Media Profile

// 1. User Information
const userName = "Samuel0807"
const fullName = "Samuel Jimenez"
const age = 17
const ifStudent = true
const city = "Techville"

// 2. Address
const address = {
    street: "123 main street",
    city: "Techville",
    state: "Codingland",
    zipCode: 54321
}

// 3. Hobbies
const hobbies = ["Coding", "Reading", "Gaming"]

// 4. Genereting Personalized bio
const personalizedbio = ` Hola, soy ${"Samuel Jimenez"}.
Tengo ${age} años de edad.
Vivo en la calle ${city}.
Amo los ${hobbies.join(", ")}.
Aprendiendo a codificar`

// 5. Print de user profile and bio
console.log(personalizedbio)