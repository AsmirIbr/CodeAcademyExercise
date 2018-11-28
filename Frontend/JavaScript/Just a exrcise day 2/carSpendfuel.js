// A car uses 7 litres of fuel on 100km. How much fuel will the car spend driving 43 kilometers? Use a loop instead of a mathematical formula.

function carSpendFuel() {
    var litres = 7 / 100;

    for (var i = 1; i <= 100; i++) {

        if (i === 43) {
            var result = i * litres;
        console.log("Car will spend " + result + " litres for driving " + i + " kilometers");
        }
    }
}

carSpendFuel()