const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow functions - explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow functions - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, yo soy ${name} ${lastName}`


// Lexical Binding

const fictionalCharacter = {
    name: "Uncle Ben",
    messageWithTradicionalFuncion: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFuncion: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageWithTradicionalFuncion("With great power comes great responsability.")
fictionalCharacter.messageWithArrowFuncion("Beware of Doctor Octopus.")