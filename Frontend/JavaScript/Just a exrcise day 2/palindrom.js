// Write a script to check whether a number is a palindrome or not. Input the number as a parameter.

function palindrome(value) {

    var isPalindrom = palindromeFunc(value);

    if (isPalindrom === true) {
        console.log("The number " + value + " is a palindrome");
        
    } else {
        console.log("The number " + value + " isn't a palindrome");
    }
}

function palindromeFunc(value) {
    var sum = 0;
    var valueVariable = value;

    while (value) {
        var digit = value % 10;
        var value = Math.floor(value / 10);
        sum = sum * 10 + digit;

    } if (sum === valueVariable) {
        return true;

    } else {
        return false;
    }
}


palindrome(1221);
palindrome(1234);