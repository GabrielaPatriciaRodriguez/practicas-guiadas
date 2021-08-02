//Creando contraseñas

//Dado un array

//let alfabeto = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z];

//crear contraseña tomando como indice un numero random que oscile entre 0 y 25. Se debera crear 
//una funcion que tome la nueva contraseña, pasando como parametro un numero que sera el largo 
//del string (longitud de la contraseña). El string que me de el usuario sera las veces
//que debe recorrer el array de letras para formar una contraseña nueva

// //function aleatorio (minimo, maximo) {
//     return Math.round(Math.random() * (maximo - minimo) + minimo);
// }
// console.log(aleatorio(0, 25));

//generando un numero random entre 0 y 25
// let indexRandomEntre = Math.round(Math.random() * (25 - 1) + 1); // EN GOOGLE ME TRAE NUM RANDOM
// // console.log(randomE); NO ME TRAE NADA EN ESTA TERMINALS

// // pedir al usuario un string
// let stringDelUsuario = prompt("Escribe una cadena de texto de hasta 25 caracteres");
// //contando el largo del string del usuario
// let longitudString = stringDelUsuario.length; //longitud que debe recorrer mi funcion.


// let i= indexRandomEntre;
// let iMasMas = longitudString;
// let contraseñaUno = 0;
// let contraseñaDos = 0;

// function contraseña (stringQueElUsuarioVaAPasar) {
//     for (i = 0; i < stringQueElUsuarioVaAPasar.length; i = i++) {
//         return contraseñaUno;
//     } for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }






//Creando contraseñas

//Dado un array

let alf = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let alfabeto = alf.toString();

//crear contraseña tomando como indice un numero random que oscile entre 0 y 25. Se debera crear 
//una funcion que tome la nueva contraseña, pasando como parametro un numero que sera el largo 
//del string (longitud de la contraseña).

function generarContraseña (longitud) {
    let nuevaContraseña = "";
    for (let i = 0; i < longitud; i++) {
        let numAleatorio = Math.round(Math.random() * alfabeto.length);
        nuevaContraseña += alfabeto.charAt(numAleatorio);
    }
   return nuevaContraseña; 
};

console.log(generarContraseña(16));