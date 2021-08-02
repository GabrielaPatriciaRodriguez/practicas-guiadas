// OBJETO STRING USANDO METODOS
// RESTRICCIÓN: NO PODER USAR FUNCIONES


// USAR CICLOS FOR Y CICLOS WHILE
// ejemplos de For:
// for (let i = 0; i < "AlgunaCadena".length; i++) {
//     console.log("ITERANDO ALGO: " + i );    
// }

//ejemplo
// condicion siempre comparar una variable
//let contador = 0;
//while (contador <= 10 ) {
  //  console.log("ITERANDO ALGO: " + i );
    //contador++;  
//}

// ejercicios 1:
// "dado un string A = "CUALQUIER TEXTO PUEDE IR ACÁ." 
//como entrada (que siempre finaliza en un punto) , DEVOLVER LA LONGITUD DEL MISMO.
// NO SE PUEDE USAR EL MÉTODO .length | Pista, USAR EL CICLO WHILE ES EL ADECUADO. 


// let stringA = "CUALQUIER.";
// let contador = 0;
// while (stringA.charAt(contador) != ".") {
//   contador = contador + 1;
// }
// console.log("la longitud de mi string es " + contador + " caracteres.");



//ejercicios 2:
// Dado un string B = "CUALQUIER TEXTO PUEDE IR ACÁ;" de entrada, (que siempre finaliza en un ";") 
//contar la frecuencia  de una letra;
// | SI PUEDEN USAR EL MÉTODO .Length, .chartAt() | FOR. 

// const stringB = "CUALQUIER TEXTO PUEDE IR ACÁ;";
// let letraC = 0;
// for (let i = 0; i < stringB.length; i++) {
//   if (stringB.charAt(i) === "C")
//     letraC ++;    
// }
// console.log("la frecuencia de la letra C es " + letraC);
// // ocupar un while y ; -

// const stringB = "CUALQUIER TEXTO PUEDE IR ACÁ;";
// let contador = 0;
// let i = 0;

// while (stringB.charAt(i) != ";") {
//   if (stringB.charAt(i) === "C") {
//     contador = contador + 1;
//   }
//   i++;
// };
      
// console.log("la frecuencia de la letra C es " + contador);



//ejercicio 3: Dado un String C = "CUALQUIER TEXTO PUEDE IR ACÁ." DEVOLVER 2 STRINGS, EN UNO DE 
//ellOS LAS VOCALES, Y EN EL OTRO LAS CONSONANTES
// EJEMPLO: vocales = 'UAUIEEOUEEIAA' consonantes = 'CLQRTXTPRC' 
// PERMITIDO método .length .chartAt | permitido ARRAY DE VOCALES ["A","E","I","O","U"] "AEIOU"

// let stringC = "CUALQUIER TEXTO PUEDE IR ACA.";
// let stringSinVocales = "";
// let stringConVocales = "";
//  for (let i = 0; i <= stringC.length; i++) {
//      if (stringC.charAt(i) != "A" 
//      && stringC.charAt(i) != "E" 
//      && stringC.charAt(i) != "I" 
//      && stringC.charAt(i) != "O" 
//      && stringC.charAt(i) != "U") {
//       stringSinVocales = stringSinVocales + stringC.charAt(i);
//      } else {
//       stringConVocales = stringConVocales + stringC.charAt(i);
//      } 
// }

// console.log("Este es mi string con vocales " + stringConVocales);
// console.log("Este es mi string sin vocales " + stringSinVocales);

//Otra opcion:

// let stringC = "CUALQUIER TEXTO PUEDE IR ACA.";
// let stringSinVocales = "";
// let stringConVocales = "";
//  for (let i = 0; i <= stringC.length; i++) {
//      if (stringC.charAt(i) == "A" 
//      || stringC.charAt(i) == "E" 
//      || stringC.charAt(i) == "I" 
//      || stringC.charAt(i) == "O" 
//      || stringC.charAt(i) == "U") {
//       stringConVocales = stringConVocales + stringC.charAt(i);
//      } else {
//       stringSinVocales = stringSinVocales + stringC.charAt(i);
//      } 
// }

// console.log("Este es mi string con vocales " + stringConVocales);
// console.log("Este es mi string sin vocales " + stringSinVocales);



//Ejercicio 4: "UNA PERSONA FUE DESORDENADA EN LA VIDA Y ACUMULÓ EN UN 
let stringD = "AJASKDJ228312EJQD721312JWD823D"; //LETRAS Y NUMEROS
// TIENEN LA DIFICIL TAREA DE SEPARAR LOS NUMEROS Y LETRAS EN DOS CADENAS.
// PERMITIDO método .length .chartAt | PISTA, SE PUEDE PREGUNTAR SI typeOf() 
//luego de un  parseInt()

let letras = "";
let numeros = "";

for (let i = 0; i <= stringD.length; i++) {
  if (stringD.charAt(i) != "1"
  && stringD.charAt(i) != "2"
  && stringD.charAt(i) != "3"
  && stringD.charAt(i) != "4"
  && stringD.charAt(i) != "5"
  && stringD.charAt(i) != "6"
  && stringD.charAt(i) != "7"
  && stringD.charAt(i) != "8"
  && stringD.charAt(i) != "9") {
    letras = letras + stringD.charAt(i);  
  } else {
    numeros = numeros + stringD.charAt(i);
  }
};
console.log("Este es mi stringD en letras " + letras);
console.log("Estos son los numeros de mi stringD " + numeros);

// Ejercicio 5: Dado un texto: 
//const textoZ = "Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena + y +=, verificando la existencia o ubicación de subcadenas con indexOf() o extraer subcadenas con el método substring()."
// // DEVOLVER LA CANTIDAD DE PALABRAS Y ADEMAS GENERAR UNA CADENA REVERSO.
// // PISTA: Las palabras se separan en un espacio o en un punto. 
// //console.log();
//let textoZDos = textoZ.split(" " || ".");
//console.log("El texto Z tiene " + textoZDos.length + " palabras."); // 54 palabras

//console.log("Este es el texto original " + textoZDos);

// // generar una cadena reverso de textoZ

//

// let contadorDePalabras = 0;
// let i = 0;
// while (i <= textoZ.length) {
//   if (textoZ.charAt(i) === " ") {
//     contadorDePalabras = contadorDePalabras + 1;
//   }
//   i++;
// };
// contadorDePalabras = contadorDePalabras + 1;

// console.log("El texto Z tiene " + contadorDePalabras + " palabras"); // da 53 palabras.

// // for (let i = 0; i <= textoZ.length; i++) {
//   if (textoZ.charAt(i) === " ") {
//     contadorDePalabras = contadorDePalabras + 1;
//   }
// };
// contadorDePalabras = contadorDePalabras + 1;

// console.log("El texto Z tiene " + contadorDePalabras + " palabras");

// // reverse de textoZ. Transformo el texto en un array con split, separando cada caracter. 
//Luego con reverse lo paso al reverse
// // y con join lo vuelvo a pasar de array a string, uniendo los caracteres que estaban separados por split.
// console.log("Este es el texto en reverso " + textoZ.split("").reverse().join(""));

// let reverso = "";
// let miString = "Pato";

// for (let i = 0; i < miString.length; i++) {
//     reverso = miString.charAt(i) + reverso;
//   };

// console.log(reverso);




