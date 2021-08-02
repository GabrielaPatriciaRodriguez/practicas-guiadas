// /* sumar en una variable todos los numeros pares de un array*/ 

    
// const  enterosDos= [12,355,45,14,21,32,10,9,45,1024];
// var sumar = 0;
// for(i=0; i <enterosDos.length; i ++){
//     if(enterosDos[i] %2== 0){
//         sumar = sumar + enterosDos[i]
//     }
// }
// console.log(sumar)




// //sumar los numeros que sean divisibles por 2 o por 5 ||
// const  enterosTres= [12,355,45,14,21,32,10,9,45,1024]
// sumar=0;

// for(i=0; i< enterosTres.length; i ++){
//  if(enterosTres[i]% 2== 0 || enterosTres[i]% 5 == 0){
//      sumar= sumar + enterosTres[i]
//  }
// }
// console.log(sumar)


// /* == Es igual a == b
//    === Es estrictamente igual a === b
//    != Es distinto a != b
//    !== Es estrictamente distinto a !== b
//    <, <=, >, >=   Menor, menor o igual, mayor, mayor o igual  a <=b
//    && Operador and (y) a && b
//    || Operador or (o)  a || b
//    ! Operador not (no) !a      */


// Math.round(Math.random() * 100)

// let aleatorio = Math.round(Math.random() * 100)

// // Biblioteca Math o clase Math 

// // generar un DADO

// function random() {
//     return Math.round(Math.random() * (2000 - 1) + 1);
//   }


// // UTILIZAR UN CICLO WHILE PARA GENERAR UN DADO de 6 caras. 
// let aleatorio= random();
// let dado = 1; 
// let i = 1;
// while(i <=aleatorio){
//     if(dado == 6){
//         dado = 1;
//     }

//     i++;
//     dado = dado + 1;
// }

// console.log("el resultado del dado es : " + dado);


//Crear una funcion en la cual le de el precio(parametro) y tengo que sumar el 21 % de IVA.

//let total = 0; //precio + impuesto
//let impuesto = 1.21;// 21 %;
//let precio = 0;
// function precioMasIva (precio) {
//     return(precio * impuesto);
// }

// console.log(precioMasIva(100));


//parametros precio e impuestos

// function total (precio, impuesto) {
//     impuesto = impuesto/100;
//     impuesto = impuesto + 1;
//     return precio*impuesto;
// }


// console.log(total(100, 35));








