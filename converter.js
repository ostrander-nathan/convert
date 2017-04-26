var toC = document.getElementById("celsius");
var toF = document.getElementById("fahrenheit");

var tempOutput = document.getElementById("tempOutput")
var tempInput = document.getElementById("tempInput")

function toCelsius(tempInput) {
    return ((tempInput - 32) * .56);
}

function toFahrenheit(tempInput) {
    return ((tempInput * 9 / 5) + 32);
}

var button = document.getElementById("converter");
var toClear = document.getElementById("clear");
var color = document.getElementById("clear")


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(clickevent) {

    if (toF.checked === true && tempInput.value !== "") {
        var cTemp = toCelsius(tempInput.value);
        tempOutput.value = +cTemp.toFixed(1);
    } else if (toC.checked === true && tempInput.value !== "") {
        var fTemp = toFahrenheit(tempInput.value);
        tempOutput.value = +fTemp.toFixed(1);
    }
}
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
toClear.addEventListener("click", clearText);
var allRadios = document.getElementsByName('re');
var booRadio;
var x = 0;
for (x = 0; x < allRadios.length; x++) {

    allRadios[x].onclick = function() {
        if (booRadio == this) {
            this.checked = false;
            booRadio = null;
        } else {
            booRadio = this;
        }
    };
}
var allRadios = document.getElementsByName('re');
var booRadio;
var x = 0;
for (x = 0; x < allRadios.length; x++) {

    allRadios[x].onclick = function() {
        if (booRadio == this) {
            this.checked = false;
            booRadio = null;
        } else {
            booRadio = this;
        }
    };
}

function clearText() {
    tempInput.value = "";
    tempOutput.value = "";
}
