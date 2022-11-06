import Pet from "./pets.js"

class Rabbit extends Pet{
    constructor(name){
        super(name)
    }
    play(){
        this.happiness += 25
        this.stamina -= 10
        this.health -=10
        this.thirst -= 15
        this.hunger -= 15
        console.log(`You are playing tug of war with ${this.name}`)
        return this
    }
    walk(){
        console.log(`${this.name} is a rabbit that would rather room about inside`)
    }
    look(){
        console.log(" /)/)")
        console.log("( -.-)")
        console.log('o_(")(")')
    }
}

export default Rabbit