// //ejercicio 5 es separar numeros y letras de un string y generar 2 strings separados 

// let D = "1AOSD404IFV8404OAAA4";
// let letras = "";
// let enteros = "";
// let numero = ["0","1","2","3","4","5","6","7","8","9"];
// let aux;

// for (let i = 0; i < D.length; i++) {
//        aux = D.charAt(i);

//        if(numero.includes(aux)){
//            enteros = enteros + aux;
//        }else{
//         letras = letras + aux;
//        }
    
// }
// console.log(letras);
// console.log(enteros);

// // sol 2 
// let D = "1AOSD404IFV8404OAAA4";
// let letras = "";
// let enteros = "";
// let numero = "0123456789"
// let aux;

// for (let i = 0; i < D.length; i++) {
//        aux = D.charAt(i);

//        if(numero.includes(aux)){
//            enteros = enteros + aux;
//        }else{
//         letras = letras + aux;
//        }
    
// }
// console.log(letras);
// console.log(enteros);

// //sol 3 
// let D = "1AOSD404IFV8404OAAA4";
// let letras = "";
// let enteros = "";
// let aux;

// for (let i = 0; i < D.length; i++) {
//        aux = D.charAt(i);

//        if( "0123456789".includes(aux)){
//            enteros = enteros + aux;
//        }else{
//         letras = letras + aux;
//        }
    
// }
// console.log(letras);
// console.log(enteros);


// //sol 3 
// let D = "1AOSD404IFV8404OAAA4";
// let letras = "";
// let enteros = "";
// let aux;
// let i = 0
// while (i < D.length) {
//        aux = D.charAt(i);

//        if( "0123456789".includes(aux)){
//            enteros = enteros + aux;
//        }else{
//         letras = letras + aux;
//        }
//        i++
// }
// console.log(letras);
// console.log(enteros);

// modificarlo para caracteres especiales ademas usar while 

// let D = "1AOSD&&///404!!IFV$$$8404OAAA4";
// let letras = "";
// let enteros = "";
// let especiales = "";
// let aux;
// let i = 0
// while (i < D.length) {
//        aux = D.charAt(i);

//        if("0123456789".includes(aux)){
//            enteros = enteros + aux;
//        } else if("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(aux)){
//         letras = letras + aux;
//        } else {
//         especiales = especiales + aux;
//        }
//        i++
// }
// console.log(letras);
// console.log(enteros);
// console.log(especiales);


let D = "1AOSD&&///404!!IFV$$$8404OAAA4";
let letras = "";
let enteros = "";
let especiales = [];
let aux;

let i = D.length - 1;
while (i >= 0) {
       aux = D.charAt(i);

       if("0123456789".includes(aux)){
           enteros = enteros + aux;
       } else if("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(aux)){
        letras = letras + aux;
       } else {
        especiales.push(aux);
       }
       i = i - 2;
};
console.log(letras);
console.log(enteros);
console.log(especiales);



