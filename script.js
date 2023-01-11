console.log("Page loaded...")

var accept = document.querySelector(".warning-container")
var arrF = ["75°","65°","80°","66°","69°","61°","78°","70°"]
var arrC = ["24°","18°","27°","19°","21°","16°","26°","21°"]
var id1 = document.querySelector("#one")
var id2 = document.querySelector("#two")
var id3 = document.querySelector("#three")
var id4 = document.querySelector("#four")
var id5 = document.querySelector("#five")
var id6 = document.querySelector("#six")
var id7 = document.querySelector("#seven")
var id8 = document.querySelector("#eight")

function cookieAccept(element) {
    accept.remove();
    console.log("Cookies accepted!");
}

function weatherReport(element) {
    alert("Loading weather report for " + element.text);
}

function measurementSelect(element) {
    if(id1.innerText == "24°") {
        id1.innerText = arrF[0];
        id2.innerText = arrF[1];
        id3.innerText = arrF[2];
        id4.innerText = arrF[3];
        id5.innerText = arrF[4];
        id6.innerText = arrF[5];
        id7.innerText = arrF[6];
        id8.innerText = arrF[7];
    } else {
        id1.innerText = arrC[0];
        id2.innerText = arrC[1];
        id3.innerText = arrC[2];
        id4.innerText = arrC[3];
        id5.innerText = arrC[4];
        id6.innerText = arrC[5];
        id7.innerText = arrC[6];
        id8.innerText = arrC[7];
        }
}