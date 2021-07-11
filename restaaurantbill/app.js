let restaurantBill = parseInt(prompt("Cuanto es el total de la cuenta?"));
let tax = restaurantBill*0.1;
let theTotal = restaurantBill + tax;
console.log("El total de la cuenta con los impuestos es " + "$ " + theTotal)
document.write("El total de la cuenta con los impuestos es " + "$ " + theTotal)