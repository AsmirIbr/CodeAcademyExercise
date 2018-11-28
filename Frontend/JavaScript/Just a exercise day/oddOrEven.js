// Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen (alert or console.log).


function oddOrEven() {
    for (i = 1; i < 15; i++) {

        if ((i % 2) === 0) {
            console.log("Even numbers is " + i);

        } else if ((i % 2) === 1) {
            console.log("Odds numbers is " + i);
        }

    }
}