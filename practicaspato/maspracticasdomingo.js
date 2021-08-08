// //Practicando con for:

// let arrayDeNum = [1,2,3,4,5,6,7,8,9];

// //conociendo la longitud de mi arreglo

// console.log("Esta es la longitud de mi arreglo " + arrayDeNum.length);

// //haciendo un for para que me muestre todos los elementos de mi array desde el indice 0(1

// for(i= 0; i < arrayDeNum.length; i++) {
//     console.log(arrayDeNum[i]);
// };

// //Haciendo un for para que muestre todos los elementos de mi arreglo pero desde el ultimo hacia 
// //el primero.

// for(i= arrayDeNum.length - 1; i >= 0; i--) {
//     console.log(arrayDeNum[i]);
// };

//FUNCIONES
/* DECLARAR FUNCIONES: No es lo mismo declarar una funcion que ejecutarla */
//DECLARANDO FUNCIONES:

function Saludar (nombre) {
    console.log("Hola " + nombre);
};

//EJECUTANDO LA FUNCION: llamandola.
Saludar("Lorena");
Saludar("Maxi");
Saludar("Mauri");

//Declarando la funcion sumar
function Sumar (n1 , n2) {
    console.log(n1 + n2);
};

//ejecutando la funcion sumar
Sumar(45, 15);
Sumar(1, 2);
Sumar(80, 100);