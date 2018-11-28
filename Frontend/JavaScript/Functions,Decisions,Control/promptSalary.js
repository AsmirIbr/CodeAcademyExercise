// Excerise 5 = Calculate the tax that people need to pay for their salary. Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, they pay 18% for the sum above the threshold. (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). Modify the function to check if the worker is a craftsman, if he is, drop the taxes to 5% and 10% respectively

var salary = prompt("Are you a craftsman?");
var result;

if (salary === "yes") {
    var approved = prompt("Enter your salary");

    if (approved <= 1000) {
        result = approved * 0.05;
        alert("Your taxes is " + result + "eur, " + "of 5%")

    } else if (approved > 1000) {
        tax10 = approved - 1000;
        Tax10 = tax10 * 0.10;
        tax5 = approved - tax10;
        Tax5 = tax5 * 0.05;
        result = Tax10 + Tax5;
    }

alert("Your taxes is " + result + "eur, " + Tax10 + " eur of 10%, " + Tax5 + " eur of 5%");

} else if (salary === "no") {
    var denied = prompt("Enter your salary");

    if (denied <= 1000) {
        result = denied * 0.11;
        alert("Your taxes is " + result + "eur, " + "of 11%")

    } else if (denied > 1000) {
        tax18 = denied - 1000;
        Tax18 = tax18 * 0.18;
        tax11 = denied - tax18;
        Tax11 = tax11 * 0.11;
        result = Tax18 + Tax11;
    }

alert("Your taxes is " + result + "eur, " + Tax18 + " eur of 18%, " + Tax11 + " eur of 11%");
}
    