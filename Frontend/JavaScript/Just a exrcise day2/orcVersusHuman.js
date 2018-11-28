// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?

function orcVersusHuman() {

    var orcHitpoints = 720;
    var orcDamage = orcDoesDamage();
    var orcArmor = 5;

    var humanHitpoints = 550;
    var humanDamage = humanDoesDamage();
    var humanArmor = 9;

    while (orcHitpoints > 0 && humanHitpoints > 0) {

        humanHitpoints -= orcDamage + humanArmor;
        orcHitpoints -= humanDamage + orcArmor;

        if (humanHitpoints <= 0) {
            return console.log("Orc win!");

        } else if (orcHitpoints <= 0) {
            return console.log("Human win!");
        }

    }
}

function humanDoesDamage() {
    var min = 18;
    var max = 27;

    var humanFootmanDamage = Math.floor(Math.random() * (max - min + 1) + min);
    return humanFootmanDamage;
}

function orcDoesDamage() {
    var min = 23;
    var max = 35;

    var orcWarriorDamage = Math.floor(Math.random() * (max - min + 1) + min);
    return orcWarriorDamage;
}

orcVersusHuman();
