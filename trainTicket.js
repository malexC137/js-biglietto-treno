var kms = prompt("Quanti chilometri vuoi percorrere?");
// var age = prompt("Qual è la tua età?");
var age = Math.floor(Math.random() * (100 - 1) + 1);
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

console.log(age);

if (age < minAge) {
    console.log(totCostMin);
    document.getElementById("ticketCost").innerHTML = totCostMin + " Euro";
} else if (age > maxAge) {
    console.log(totCostMax);
    document.getElementById("ticketCost").innerHTML = totCostMax + " Euro";
} else {
    console.log(totCost);
    document.getElementById("ticketCost").innerHTML = totCost + " Euro";
};
