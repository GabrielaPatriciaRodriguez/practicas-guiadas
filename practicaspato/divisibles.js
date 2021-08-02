// Dado un arreglo de numeros
let arrayNum = [12, 355, 45, 14, 21, 32, 10, 9, 1024];
//generar 2 nuevos arreglos con aquellos numeros que cumplen con la condicion de ser divisbles 
//por 2 y por 3

let arrayDivDos = [];
let arrayDivTres= [];

for (i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 === 0) {
        arrayDivDos.push(arrayNum[i]);
    } if (arrayNum[i] % 3 === 0) {
            arrayDivTres.push(arrayNum[i]);
    }
    }
    
console.log("Numeros divisibles por 2");
console.log(arrayDivDos);
console.log("Numeros divisibles por 3");
console.log(arrayDivTres);
