// Preguntando nombre y apellido
let name = prompt("Cual es tu nombre y apellido?");
// Obteniendo primera inicial
let firstInitial = name.slice(0,1);
// Buscando posicion del segundo caracter
let secondInitialPosition = name.indexOf(" ") +1;
// Obteniendo segunda inicial
let secondInitial = name.slice(secondInitialPosition,secondInitialPosition +1);
// Motrando en la web las iniciales
document.write("Tus iniciales son " + firstInitial.toUpperCase () + secondInitial.toUpperCase());
