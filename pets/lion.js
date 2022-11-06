import Pet from "./pets.js"

class Lion extends Pet{
    constructor(name){
        super(name)
    }
    play(){
        this.happiness += 25
        this.stamina -= 10
        this.health -=10
        this.thirst -= 15
        this.hunger -= 15
        console.log(`${this.name} is a lion. You want to play with a lion well ok`)
        return this
    }
    walk(){
        this.happiness += 25
        this.stamina -= 10
        this.health -=10
        this.thirst -= 15
        this.hunger -= 15
        console.log(`You want to walk a lion. Well ok its your funeral. You took ${this.name} for a walk`)
        return this
    }
    look(){
        console.log("           ,  ,, ,")
        console.log("      , ,; ; ;;  ; ;  ;")
        console.log("   , ; ';  ;  ;; .-''| ; ;")
        console.log(", ;  ;`  ; ,; . / /8b | ; ;")
        console.log("`; ; .;'         ;,|8 |  ;  ;")
        console.log(" ` ;/   / `_      ; ;;    ;  ; ;")
        console.log("    |/.'  /9)    ;  ; `    ;  ; ;")
        console.log("   ,/'          ; ; ;  ;   ; ; ; ;")
        console.log("  /_            ;    ;  `    ;  ;")
        console.log(' `?8P"  .      ;  ; ; ; ;     ;  ;;')
        console.log(" | ;  .:: `     ;; ; ;   `  ;  ;")
        console.log(" `' `--._      ;;  ;;  ; ;   ;   ;")
        console.log("  `-..__..--''   ; ;    ;;   ; ;   ;")
        console.log("              ;    ; ; ;   ;     ;")
    }
}

export default Lion