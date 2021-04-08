var kms = prompt("Quanti chilometri vuoi percorrere?");
var age = prompt("Qual è la tua età?");
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


if (age < minAge) {
    console.log(totCostMin);
} else if (age > maxAge) {
    console.log(totCostMax);
} else {
    console.log(totCost);
};
