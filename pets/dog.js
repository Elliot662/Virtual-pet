import Pet from "./pets.js"

class Dog extends Pet{
    constructor(name){
        super(name)
    }
    play(){
        this.happiness += 25
        this.stamina -= 10
        this.health -=10
        this.thirst -= 15
        this.hunger -= 15
        console.log(`You have taken ${this.name} for a walk`)
        return this
    }
    look(){
        console.log("            __")
        console.log("(),--------'()'--o")
        console.log(' (_    ___    /~"')
        console.log("  (_)_)  (_)_)")
    }
}

export default Dog