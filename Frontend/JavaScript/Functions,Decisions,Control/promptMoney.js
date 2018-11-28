// Exercise 1 = Ask the user how much money does he have, and depending on the value, suggest him what should he do ---------

var money = prompt("Do you have money?");

    if (money === "yes"){
        var moneyYes = prompt("Enter your money");

            if (moneyYes >=1000){
                alert("You are Donald Trump!!!");

            } else if (moneyYes < 1000 || moneyYes > 0 ){
                alert("Work on your financial status");

            } else {
                alert("Try again1")
            }

    } else if (money === "no"){
        alert("Work on your financial status and come back");
        
    } else {
        alert("Try again");
    }
