class Pet {
    constructor(name){
        this.name = name
        this.health = 90
        this.stamina = 100
        this.thirst = 60
        this.hunger = 60
        this.happiness = 80
    }
    status(){
        return console.table({
            name: this.name,
            health: this.health,
            stamina: this.stamina,
            thirst: this.thirst,
            hunger: this.hunger,
            happiness: this.happiness
        })
    }
    drink(){
        this.health += 5
        this.thirst += 20
        this.hunger -= 5
        this.happiness -= 1
        console.log(`${this.name} just had a drink`)
        return this
    }
    eat(){
        this.health += 20
        this.hunger += 20
        this.thirst -= 5
        this.happiness -= 1
        console.log(`${this.name} just eat some food`)
        return this
    }
    sleep(){
        this.stamina = 100
        this.health += 60
        this.hunger -= 10
        this.thirst -= 10
        this.happiness -= 10
        console.log(`${this.name} is having a nap`)
        return this
    }
}

export default Pet