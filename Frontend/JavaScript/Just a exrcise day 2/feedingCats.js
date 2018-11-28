// An old woman has 3 cats. She has to feed them every day for one week. The cats’ names are Tabby, Lizzie and Mary. Tabby likes fish and Lizzy likes chicken. Mary eats anything you give her. Help the woman feed her cats by writing a script that will feed them for a week. The actual feeding procedure is: console.log(nameofcat + “ started eating fish/chicken/whatever”);

function feedingCats(cats) {
    var cats = ["Tabby", "Lizzie", "Mary"];
    for (var i = 0; i < cats.length; i++) {

        if (cats[i] === "Tabby") {
            console.log(cats[i] + " started eating fish");

        } else if (cats[i] === "Lizzie") {
            console.log(cats[i] + " started eating chicken");

        } else {
            console.log(cats[i] + " started eating anything");
        }
    }
}


function feedingDays() {
    var cats = ["Tabby", "Lizzie", "Mary"];

    for (var i = 0; i <= 7; i++) {
        feedingCats(cats);
    }
}

feedingDays();