import Cat from "./pets/cat.js"
import Dog from "./pets/dog.js"
import Rabbit from "./pets/rabbit.js"
import inquirer from "inquirer"
let myPet

const start = async () => {
    const { typeOfPet } = await inquirer.prompt({
        type: "list",
        name: "typeOfPet",
        message: "Please select your virtual pet",
        choices: [
            {
                key: "a",
                name: "cat",
                value: "cat",
            },
            {
                key: "b",
                name: "dog",
                value: "dog",
            },
            {
                key: "c",
                name: "rabbit",
                value: "rabbit",
            },
        ],
    })
    const { petName } = await inquirer.prompt({
        type: "input",
        name: "petName",
        message: "Please name your pet",
    })

    if (typeOfPet === "cat") {
        myPet = new Cat(petName)
    } else if (typeOfPet === "dog") {
        myPet = new Dog(petName)
    } else if (typeOfPet === "rabbit") {
        myPet = new Rabbit(petName)
    }
    console.log(`You have adopted ${myPet.name}`)
    userChoice()
}

let userChoice = async () => {
    const { choice } = await inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Please select an option",
        choices: [
            {
                key: "a",
                name: "See your pets status",
                value: "status",
            },
            {
                key: "b",
                name: "Give your pet a drink",
                value: "drink",
            },
            {
                key: "c",
                name: "Give your pet food",
                value: "eat",
            },
            {
                key: "d",
                name: "Play with your pet",
                value: "play",
            },
            {
                Key: "e",
                name: "Let your pet take a nap",
                value: "sleep",
            },
            {
                key: "f",
                name: "Look at your pet",
                value: "look",
            },
            {
                key: "g",
                name: "Exit the game",
                value: "quit",
            },
        ],
    })

    if (choice === "status") await myPet.status1()
    if (choice === "drink") await myPet.drink()
    if (choice === "eat") await myPet.eat()
    if (choice === "play") await myPet.play()
    if (choice === "sleep") await myPet.sleep()
    if (choice === "look") await myPet.look()
    if (choice === "quit") {
        const quitChoice = await confirmQuit()
        if (quitChoice) return
    }

    myPet.status()
    userChoice()
}

let confirmQuit = async () => {
    const { quitChoice } = await inquirer.prompt({
        type: "list",
        name: "quitChoice",
        message: "Do you wish to quit",
        choices: [
            {
                key: "a",
                name: "Yes",
                value: "yes",
            },
            {
                key: "b",
                name: "No",
                value: "no",
            },
        ],
    })
    if (quitChoice === "yes") return true
    else return false
}

start()