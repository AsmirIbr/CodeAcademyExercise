// A girl tries to impress a boy by flirting with him. Every flirt she makes is worth 1 point, every third flirt is worth 5 points and every 5th flirt is worth 10 points. Every 10th flirt the boy gets tired and deducts the girl’s points by 12. Write a function that will calculate if the girl impressed the boy or not, by accepting the number of tries the girl should use and the number of hitpoints the boy has, as function parameters.

function girlsAreWeird(tries, hitpoints) {

    for (var i = 0; i < tries; i++) {

        if (i % 10 === 0) {
            hitpoints -= 10;

        } else if (i % 5 === 0) {
            hitpoints += 10;

        } else if (i % 3 === 0) {
            hitpoints += 5;

        } else {
            hitpoints += 1;
        }
    }

    if (hitpoints <= 0) {
        console.log("Mens are awesome");
        
    } else {
        console.log("Girls are better")
    }
}

girlsAreWeird(15, 15);