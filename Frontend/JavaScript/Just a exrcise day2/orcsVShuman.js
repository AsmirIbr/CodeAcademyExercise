// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?

function Fighter(name, hitpoints, damageMin, damageMax, armor){
    this.name = name;
    this.hitpoints = hitpoints;
    this.damageMin  =  damageMin;
    this.damageMax = damageMax;
    this.armor = armor;
    this.doesDamage = function(){

        return Math.floor(Math.random() * (this.damageMax - this.damageMin + 1) + this.damageMin);
    }
}

var orc = new Fighter ("Orc", 750, 23, 35, 5);

var human = new Fighter ("Human", 650, 20, 27, 9);

var wolfRider = new Fighter ("Wolf Rider", 810, 28, 33, 9);

var knight = new Fighter ("Knight", 1100, 31, 37, 15);



function orcVShuman(orc, human){
    while(orc.hitpoints, human.hitpoints){

        human.hitpoints -= orc.doesDamage() + human.armor;
        orc.hitpoints -= human.doesDamage() + orc.armor;

        if (human.hitpoints <= 0) {
            return console.log("Orc win!");

        } else if (orc.hitpoints <= 0) {
            return console.log("Human win!");
        }
    }

}

orcVShuman(orc, human);


function orcsVShumans(orc, human, wolfRider, knight){
    while(orc.hitpoints, wolfRider.hitpoints, human.hitpoints, knight.hitpoints){

        human.hitpoints -= orc.doesDamage() + human.armor;
        orc.hitpoints -= human.doesDamage() + orc.armor;
        knight.hitpoints -= wolfRider.doesDamage() + knight.armor;
        wolfRider.hitpoints -= knight.doesDamage() + wolfRider.armor;

        if (human.hitpoints <= 0 || knight.hitpoints <= 0) {
            return console.log(orc.hitpoints + " " + wolfRider.hitpoints + " Orcs wins!" + human.hitpoints + " " + knight.hitpoints);

        } else if (orc.hitpoints <= 0 || wolfRider.hitpoints <= 0) {
            return console.log(orc.hitpoints + " " + wolfRider.hitpoints + " Humans wins!" + human.hitpoints + " " + knight.hitpoints);
        }
    }

}

orcsVShumans(orc, human, wolfRider, knight);