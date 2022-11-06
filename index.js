import Cat from "./pets/cat.js"
import Dog from "./pets/dog.js"
import Rabbit from "./pets/rabbit.js"
import Lion from "./pets/lion.js"
import inquirer from "inquirer"
let thePet

const start = async () => {
    const { theAnimal } = await inquirer.prompt({
        type: "list",
        name: "theAnimal",
        message: "Please select your virtual pet",
        choices: [
            {
                name: "cat",
                value: "theCat",
            },
            {
                name: "dog",
                value: "theDog",
            },
            {
                name: "rabbit",
                value: "theRabbit",
            },
            {
                name: "lion",
                value: "theLion",
            },
        ],
    })
    const { theNameOfThePet } = await inquirer.prompt({
        type: "input",
        name: "theNameOfThePet",
        message: "Please name your pet",
    })

    if (theAnimal === "theCat") {
        thePet = new Cat(theNameOfThePet)
    } else if (theAnimal === "theDog") {
        thePet = new Dog(theNameOfThePet)
    } else if (theAnimal === "theRabbit") {
        thePet = new Rabbit(theNameOfThePet)
    } else if (theAnimal === "theLion") {
        thePet = new Lion(theNameOfThePet)
    }

    console.log(`You have adopted ${thePet.name}`)
    userChoice()
}

let userChoice = async () => {
    const { choice } = await inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Please select an option",
        choices: [
            {
                name: "Give your pet food",
                value: "eat",
            },
            {
                name: "Give your pet a drink",
                value: "drink",
            },
            {
                name: "Play with your pet",
                value: "play",
            },
            {
                name: "Take your pet for a walk",
                value: "walk",
            },
            {
                name: "Let your pet take a nap",
                value: "sleep",
            },
            {
                name: "Look at your pet",
                value: "look",
            },
            {
                name: "Exit the game",
                value: "quit",
            },
        ],
    })

    if (choice === "eat") await thePet.eat()
    if (choice === "drink") await thePet.drink()
    if (choice === "play") await thePet.play()
    if (choice === "walk") await thePet.walk()
    if (choice === "sleep") await thePet.sleep()
    if (choice === "look") await thePet.look()
    if (choice === "quit") {
        const quitChoice = await confirmQuit()
        if (quitChoice) return
    }

    thePet.status()
    userChoice()
}

let confirmQuit = async () => {
    const { quitChoice } = await inquirer.prompt({
        type: "list",
        name: "quitChoice",
        message: "Do you wish to quit",
        choices: [
            {
                name: "Yes",
                value: "yes",
            },
            {
                name: "No",
                value: "no",
            },
        ],
    })
    if (quitChoice === "yes") return true
    else return false
}

start()