// Crear un array de este texto
// extraer las palabras palindromos en un nuevo arreglo de aceptados
// metodo split - reverse

// const  text  = "Algo menem abba itati fuego colina"

// let nuevoArray = text.split(" ");
// console.log(nuevoArray);
// console.log(nuevoArray.length);


// function stringInvertido (nuevoArray) {
//     nuevoArray[i].split('').reverse();
// }
// console.log(stringInvertido(nuevoArray[i])


// let aceptados = [];
// for (let i = 0; i < nuevoArray.length < -1; i++) {
//     if (nuevoArray[i].reverse("")) {
//         nuevoArray.push(aceptados[i])
//     }
// }

const otroArray = ["lorena", "menem"];

// crear un nuevo array
let arrayPalindromos = [];

for (let i = 0; i < otroArray.length; i++) {
    let nombre = otroArray[i];
    let nombreReverso = nombre.split("").reverse().join("");
    if (nombre === nombreReverso) {
       arrayPalindromos.push(nombre) //(otroArray[i]) 
    }
}
console.log(arrayPalindromos);