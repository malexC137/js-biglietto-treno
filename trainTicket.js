var kms = prompt("Quanti chilometri vuoi percorrere?");
// var age = prompt("Qual è la tua età?");
var age = Math.floor(Math.random() * (90 - 1) + 10);
var costPerKm = 0.21
var minAge = 20
var minDiscount = 0.2
var minCostPerKm = costPerKm - (costPerKm * minDiscount);
var maxAge = 65
var maxDiscount = 0.4
var maxCostPerKm = costPerKm - (costPerKm * maxDiscount);
var totCost = (parseFloat((kms * costPerKm).toFixed(2)));
var totCostMin = (parseFloat((kms * minCostPerKm).toFixed(2)));
var totCostMax = (parseFloat((kms * maxCostPerKm).toFixed(2)));

document.getElementById("distance").innerHTML = kms + " Km";
document.getElementById("randomAge").innerHTML = age + " Years old";
// document.getElementById("years").innerHTML = age + " Years old";

if (isNaN(kms)) {
    document.getElementById("distance").innerHTML = "<p class='red'>Your coiche cannot be executed</p>";
    document.getElementById("ticketCost").innerHTML = "<small class='red'>エラー</small>";
    /*document.getElementById("years").innerHTML = "<p class='red'>Your coiche cannot be executed</p>";
} else if (isNaN(age)) {
    document.getElementById("distance").innerHTML = "<p class='red'>Your coiche cannot be executed</p>";
    document.getElementById("ticketCost").innerHTML = "<small class='red'>エラー</small>";
    document.getElementById("years").innerHTML = "<p class='red'>Your coiche cannot be executed</p>";*/
} else {
    if (age < minAge) {
        document.getElementById("ticketCost").innerHTML = totCostMin + " ¥";
    } else if (age > maxAge) {
        document.getElementById("ticketCost").innerHTML = totCostMax + " ¥";
    } else {
        document.getElementById("ticketCost").innerHTML = totCost + " ¥";
    };
};