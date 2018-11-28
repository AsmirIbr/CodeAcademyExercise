// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function sumTheMultiples() {
    var result = 0;
    
    for (var i = 1; i < 1000; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            result += i;
        }
    }
    console.log(result);
}
