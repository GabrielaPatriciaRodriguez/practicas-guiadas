//Crear una funcion que recibe 2 num. decir cual es el mayor, y si son iguales retornar
//son iguales

function mayor(a, b) {
  if (a > b) {
    return "El numero " + a + " es mayor a " + b;
  } else if (a < b) {
    return "El numero " + b + " es mayor al numero " + a;
  } else {
    return "Ambos numeros introducidos son iguales";
  }
}

/* 2.UTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS 
INTRODUCIDOS HASTA INTRODUCIR  UN NUMERO NEGATIVO, Y DE AHÍ 
MOSTRAR EL RESULTADO (USAR PROMPT,parseInt y ejecutarlo en el navegador)*/

let numeros = parseInt(prompt("Introduzca numeros al azar"));
let acumulador = 0; 
let contador = 0;

while (numeros >= 0) {
  acumulador = acumulador + numeros;
  contador = contador + 1;
  numeros = parseInt(prompt("Introduzca numeros al azar"));
}
console.log("La sumatoria es = a: " + acumulador);
console.log("El promedio es = a: " + acumulador / contador);


/*3. Hacer una funcion que recibe como parametro un min y un max, siendo min y max enteros, 
retornar todos los numeros que están entre esos parametros.
Por ejemplo min: 2 , max: 10, deben retornar: 3 4 5 6 7 8 9*/

function numIntermedios(min, max) {
  let i = min;
  for (i = min + 1; i < max; i++) {
    console.log(i);
  }
}

/*4. Hacer una funcion que devuelva todos los numeros impares 
entre dos numeros enteros. 
ejemplo, entre 1 y 10: se debe retornar: 3,5,7,9*/

function impares(min, max) {
  let i = min;
  for (i = min; i <= max; i++) {
    if (i % 2 === 1) 
    console.log(i);
  }
}

/* 6, dado un array de numeros enteros, devolver la suma y la media */

let numeros = [2, 4];
let suma = numeros.reduce((a, b)=> a + b, 0);
console.log(suma);i
let promedio = suma/numeros.length;
console.log(promedio);

//Otra forma:
let numeros = [2, 3, 3];
let suma = 0;
let promedio = 0;
for (i = 0; i < numeros.length; i ++){
    suma = suma + numeros[i];
    promedio = suma/numeros.length;
}
    

/*7. realizar un programa que nos devuelva la tabla de multiplicar de un numero 
(multiplicar el numero hasta 10)*/

function tablaMultiplicar (num) {
    for(i = 1; i < 11; i++){
        console.log(num + " x " + i + " = " + (num * i))
    }
}


