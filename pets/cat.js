import Pet from "./pets.js"
class Cat extends Pet {
    constructor(name) {
        super(name)
    }
    play() {
        this.happiness += 25
        this.stamina -= 10
        this.health -= 10
        this.thirst -= 15
        this.hunger -= 15
        console.log(`You are using a laser pointer to play with ${this.name}`)
        return this
    }
    walk(){
        console.log(`${this.name} is a cat and you don't take cats for walks`)
    }
    look() {
        console.log("     //_//            __")
        console.log("   = o_o =_______    / / ")
        console.log("    __^      __(  ).__) )")
        console.log("(@)<_____>__(_____)____/")
    }
}

export default Cat