//Write a JavaScript program to find the armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 

function allArmstrong() {

    for (var value = 100; value < 1000; value++) {
        var isArmstrong = armstrongFunc(value);

        if (isArmstrong) {
            console.log(value);
        }
    }
}

function armstrongFunc(value) {
    var audition = 0;
    var valueVariable = value;

    while (value) {
        var digit = value % 10;
        var value = Math.floor(value / 10);
        audition += Math.pow(digit, 3);

    } if (audition === valueVariable) {
        return true;

    } else {
        return false;
    }
}



//Najdov nesto interesno i morav da go sochuvam :)

var number = prompt("Enter a number");
var numberOfDigits = number.length;
var sum = 0;

for (i = 0; i < numberOfDigits; i++) {
    sum += Math.pow(number.charAt(i), numberOfDigits);
}

if (sum == number) {
    alert("The entered number is an Armstrong number.");

} else {
    alert("The entered number is not an Armstrong number.");
}
