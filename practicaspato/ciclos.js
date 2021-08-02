// // const a = [23, 12,1,2,3,4,5,6,7,8,9,11,10,53]

// // //recorriendo la coleccion con un ciclo for
// // // se usa para colecciones determinadas, cuando sabemos la cantidad de elementos

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }

// // para cuando no conocemos la cantidad de elementos que tiene nuestra coleccion
// //Estructura while (mientras que), se va a utilizar mientras se cumpla la condicion
// //declaramos el inicio (i), y se va a ejecutar "mientras que" se cumpla la condicion.
// // no necesitamos que recorra todo el array (no necesariamente va a recorrer todo el array)
// // necesitamos declarar un iterador
// // let i = 0;
// // while (condition) {
    
// // }

// const A = "El Vaticano pidió este martes una “negociación seria” en Venezuela, “que de respuestas a las verdaderas necesidades” de la población, En el marco de 77 asamblea anual de Fedecámaras, el obispo auxiliar de Caracas Ricardo Barreto leyó una carta enviada por el cardenal Pietro Parolin, secretario de Estado de la Santa Sede."
// // Buscar cantidad de "o" que hay en un texto.
// // Restricción: contar mayusculas y minusculas
// // push a nuevo arreglo guardando los indices de cada o.

// let AMinuscula = A.toLowerCase();

// console.log(AMinuscula);

// let ArraO = [];

const A = "El Vaticano pidió este martes una “negociación seria” en Venezuela, “que de respuestas a las verdaderas necesidades” de la población, En el marco de 77 asamblea anual de Fedecámaras, el obispo auxiliar de Caracas Ricardo Barreto leyó una carta enviada por el cardenal Pietro Parolin, secretario de Estado de la Santa Sede."
// // // Buscar cantidad de "o" que hay en un texto.
// // // Restricción: contar mayusculas y minusculas
// // // push a nuevo arreglo guardando los indices de cada o.
const B = A.toLowerCase();
// // console.log("El texto tiene:");
// console.log(A.length);
// console.log("CARACTERES");
// let indices = [];


// for (let i = 0; i < B.length; i++) {
//      if (B.charAt(i) == "o") {
//          indices.push(i);
//      }
//  }

// console.log(indices);

// let i = 0;
// while (B.charAt(i) !== ".") {
    
//     if (B.charAt(i) == "o") {
//         indices.push(i);
//     }

//     i++
// }

// console.log("La letra o se encuentra en los indices del string A en las siguientes pos " + indices);

// ejercicio de concatenar string
//let string = "mauri";
//let reverso = '';

// for (let i = 0; i < string.length; i++) {
//      reverso =  string.charAt(i) + reverso;
//       console.log(reverso); 
// }
//  console.log(reverso);


// // let B(es mi string en minuscula a concatenar)
// let reverso = "";

// for (let i = 0; i < B.length; i++) {
//     reverso = B.charAt(i) + reverso;
// }
// console.log(reverso);

// //hacer lo mismo con el ciclo while
let reverso = "";
let i = 0;
while (i < B.length) {
    reverso = B.charAt(i) + reverso;
    i++
}
//console.log(reverso.includes("a"));
//console.log(reverso.search("a"));

//reverso sin las vocales
//metodo search - includes

//metodo search: metodo de busqueda del indice de un caracter

//let str = "Patricia quiere ser programadora";
//console.log(str.search("r")); // ("tr") devuelve 2 - ("r") devuelve 3 - el caracter t se encuentra
// en el indice 2 y el caracter r en el indice 3

//metodo includes: determina si una cadena se encuentra en otra cadena
//console.log(str.includes("ser")); // devuelve true.

//ya tengo el reverso, ahora tengo que extraer las vocales:

//console.log(B.match("a"));

// let B(es mi string en minuscula a concatenar)
//let letraA = [];

// for (let i = 0; i < reverso.length; i++) {
//      if (reverso.match("a")) {
//       letraA.push(reverso[i])  
//      }
//  }
//console.log(letraA);

//let B es mi string en minuscula
//let reverso es mi string en reverso del cual quiero extraer las vocales

function eliminarVocales (str, vocal) {
for (let i = 0; i < str.length; i++) {
     reverso = reverso.replace(vocal, "");
} 
console.log(reverso);  
}
console.log(eliminarVocales(reverso, "a"));
console.log(eliminarVocales(reverso, "e"));
console.log(eliminarVocales(reverso, "i"));
console.log(eliminarVocales(reverso, "o"));
console.log(eliminarVocales(reverso, "u"));


// console.log(eliminarVocales(reverso));



//console.log(reverso);

//reverso = reverso.replace("a", "*");

//console.log(reverso);






let reversoSinVocales = "";
 for (let i = 0; i <= reverso.length; i++) {
     if (reverso.charAt(i) != "a" 
     && reverso.charAt(i) != "e" 
     && reverso.charAt(i) != "i" 
     && reverso.charAt(i) != "o" 
     && reverso.charAt(i) != "u") {
         reversoSinVocales = reversoSinVocales + reverso.charAt(i);
     }
     
 }

 // funcion replaceAll

















