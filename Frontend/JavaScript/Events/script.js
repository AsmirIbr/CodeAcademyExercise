// -Create a Javascript function that changes an element’s style.
// -Create one paragraph with text, and one button
// -Call the function changeStyle() when you click on the button
// -The paragraph should change its Color,Font Style, and Font Size.

function Paragraph() {
    var mainContainer = document.getElementsByClassName("main-div")[0];

    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit totam enim aliquid quas facilis iusto corrupti maiores obcaecati, quia harum cum similique placeat doloribus ea iure? Odio placeat sint culpa!";

    mainContainer.appendChild(paragraph);

    paragraph.addEventListener("click", function (event) {
        event.target.style.color = "red";
        event.target.style.fontStyle = "Helvetica";
        event.target.style.fontSize = "30px";
    })
}

Paragraph();




// -Write a JavaScript function to get the width and height of the browser window
// -The function should print the height and width when you resize the window.


function Resize() {
    window.addEventListener("resize", function () {

        this.console.log(innerWidth, innerHeight);

    })
}

Resize();




// -Create a HTML form , with 4 inputs for FirstName,LastName,Email and Password.
// -Create a button, on click call a function to get all input values.
// -Create an object in the callback function.
// -Pass the values of the form as parameters when you construct the object.
// -Finally print the object.
// -BONUS: validate the email if it’s really an email, and the password to be at least 8 characters.


function LogInForm() {
    var mainContainer = document.getElementsByClassName("main-div")[0];
    mainContainer.style.display = "flex";
    mainContainer.style.flexDirection = "column";

    var inputFirstName = document.createElement("input");
    inputFirstName.setAttribute("type", "text");
    inputFirstName.setAttribute("placeholder", "First Name");
    inputFirstName.style.width = "300px";
    inputFirstName.style.marginBottom = "5px";

    mainContainer.appendChild(inputFirstName);

    var inputLastName = document.createElement("input");
    inputLastName.setAttribute("type", "text");
    inputLastName.setAttribute("placeholder", "Last Name");
    inputLastName.style.width = "300px";
    inputLastName.style.marginBottom = "5px";

    mainContainer.appendChild(inputLastName);

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("placeholder", "example@mail.com");
    inputEmail.style.width = "300px";
    inputEmail.style.marginBottom = "5px";

    mainContainer.appendChild(inputEmail);

    var inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("placeholder", "Password");
    inputPassword.style.width = "300px";
    inputPassword.style.marginBottom = "5px";

    mainContainer.appendChild(inputPassword);

    var button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.style.width = "300px";
    button.style.marginBottom = "5px";

    mainContainer.appendChild(button);

    var invalidPass = document.createElement("span");
    invalidPass.style.fontSize = "12px";
    invalidPass.style.color = "red";
    invalidPass.id = "invalidPass"

    mainContainer.appendChild(invalidPass);

    var invalidMail = document.createElement("span");
    invalidMail.style.fontSize = "12px";
    invalidMail.style.color = "red";
    invalidMail.id = "invalidMail"

    mainContainer.appendChild(invalidMail);

    button.addEventListener("click", function () {

        var user = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            password: inputPassword.value
        }

        if (inputPassword.value.length < 8) {
            document.getElementById("invalidPass").innerHTML = "Invalid password, enter at least 8 characters";
        };

        if (inputEmail.value.indexOf("@") === -1) {
            document.getElementById("invalidMail").innerHTML = "Invalid email, ex: example@mail.com";
        }

        console.log(user)
    });
}

LogInForm();