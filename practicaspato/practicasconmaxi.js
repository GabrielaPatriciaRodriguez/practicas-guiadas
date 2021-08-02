// // Hice la carta de Morena a traves de variable que contiene 1 objeto (se define entre llaves).
// // name y precio son propiedades del objeto.

//const { numDigits, object } = require("../../ejercicios/src/ejercicios")

// const morena = {
// name: "morena",
// precio: 450
// }

// const pizzamuza = {
// name: "muzzarella",
// precio: 500
// }

// const pizzanapo = {
// name: "napolitana",
// precio: 750
// }

// const pizzahumita = {
// name: "humita",
// precio: 850
// }

// // Creamos un array carrito y un array productos (y dentro de productos tenemos los distintos objetos)
// let carrito = []
// let productos = [morena, pizzamuza, pizzahumita, pizzanapo]

// //Despues creamos un objeto y lo guardamos dentro de la variable cliente.
// let cliente = {
// name: "Hernan",
// carrito: carrito, //un array
// total: 0
// }
// //console.log(productos);

// // Definimos una funcion, declare una funcion.
// function mostrarcarta(productos) {
//     console.log("Esta es la carta de Morena "),
//     console.log(productos)
// }

// mostrarcarta(productos)

// function agregarAlCarritoDelCliente(miCliente, productoQuePide) {
//     miCliente.carrito.push(productoQuePide)
//     console.log(miCliente)
// }

// agregarAlCarritoDelCliente(cliente, pizzahumita)
// agregarAlCarritoDelCliente(cliente, pizzamuza)
// agregarAlCarritoDelCliente(cliente, morena)

// function calcularTotal(params) {

// }

//IF
// const name = "Patricia";
// console.log("Hola" + name);
// if (name.lengh > 7) {
//   console.log("Que nombre tan largo tienes");
// // };

// const restaurantBill = (bill, friends) => {
//   const tax = bill*0.1;
//   let theTotal = bill + tax;
//   let theTotalHead = theTotal/friends;
//   return console.log("El total que debe abonar cada amigo es " + "$ " + theTotalHead.toFixed(2))
// };

// const name = "Patricia";
// console.log("Hola " + name);
//   if (name.length > 7) {
//     console.log("Que nombre tan largo tienes");
//   } else {
//     console.log("Tu nombre no es muy largo");
//   }

// function name(age) {
//   if (age >= 18) {
//     return ("Oh que grande eres");
//   } else if (age <= 18 && age >= 13) {
//     return ("Pequeñitooo");
//   } else {
//     return ("buuuu")
//   }
// }

//   console.log(name(7))

//Array
// variables sin arreglos:

//   let mes1 = "Enero"
//   let mes2 = "Febrero"
//   let mes3 = "Marzo"
//   let mes4 = "Abril"
//   let mes5 = "Mayo"
//   let mes6 = "Junio"
//   let mes7 = "Julio"
//   let mes8 = "Agosto"
//   let mes9 = "Septiembre"
//   let mes10 = "Octubre"
//   let mes11 = "Noviembre"
//   let mes12 = "Diciembre"

// console.log(mes1)
// console.log(mes2)
// console.log(mes3)
// console.log(mes4)
// console.log(mes5)

// Arrays: Conjunto de variables (pueden ser todo tipo)

// let mesesDelAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
// "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// //Accedemos para imprimirlos a traves de una estructura for
// for (let index = 0; index < mesesDelAño.length; index++) {
//   console.log(mesesDelAño[index]);
// }

// Funciones: para no repetir una serie de instrucciones q compliquen el codigo fuente.
//para no repetir las mismas instruccion una y otra vez, que puedan generar errores

// function sumarNumeros (num1, num2) //son parametros {
//   let sumaTotal = num1 + num2;
//   console.log("El resultado de la operacion es " + sumaTotal);
// }

// sumarNumeros(15, 2) // son argumentos

//Constructores? new Date (empiezan con mayuscula) Ej. Funtion

// const personas = [
//   {name:"Mai", age:28},
//   {name:"Lore",age:5},
//   {name:"Pato", age:4},
//   {name:"Ani",age:20},
//   {name:"Max",age: 29},
//   {name:"Mau", age: 27}];

// // El objetivo de la siguiente funcion es sumar
// // las edades de personas e imprimir solo los mayores a 20

// const personas = [
//   {name:"Mai", age:28},
//   {name:"Lore",age:5},
//   {name:"Pato", age:4},
//   {name:"Ani",age:20},
//   {name:"max",age: 29},
//   {name:"Mau", age: 27}];

// const otroarray = [{name:"John", age:48},
// {name:"Lore",age:30}]
// // // El objetivo de la siguiente funcion es sumar
// // // las edades de personas e imprimir solo los mayores a 20

// // function resolver(personas){
// //   let suma =0;

// //   for(let i =0; i< personas.length; i++){

// //     if(personas[i].age > 20){
// //       console.log(personas[i])
// //     }
// //     suma = suma + personas[i].age;

// //   }

// //   console.log(suma)
// // }

// // resolver(personas)
// // resolver(otroarray)
// //
// // La siguiente funcion es para reconocer propiedades de los string, tenemos que consologuear solo
// // personas que inicien con M

// function nombresConM(parametros) {
//   let firstInitial = name.slice(0);
//   for (let i = 0; parametros.name === "M"; i++) {
//     console.log("Estos nombres inician con M " + parametros[i]);
//   }
//   console.log(firstInitial)
// }
// nombresConM(personas)
// nombresConM(otroarray)

// function devolverSiM(array){

//   for (let indice = 0; indice < array.length; indice++){

//     // // Primera opcion
//     // if(array[indice].name[0] === 'M' || array[indice].name[0] === 'm'){
//     //   console.log(array[indice])
//     // }

//     // // Segunda opcion
//     // if(array[indice].name.slice(0,1).toUpperCase() === 'M'){
//     //   console.log(array[indice])
//     // }

//     // // Tercera opcion
//     // if(array[indice].name.slice(0,1).toLowerCase() === 'm'){
//     //     console.log(array[indice])
//     // }

//     // Cuarta opcion
//     if(array[indice].name[0].toLowerCase() === 'm'){
//         console.log(array[indice])
//     }

//   }
// }

// devolverSiM(personas)
// devolverSiM(otroarray)

//Array: Propiedades
// .length: Nos muestra la extension (longitud) del array. Ej.
// console.log([].length);
// console.log(['a'].length);
// console.log(['a', 2, "Patricia"].length);
// console.assert([true, 0, 'foo'].length);

//let frutas = ["Banana", "Manzana", "Pera"]

//Añadir un elemento al final del Array:
// let nuevaFruta = frutas.push("Naranja")

//Quitar el ultimo elemento:
// let sacar = frutas.pop("Pera")

//Añadir un elemento al principio del array:
// let nuevaFruta = frutas.unshift("Frutilla")

//Quitar el primer elemento:
//let primero = frutas.shift([0])

//Para encontrar el indice de un elemento del array:
//let pos = frutas.indexOf("Manzana")

//console.log(pos)

//Para eliminar elementos segun su posicion:
//let eliminarSegunPos = frutas.splice(1)
//Porque me deja solo banana, y elimina manzana y pera.

//Para copiar un array
//let copiarArray = frutas.slice();

//console.log(frutas)

//ACCESO A LOS ELEMENTOS DEL ARRAY
//let arr = ["Este es el primer elemento", "Este es el segundo elemento", "Este es el ultimo"]
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[arr.length -1]);!!!!

//para agregar y quitar elementos: `push`, `pop`, `shift`, `unshift`, `slice`,
//   `splice` y `concat`.
// - para buscar elementos dentro del array: `indexOf`, `lastIndexOf`, `includes`,
//   `find`, `findIndex` y `filter`.
// - para transformar el array: `map`,`reduce`, `sort`, `reverse`, `split` y `join`.

// Nosotros ahora nos enfocaremos en los 4 que consideramos un poco más utilizados:
// `filter`, `map` `sort` y `reduce`.

// `filter` nos permite obtener un subconjunto de los elementos
// del array, que cumplan con cierta condición

// `map` nos permite visitar cada uno de los elementos del array,
// recolectando en el proceso, un valor de retorno para cada
// elemento visitado

// Sort: ordena el array convirtiendolos en strings

//Bucle For

// for (let i = 2; i <= 20 //lo podemos reemplazar por una variable creada antes ; i += 2)
// { //i = i + 2
//   console.log(i);
// }

// la condicion la podemos guardar en una variable

// hacer una funcion que retorne quienes son abogados de genero femenino

// function retornaSegunParametros(arrayPersonas, generoQueQueremos, profesionQueQueremos){
//   let nuevoArray= [];
//   for(let i = 0; i < arrayPersonas.length; i++){
//     if(arrayPersonas[i].genero === generoQueQueremos && arrayPersonas[i].profesion === profesionQueQueremos){
//       nuevoArray.push(arrayPersonas[i])
//     }
//   }
//   return nuevoArray
// }

// console.log(retornaSegunParametros(personas,"femenino","Abogado")) // return patricia
// console.log(retornaSegunParametros(personas,"masculino","Abogado")) //

//Funcion que retorne personas de Virasoro:

// function personasDeVirasoro(arrayPersonas, ciudadQueQueremos) {
//   let nuevoArray= [];
//   for(let i= 0; i < arrayPersonas.length; i = i + 1) {
//     if(arrayPersonas[i].Ciudad === ciudadQueQueremos){
//       nuevoArray.push(arrayPersonas[i])
//     }
//   }
//   return nuevoArray
// }

// console.log(personasDeVirasoro(personas, "Virasoro"))

//Funcion que me imprima personas mayores de 40

// function personasMayoresDeCuarenta(arrayPersonas, edades) {
//   let nuevoArray= [];
//   for (let i= 0; i < arrayPersonas.length; i= i + 1) {
//     if (arrayPersonas[i].Edad >= 40){
//       nuevoArray.push(arrayPersonas[i])
//     }
//   }
//   return nuevoArray
// }
// console.log(personasMayoresDeCuarenta(personas, 40))

//Funcion que retorne personas mayores de 30 pero menores de 40

// function personasEntreTreintaYCuarenta(arrayPersonas, edades) {
//   let nuevoArray= [];
//   for (let i= 0; i < arrayPersonas.length; i= i + 1) {
//     if (arrayPersonas[i].Edad >= edades[0] && arrayPersonas[i].Edad <= edades[1]) {
//       nuevoArray.push(arrayPersonas[i])
//     }
//   }
//   return nuevoArray
// }
// console.log(personasEntreTreintaYCuarenta(personas, [30, 40]))

//funcion que me traiga personas que les guste el asado

// function personasQuePrefierenAsado (arraypersonas, comidafavorita) {
//   let nuevoArray= [];
//   for (let i= 0; i < arraypersonas.length; i= i + 1) {
//     if (arraypersonas[i].Comida === comidafavorita) {
//       nuevoArray.push(arraypersonas[i])
//     }
//   }
//   return nuevoArray
// }
// console.log(personasQuePrefierenAsado(personas, "asado"))

// personas.push({
//   name: "Betty",
//   genero: "femenino",
//   profesion: "Ama de casa",
//   esRica: true,
//   Ciudad: "Virasoro",
//   Edad: 58,
//   Nacimiento: 29/11/1963,
//   Hijos: 6,
//   Comida: "verduras"
// });

// console.log(personas);

// //Añadir un elemento al principio del array:
// // let nuevaFruta = frutas.unshift("Frutilla")

// personas.unshift({
//   name: "Anahi",
//   genero: "femenino",
//   profesion: "Estudiante",
//   esRica: true,
//   Ciudad: "Posadas",
//   Edad: 20,
//   Nacimiento: 15/05/2001,
//   Hijos: 0,
//   Comida: "Pastel de papas"
// });

// console.log(personas);

// crear una funcion que traiga personas de posadas de genero femenino

// function mujeresDePosadas(arrayQueLeVasApasar, generoF, ciudadP) {
//   let nuevoArray = [];
//   for (let i= 0; i < arrayQueLeVasApasar.length; i= i + 1){
//     if (arrayQueLeVasApasar[i].genero === generoF && arrayQueLeVasApasar[i].Ciudad === ciudadP) {
//       nuevoArray.push(arrayQueLeVasApasar[i])
//   }
//    }
//   return nuevoArray
// };
// console.log(mujeresDePosadas(personas,"femenino","Posadas"));

//function personasQuePrefierenAsado (arraypersonas, comidafavorita) {
//   let nuevoArray= [];
//   for (let i= 0; i < arraypersonas.length; i= i + 1) {
//     if (arraypersonas[i].Comida === comidafavorita) {
//       nuevoArray.push(arraypersonas[i])
//     }
//   }
//   return nuevoArray
// }
// console.log(personasQuePrefierenAsado(personas, "asado"))

// function personasQueTenganNumHijos (arraypersonas, cantidadDeHijos) {
//     let nuevoArray= [];
//     for (let i= 0; i < arraypersonas.length; i= i + 1) {
//       if (arraypersonas[i].Hijos === cantidadDeHijos) {
//         nuevoArray.push(arraypersonas[i])
//       }
//     }
//     return nuevoArray
//   }
//   console.log(personasQueTenganNumHijos(personas, 3))

// function personasNacidasEntre (arraypersonas, añosDeNac) {
//   let nuevoArray= [];
//   for (let i= 0; i < arraypersonas.length; i= i + 1) {
//     if (arraypersonas[i].Nacimiento >= 1963) {
//       nuevoArray.push(arraypersonas[i])
//     }
//   }
//   return nuevoArray
// }
// console.log(personasNacidasEntre(personas, 1963))

// console.log(personas.length); // viendo elementos de mi array
// console.log(personas[0], "primer indice");// buscando indice 0

//Quitar el ultimo elemento:
// let sacar = frutas.pop("Pera")
// Eliminar los que tengan 2 hijos

// console.log("cantidad en array original", personas.length);
// console.log("saco primero", personas.pop());
// console.log("saco segundo", personas.pop());
// console.log("cantidad luego de los pop", personas.length);

//Quitar el primer elemento:
//let primero = frutas.shift([0])

//Creamos un objeto que se llame Blog, que tenga propiedades (articulos "post", que van a ser
//objetos, a su vez van a tener propiedades: titulos "tittle", cuerpo "body", fecha, autores, comentarios)
// condicion: solo los que se encuentran en autores van a poder crear articulos "post"

// const Blog = {
//   autores: [],
//   post: [],
//   titulo: " ",
// };
// // Hacer una funcion que agregue un titulo a ese blog

// function agregarTitulo(recibeTitulo) {
//   Blog.titulo = recibeTitulo;
// }
// agregarTitulo("El Blog de Patricia");
// console.log(Blog);

// // Funcion agregar autor
// function agregarAutor(recibeAutor) {
//   Blog.autores.push(recibeAutor);
// }
// agregarAutor("Borges");
// agregarAutor("Bellucio");
// console.log(Blog);

// //Devuelve true si el autor se encuentra en el array autores sino devuelve false
// function seEncuentraEnAutores(recibeAutor) {
//   for (let i = 0; i < Blog.autores.length; i = i + 1) {
//     if (Blog.autores[i] === recibeAutor) {
//       return true;
//     } 
//   }
//   return false;
// }
// console.log(seEncuentraEnAutores("Bellucio"));

// // Hacer una funcion crear post, que reciba un titulo, body, y autor. Que devuelva un
// //un objeto con esos parametros: Tambien repasar funciones - scope

// Primera Funcion sin que pueda agregar objetos a post:
//function puedeCrearPost(titulo, body, autor) {
//   if (seEncuentraEnAutores(autor)) {
//     console.log(autor, "puede crear Post");
//   }
//   else {
//     console.log("No puede crear Post");
//   }
// }
// puedeCrearPost(null, null, "Maximiliano");
// puedeCrearPost(null, null, "Bellucio");

//2da. funcion cuando ya puede agregar objetos a post
//function puedeCrearPost(titulo, body, autor) {
 // if (seEncuentraEnAutores(autor)) {
//     console.log(autor, "puede crear Post y " + agregarObjAPost);
//   }
//   else {
//     console.log("No puede crear Post");
//   }
// }
// puedeCrearPost(null, null, "Maximiliano");
// puedeCrearPost(null, null, "Bellucio");


//Funcion agregar a Post, que es un array vacio: Titulo y autor

// function agregarObjAPost(TituloDePost, autorDePost, Body) {
//   Blog.post.push(TituloDePost);
// }
// agregarObjAPost({Titulo: "Programacion Patricia", autor: "Bellucio", body: " "});

// console.log(Blog);
// puedeCrearPost(null, null, "maxi");




// Ejercicios de auto evalucacion

// Remplaza null por lo que corresponda segun el caso.


// Primer ejercicio
// Crear una funcion que reciba un numero entero y devuelva el numero de digitos
// que tiene el numero.

// function numDigits(num){
//   returne(num.toString().length);
// }
// numDigits(15589); // llamar a la funcion con console.log?

// //Segundo ejercicio
//Crear un objeto que tenga como atributos texto, numeroEntero y numeroReal

// function object(text, numEntero, numReal){
// //    // Aqui va tu codigo
// const obj = {
//     texto: text, 
//     numeroEntero: numEntero, 
//     numeroReal: numReal
// };
// //   // no debe modificar el return
//   return obj;
// }

// function object(text, num, numReal){
//     // Aqui va tu codigo
//     const obj= {text, num, numReal}
    
//     // no debe modificar el return
//     return obj;
//   }

// console.log(object("La casa de las niñas", 25, 85));

//Tercer ejercicio
// Crear un array con 10 elementos que tengan las mismas propiedades que el objeto que retorna la funcion anterior

// const friends= [
//   {"Maxi": object()},
//   {"Lore": object()},
//   {"Anahi": object()},
//   {"Sabrina": object()},
//   {"Lara": object()},
//   {"Chicha": object()},
//   {"Maxi2": object()},
//   {"Lore2": object()},
//   {"Anahi2": object()},
//   {"Ana": object()}
// ]
// console.log(friends);
// console.log(friends.length)
// tipos de datos
// Ejemplo number

// const numero = 1;
// const otroNumero = 1.3;
// const otroNumero2 = -2.3;

// // Ejemplo string

// const cadena = "Hola";
// const otraCadena = "";
// const otraCadena2 = "Hola Mundo!";

// // Ejemplo boolean

// const verdadero = true;
// const falso = false;

// // Ejemplo array
// const func = () => {return "salio de la función"}
// const array = ["uno", "dos", "tres"];
// const otroArray = [1,2,3,4,5];
// const otroArray2 = [{ name: "Fulano"}, { name: "Beltrano"}, { name: "Ciclano"}, { name: "Deltrano"}];
// const otroArray3 = [true, false, true, false];
// const otroArray4 = [func(),2,3,4,false, "hola", "mundo", function(){ console.log("hola mundo, mira se ejecuto la funcion que tenia en la ultima posición de array"); }];

// // Ejemplo object

// const objeto = {};
// const otroObjeto = { 
//   name: "Fulano",
//   age: 30,
//   job: "Desarrollador"
// };
// const otroObjeto2 = { 
//   name: "Beltrano",
//   age: function(){ return 30; },
//   job: "Desarrollador",
//   state:{
//     name: "Buenos Aires",
//     capital: "Buenos Aires"
//   }
// };

// // Ejemplo function

// function funcion(){
//   console.log("hola mundo");
// }

// // Otras funciones

// function sumar(a, b){ // Ejemplo de funcion con parametros
//   return a + b;
// } 

// function operacion(a, b){
//   // return sumar(a, b);
//   const result = sumar(a, b);
//   return result;
// }

// function funcionQueLePasoOtraFuncionComoParametro(a,b, funcion){ // retornar el resultado de
//   return funcion(a,b)                                            // la funcion pasada como parametro
//                                                                  // o su ejecucion.
// }


// // Ejemplo acceso a propiedades de un objeto

// // Ejemplo uno:

// const nombre = otroObjeto.name;
// const edad = otroObjeto.age;
// const trabajo = otroObjeto.job;

// // Ejemplo dos:

// const nombre2 = otroObjeto2['name'];
// const edad2 = otroObjeto2['age'];
// const trabajo2 = otroObjeto2['job'];
// const estado = otroObjeto2['state'];
// const capital = estado['capital'];
// const otroCapital = estado.capital;


// // Ejemplo de acceso a elementos de un array

// const primerElemento = array[0];
// const segundoElemento = array[1];
// const tercerElemento = array[2];
// const ultimoElemento = array[array.length - 1];
// const anteUltimoElemento2 = array[array.length - 2];

// // Puedo guardar funciones en un array
// otroArray4[otroArray4.length - 1]();
// console.log(otroArray4[0])

// // Que puedo hacer con numeros y strings?

// // Con numeros:

//Cuarto ejercicio
// Crear una funcion que reciba un objeto y que retorne true si el objeto 
// tiene un atributo llamado "nombre" o false en caso contrario.

// const objUno= {
//   name: "Patricia",
//   ciudad: "Virasoro",
//   Edad: 36,
// }

// function hasName(obj){
//   if (obj === obj.name) {
//     return(true)
//   }// Aqui va tu codigo
// }
// console.log(hasname({
//   name: "Patricia",
//   ciudad: "Virasoro",
//   Edad: 36,
// })




// filtrar los objetos del array que cumplan con las condiciones que se le pasen
// ejemplo : filter(personas,"nacionalidad" "brazil");
// deberia devolver un array con todos los objetos que tengan como nacionalidad "brazil"

// function filter(array, propiedad, valor){
//   let nuevoArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i].brazil) {
//       return nuevoArray 
//   }// Aqui va tu codigo
//  }
//  }
// const personas = [
//   {
//     name: "Patricia",
//     nacionalidad: "Argentina",

//   }
// ]

//con este texto generar 2 arreglos:
// primer arreglo los que tienen al menos una u y son menores a 5
//segundo los que no cumplen esa condicion

//metodo split y search. string

//const text = "En el caso de la compañía farmacéutica norteamericana, que en alianza con la empresa de biotecnología alemana BioNTech desarrollaron la primera vacuna de ARN mensajero en ser aplicada en los brazos de millones de personas por primera vez en la historia de la ciencia, desde Pfizer reiteraron que su formulación funciona contra la mutación Delta e incluso agregaron que planean estudiar una fórmula pensada y dirigida contra esta variación del SARS-CoV-2. Informaron que lanzarán ensayo"

//console.log(text.length); Tiene una longitud de 485

// Transformando este texto en un array
let arr = text.split(" ");
//console.log(arr);
//console.log(arr.length);

//console.log(arr.length); //Mi array tiene una longitud de 75

let primerArreglo = [];
let segundoArreglo = [];

for (let i = 0; i < arr.length -1; i++) {
  if (arr[i].search("u") > -1 && arr[i].length <= 5) { //tb puedo colocar >=0
    primerArreglo.push(arr[i])
  } else(segundoArreglo.push(arr[i]));
}
console.log("palabras que cumplen con la condicion");
console.log(primerArreglo);
console.log("palabras que no cumplen con la condicion");
console.log(segundoArreglo);















