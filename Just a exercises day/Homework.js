function sumWithoutPrimes(value) {

    var sum = 0;
    var sum1 = [];
    for (var i = 2; i <= value; i++) {
        if (isPrime(i)) {
            sum += i;
        } else {
            sum1 += i + ", ";
        }
    }
    console.log(sum, [sum1]);
}

function isAprime(value) {
    for (var i = 2; i < value; i++) {
        if (!(value % i)) {
            return false;
        }
    }
    return true;
}