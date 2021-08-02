//ejercicio 1
// Recorrer un arreglo de numeros enteros y sumarlos en una variable N.
//let A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// Prohibido usar un ciclo For.

// let numeros = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
// let i = 0;
// const sumarN = numeros.reduce((sumarN, current) => sumarN + current, i);
// console.log(sumarN);


// ejercicio 2
// Recorrer un arreglo de numeros enteros, Si el entero es par, multiplicarlo por su mismo valor.
//  A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
//devolver el resultado de los enteros que cumplen con la condición en un nuevo array.

// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
// let pares = [];
// let sum = 0;
// let i= 0;
// while (i <= aA.length) {
//     if (aA[i] % 2 == 0) {
//       sum = aA[i] * aA[i];
//       pares.push(sum); 
//     } 
//     i++;
// };
// console.log(pares);


// ejercicio 3, Recorrer un arreglo de enteros, generar un nuevo arreglo
//let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// con valores que sean raiz cuadradas con resultado entero,
// es decir USANDO LA FUNCIÓN Math.sqrt() si el resultado es entero, guardarlo en un nuevo arreglo,
// sino no hacer nada. 

// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4,25,9,49];
// let arrayRaizCuadrada = [];
// let i = 0;
// while (i <= aA.length) {
//     if (Math.sqrt(aA[i]) % 1 == 0) {
//       arrayRaizCuadrada.push(aA[i]);  
//     }
//     i++;
// };
// console.log(arrayRaizCuadrada);


// // ejercicio 4, dado un arreglo de enteros, eliminar del arreglo original todos los valores 
// //impares
// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// let i= 0;
// while (i <= aA.length) {
//     if (aA[i] % 2 == 1) {
//       aA.splice(i, 1); 
//     } 
//     i++;
// };
// console.log(aA);

// // ejercicio 5, dado un arreglo de enteros, generar el reverso del arreglo 
// //  PISTA: USAR DECREMENTO.
// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// let reverso = [];
// let i = aA.length - 1;
// while (i >= 0) {
//     reverso.push(aA[i]);
//     i = i - 1;
// };
// console.log(reverso);

