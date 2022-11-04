import Cat from "./pets/cat.js"
import Dog from "./pets/dog.js"
import Rabbit from "./pets/rabbit.js"
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
                name: "See your pets status",
                value: "status",
            },
            {
                name: "Give your pet a drink",
                value: "drink",
            },
            {
                name: "Give your pet food",
                value: "eat",
            },
            {
                name: "Play with your pet",
                value: "play",
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

    if (choice === "status") await thePet.status1()
    if (choice === "drink") await thePet.drink()
    if (choice === "eat") await thePet.eat()
    if (choice === "play") await thePet.play()
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