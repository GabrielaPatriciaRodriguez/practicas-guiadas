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

//Integrando con FUNCIONES

function mensajeFinal (nota) {
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
    }
};

mensajeFinal("A");
mensajeFinal("B");
mensajeFinal("C");
mensajeFinal("abdc");

function decorador (nombre, genero) {
    if (genero == "M") {
        return "Sr. " + nombre;
    } else if (genero == "F") {
        return "Sra. " + nombre;
    } else {
        return "ingresar M o F";
    }
};

console.log(decorador("Patricia", "F"));
console.log(decorador("Lore", "F"));
console.log(decorador("Titi", "as"));