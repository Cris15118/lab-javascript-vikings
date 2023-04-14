// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack = ()=>{

      return this.strength
    }
    receiveDamage = (soldierDamage)=>{

        this.health = this.health - soldierDamage
        
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
   super( health, strength)
   this.name=name;
   } 
   receiveDamage = (vikingDamage) => {
    this.health = this.health - vikingDamage
    if ( this.health > 0){
        return `${this.name} has received ${vikingDamage} points of damage`
    }else {
        return `${this.name} has died in act of combat`
    }
    
   }

   battleCry = () =>{
    return `Odin Owns You All!` 
    }
}

// Saxon
class Saxon extends Soldier{
   
    receiveDamage = (saxonDamage) => {
        this.health = this.health - saxonDamage
        if ( this.health > 0){
            return `A Saxon has received ${saxonDamage} points of damage`
        }else {
            return `A Saxon has died in combat`

        }
}
}
// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking = (viking)=>{
        this.vikingArmy.push(viking)
    }
     addSaxon = (saxon)=> {
    this.saxonArmy.push(saxon)
}
vikingAttack = () => {
   let saxonRandom = Math.floor(Math.random()*this.saxonArmy.length);
   let vikingRandom = Math.floor(Math.random()*this.vikingArmy.length);
   
   let oneViking = this.vikingArmy[vikingRandom]
   let oneSaxon = this.saxonArmy[saxonRandom]
   
   if(oneSaxonhealth < 0){
        this.saxonArmy.shift()
   }
   return oneSaxon.receiveDamage(oneViking.strength)
  
}
saxonAttack = () => {
    let vikingRandom = Math.floor(Math.random()*this.vikingArmy.length);
   let saxonRandom = Math.floor(Math.random()*this.saxonArmy.length);
   
   let oneViking = this.vikingArmy[vikingRandom]
   let oneSaxon = this.saxonArmy[saxonRandom]
   

    if(oneViking.health < 0){
    this.vikingArmy.shift()
   }
return oneViking.receiveDamage(oneSaxon.strength)
}
showStatus = ()=> {
    if(this.saxonArmy.length === 0){
        return"Vikings have won the war of the century!"

    }else if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."

    }else { 
        return "Vikings and Saxons are still in the thick of battle."
    }
}

}
   
