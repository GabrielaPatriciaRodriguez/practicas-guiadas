// Vamos a preguntar por los ingresos
var income = prompt("Cuanto es tu ingreso?");
// Vamos a preguntar por los costos
var costs = prompt("Cuanto es el costo?");
// Vamos a preguntar cuanto es el porcentaje de impuestos
var taxPercent = prompt("Cuanto es el porcentaje(%) de impuestos?");
// Debemos sacar la ganancia bruta
var grossProfit = income-costs;
// Obteniendo cantidad de impuestos
var tax = grossProfit*taxPercent/100;
//sacamos la ganancia neta
var netIncome = grossProfit-tax;
//Mostrando ganancia neta
document.write("tu ganancia neta es $ " + netIncome);