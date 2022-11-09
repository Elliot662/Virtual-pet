class Pet {
    constructor(name){
        this.name = name
        this.health = 90
        this.stamina = 100
        this.thirst = 60
        this.hunger = 60
        this.happiness = 80
        this.neReport = 0
        this.reported = 0
    }
    status(){
        return console.table({
            name: this.name,
            health: this.health,
            stamina: this.stamina,
            thirst: this.thirst,
            hunger: this.hunger,
            happiness: this.happiness,
        })
    }
    drink(){
        this.health += 5
        this.thirst += 20
        this.hunger -= 5
        this.happiness -= 1
        this.neReport -= 1
        console.log(`${this.name} just had a drink`)
        return this
    }
    eat(){
        this.health += 20
        this.hunger += 20
        this.thirst -= 5
        this.happiness -= 1
        this.neReport -= 1
        console.log(`${this.name} just eat some food`)
        return this
    }
    sleep(){
        this.stamina = 100
        this.health += 60
        this.hunger -= 10
        this.thirst -= 10
        this.happiness -= 10
        this.neReport -= 1
        console.log(`${this.name} is having a nap`)
        return this
    }
    passOut(){
        if(this.stamina >= 60){
            this.stamina -= 50
        } else if(this.stamina <= 10){
            this.stamina = 5
        } else{
            this.stamina = 10
        }
        this.health = 10
        this.hunger -= 20
        this.thirst -= 20
        this.happiness -= 25
        this.neReport += 20
        console.log(`${this.name} has passed out`)
        return this
    }
    passOut2(){
        if(this.health >= 11){
            this.health -= 10
        } else {
            this.health = 1
        }
        this.stamina = 60
        this.hunger -= 10
        this.thirst -= 10
        this.happiness -= 10
        this.neReport += 15
        console.log(`${this.name} has passed out due to exhaustion`)
        return this
    }
    report(){
        this.reported += 1
        console.log("Your neighbours have reported you to rspca for animal abuse")
        return this
    }
    investigation(){
        console.log("The rspca have opened an investigation in to possible animal abuse")
    }
    forcedQuit(){
        console.log(`The rspca have found evidence of animal abuse and have taken ${this.name}`)
    }
}

export default Pet