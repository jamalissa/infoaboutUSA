/* function gibAlterAus(meinname, meinezahl){
    console.log(meinname + " was vor vielen Jahren" + meinezahl);
}


gibAlterAus(name, zahl);

var zahl = 28;
var name = 'Torsten';

gibAlterAus(name, zahl);

var zahl = 30;
var name = 'Nicole';

gibAlterAus(name, zahl);

var zahl = 60;
var name = 'Horst'; */

function timeToLastCourse() {
    // Datum heute
    var today = new Date();

    // Datum letzter Kurstag: 24.06.2019
    var lastCourse = new Date("2019-06-24");
    // Umwandlung von Millisekunden in Tage
    var difference = (lastCourse - today) / 1000 / 60 / 60 / 24;

    difference = Math.floor(difference);

    document.getElementById("timeToLastCourse").textContent = difference + " Tage";

    console.log(difference);
}

timeToLastCourse();

function checkForm(){
    /* Wert des Feldes Nachricht */
    var message = document.getElementsByName("message")[0].value;

    /* Werdes Feldes E-Mail */
    var email = document.getElementsByName("email")[0].value;

    /* Fehlermeldungen */
    var errorMessages = "";

    /* Prüfung Nachricht */
    if (message === ""){
        /* Fehlermeldung setzen */
        errorMessages = "Bitte füllen Sie das Feld Nachrichten.\n";
        alert("Bitte füllen Sie das Feld Nachrichten.");
    }
/* Prüfung E-Mail */
    if (email === ""){
        /* Fehlermeldung setzen */
        errorMessages += "Bitte füllen Sie das Feld E-Mail.\n";
        alert("Bitte füllen Sie das Feld E-Mail.");
    } else if (email.indexOf("@") === -1){
        errorMessages += "Bitte eine korrekte E-Mail eintragen.\n";
        alert("Bitte eine korrekte E-Mail eintragen.");
    }

    /* Prüfung auf Fehlermeldungen */
    if (errorMessages === "") {
        errorMessages = "Danke für die Eingabe von korrekten Daten!";
        alert("Danke für die korrekte Eingabe ihrer Daten!");
    }
    console.log(errorMessages);
}

document.getElementById("submitButton").addEventListener("click", checkForm);














