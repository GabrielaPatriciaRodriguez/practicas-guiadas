// En el supuesto de notas, me mostrara por consola distintos 
// mensajes segun sea A, B, C, u otras

let nota = "D";

switch (nota) {
    case "A":
        console.log("excelente");
        break;
    case "B":    
        console.log("regular, a seguir estudiando");
        break;
    case "C":
        console.log("Muy malo, deberas esforzarte mas");
        break;
    default:
        console.log("No esta computado, ve ya a estudiar");
        break;
};