// Write a JavaScript program to get the integers in range (x, y). Input the range as parameters. Print the result as a string.

function integersInRange(x, y) {

    for (var i = x; i < y; i++) {
        var result = i.toString();
        console.log(result);
    }
}
