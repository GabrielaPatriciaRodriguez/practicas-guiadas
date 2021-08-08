//ejercicio 1
// Recorrer un arreglo de numeros enteros y sumarlos en una variable N.
//let A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// Prohibido usar un ciclo For.

//let numeros = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
// let sumaTotal = 0;

// let i = 0;
// while (i < numeros.length) {
//     sumaTotal =+ numeros[i];
//     i++;
// };
// console.log(sumaTotal);

//USANDO REDUCE:

// const sumarN = numeros.reduce((sumarN, current) => sumarN + current, i);
// console.log(sumarN);

// let elementos = [1,2,3,4,5];

// let initial = 10;
// let sumar = elementos.reduce((a, b) => a + b, initial); // si es cero no es necesario poner initial
// console.log(sumar);

// let numeros = [20, 30, 50];
// let initial = 100;
// let sumar = numeros.reduce((a, b)=> a + b, initial);
// console.log(sumar);


// ejercicio 2
// Recorrer un arreglo de numeros enteros, Si el entero es par, multiplicarlo por su mismo valor.
//  A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
//devolver el resultado de los enteros que cumplen con la condición en un nuevo array.

// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
// let pares = [];
// let sum = 0;
// // let i= 0;
// // while (i <= aA.length) {
// //     if (aA[i] % 2 == 0) {
// //       sum = aA[i] * aA[i];
// //       pares.push(sum); 
// //     } 
// //     i++;
// // };
// // console.log(pares);


// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
// let pares = [];
// let sum = 0;
// for (let i = 0; i <= aA.length; i++) {
//     if (aA[i] % 2 == 0) {
//       sum = aA[i] * aA[i];
//       pares.push(sum);
//     };
// };
// console.log(pares);

/*Ocupar metodo Filter 
map para multiplicarlos x su mismo valor


// ejercicio 3, Recorrer un arreglo de enteros, generar un nuevo arreglo
//let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// con valores que sean raiz cuadradas con resultado entero,
// es decir USANDO LA FUNCIÓN Math.sqrt() si el resultado es entero, guardarlo en un nuevo arreglo,
// sino no hacer nada. 

/*Filter y map

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
//let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
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
let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// let reverso = [];
// let i = aA.length - 1;
// while (i >= 0) {
//     reverso.push(aA[i]);
//     i = i - 1;
// };
// console.log(reverso);

/*Ocupar reverse*/

// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// aA.reverse();
// console.log(aA);

//ejercicio 4, dado un arreglo de enteros, eliminar del arreglo original todos los valores 
//impares
//let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// let i= 0;
// while (i <= aA.length) {
//     if (aA[i] % 2 == 1) {
//       aA.splice(i, 1); 
//     } 
//     i++;
// };

// let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];

// for (i = 0; i <= aA.length; i++) {
//     if (aA[i] % 2 == 1) {
//         aA.splice(i, 1);
//     };
// }
// console.log(aA);


// ejercicio 3, Recorrer un arreglo de enteros, generar un nuevo arreglo
//let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// con valores que sean raiz cuadradas con resultado entero,
// es decir USANDO LA FUNCIÓN Math.sqrt() si el resultado es entero, guardarlo en un nuevo arreglo,
// sino no hacer nada. 

/*Filter y map*/

// ejercicio 2
// Recorrer un arreglo de numeros enteros, Si el entero es par, multiplicarlo por su mismo valor.
let aA = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4].filter((elementos) => elementos % 2 == 0).map((num) => num * num);
//devolver el resultado de los enteros que cumplen con la condición en un nuevo array.
// multiplique todos, deberia filtrar primero los pares
console.log(aA);




