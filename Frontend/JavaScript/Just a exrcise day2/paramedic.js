// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. The whole process lasts one minute. Every second he has to massage the patient's heart (console.log(“performing insertAction”);). Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.

function paramedic() {
    var time = 60;

    for (var i = 0; i < time; i++) {

        if (i % 15 === 0) {
            console.log("Check pulse");

        } else {
            console.log("Heart massage");
        }
    }
    if (time - 1) {
        console.log("Patient is alive");
    }
}

paramedic();