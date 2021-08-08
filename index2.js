// ejercicios con ,forEach()
 
// 1 : dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] mostrar por consola todos los elementos
// usando forEach (SOLO FOREACH!!! )

let arregloA = [1,2,3,4,5,6,7,7,73,4,6,6,74];

arregloA.forEach(element => {
    console.log(element);
});

[1,2,3,4,5,6,7,7,73,4,6,6,74].forEach((i) => console.log(i));

// 2: dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] mostrar por consola todos los elementos Y 
// DEVOLVER EL NUMERO DE ELEMENTOS!! (sin usar la propiedad .length)

let suma = 0;
[1,2,3,4,5,6,7,7,73,4,6,6,74].forEach((i) => {console.log(i); suma ++});
console.log(suma);

// 3: dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] devolver en un arreglo
// B= [] los numeros pares
let aA = [1,2,3,4,5,6,7,7,73,4,6,6,74];
let bB = [];
aA.forEach((i) => {
    if (i % 2 == 0) {
        bB.push(i);
    }
});
console.log(bB);

// 4: dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] devolver en un arreglo A los pares 
// y en un arreglo B los impares

let a = [1,2,3,4,5,6,7,7,73,4,6,6,74];
let b = [];
let c = [];
a.forEach((i) => {
    if (i % 2 == 0) {
        b.push(i);
    } else
    c.push(i)
});
console.log(b);
console.log(c);

// 5 dado un arreglo [a,s,f,f,w,w,r,v,d,s,c,a,v,y,u,ut,e,r,] devolver en un 
// nuevo arreglo UPPER convertir todos los elementos en mayusculas. 

let minusculas = ["a","s","f","f","w","w","r"];
let mayusculas = [];

minusculas.forEach((i) => {
    mayusculas.push(i.toUpperCase());
});
console.log(mayusculas);
// (i) es el elemento de cada indice, el valor que tiene ese elementos, primero es "a", luego "s"....